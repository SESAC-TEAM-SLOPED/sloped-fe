import { useState, useEffect } from "react";
import api from "../../service/api";

const useVerificationCode = (
  email: string,
  domain: string,
  customDomain: string,
  pageType: "register" | "recovery",
) => {
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (timer > 0) {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    } else {
      setIsButtonDisabled(false);
    }
  }, [timer]);

  const handleSendVerificationCode = async () => {
    const fullEmail = `${email}@${domain === "custom" ? customDomain : domain}`;
    const endpoint =
      pageType === "recovery"
        ? "/api/auth/send-code/recovery-code"
        : "/api/auth/send-code/verification-code";

    try {
      await api.post(endpoint, { email: fullEmail });
      setSuccessMessage("이메일이 전송되었습니다!");
      setIsButtonDisabled(true);
      handleRequestCode();
    } catch (error: any) {
      if (error.response?.status === 409) {
        setError("중복된 이메일입니다. 다른 이메일을 사용해주세요.");
      } else {
        setError(error.response?.data || "이메일 전송에 실패했습니다!");
      }
    }
  };

  const handleVerify = async () => {
    const fullEmail = `${email}@${domain === "custom" ? customDomain : domain}`;
    try {
      const response = await api.post("/api/auth/verify-code", {
        email: fullEmail,
        code: verificationCode,
      });
      if (response.status === 200) {
        setSuccessMessage("인증이 성공했습니다!");
        setIsVerified(true);
        return true;
      } else {
        setError("인증에 실패했습니다. 코드가 올바르지 않습니다.");
        setIsVerified(false);
        return false;
      }
    } catch (error: any) {
      if (error.response?.status === 400) {
        setError("코드가 올바르지 않습니다.");
      } else {
        setError(error.response?.data || "인증에 실패했습니다.");
      }
      setIsVerified(false);
      return false;
    }
  };

  const handleRequestCode = () => {
    setTimer(300); // 5분(300초) 타이머 시작
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  return {
    verificationCode,
    setVerificationCode,
    isVerified,
    setIsVerified,
    timer,
    isButtonDisabled,
    successMessage,
    handleSendVerificationCode,
    handleVerify,
    formatTime,
    error,
  };
};

export default useVerificationCode;
