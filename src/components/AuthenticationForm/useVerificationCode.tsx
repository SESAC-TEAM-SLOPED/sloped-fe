import { useState, useEffect } from "react";
import api from "../../service/api";
import { serverUrl } from "../../constant/url";

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
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

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
    if (!email) {
      setMessage("이메일을 입력하지 않았습니다.");
      setMessageType("Error");
      return;
    }

    const fullEmail = `${email}@${domain === "custom" ? customDomain : domain}`;
    const endpoint =
      pageType === "recovery"
        ? `${serverUrl}/api/auth/send-code/recovery-code`
        : `${serverUrl}/api/auth/send-code/verification-code`;

    try {
      await api.post(endpoint, { email: fullEmail });
      setMessage("이메일이 전송되었습니다!");
      setMessageType("Success");
      setIsButtonDisabled(true);
      handleRequestCode();
    } catch (error: any) {
      if (error.response?.status === 409) {
        setMessage("중복된 이메일입니다. 다른 이메일을 사용해주세요.");
        setMessageType("Error");
      } else if (error.response?.status === 404) {
        setMessage("없는 이메일입니다. 이메일을 확인해주세요.");
        setMessageType("Error");
      } else {
        setMessage(error.response?.data || "이메일 전송에 실패했습니다!");
        setMessageType("Error");
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
        setMessage("인증이 성공했습니다!");
        setMessageType("Success");
        setIsVerified(true);
        return true;
      } else {
        setMessage("인증에 실패했습니다. 코드가 올바르지 않습니다.");
        setMessageType("Error");
        setIsVerified(false);
        return false;
      }
    } catch (error: any) {
      if (error.response?.status === 400) {
        setMessage("코드가 올바르지 않습니다.");
        setMessageType("Error");
      } else {
        setMessage(error.response?.data || "인증에 실패했습니다.");
        setMessageType("Error");
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
    handleSendVerificationCode,
    handleVerify,
    formatTime,
    message,
    messageType,
  };
};

export default useVerificationCode;
