import { useState, useEffect } from "react";
import api from "../../api";

const useVerificationCode = (
  email: string,
  domain: string,
  customDomain: string,
) => {
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [error, setError] = useState("");

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
    try {
      const endpoint = "/api/auth/send-code/verification-code"; // single endpoint
      await api.post(endpoint, { email: fullEmail });
      setMessage("이메일이 전송되었습니다!");
      setMessageType("success");
      setIsButtonDisabled(true);
      handleRequestCode();
    } catch (error: any) {
      setError(error.response?.data || "이메일 전송에 실패했습니다!");
      setMessageType("error");
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
        setMessage("인증이 성공했습니다!");
        setMessageType("success");
        setIsVerified(true);
        return true;
      } else {
        setMessage("인증에 실패했습니다. 코드가 올바르지 않습니다.");
        setMessageType("error");
        setIsVerified(false);
        return false;
      }
    } catch (error: any) {
      setError(error.response?.data || "인증에 실패했습니다.");
      setMessageType("error");
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
    message,
    messageType,
    handleSendVerificationCode,
    handleVerify,
    formatTime,
    error,
  };
};

export default useVerificationCode;
