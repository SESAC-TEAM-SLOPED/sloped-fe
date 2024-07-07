import { useState, useEffect } from "react";
import axios from "axios";

const useVerificationCode = (
  email: string,
  domain: string,
  customDomain: string,
  baseURL = "http://localhost:8080",
) => {
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const api = axios.create({
    baseURL,
  });

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
      await api.post("/api/auth/sendCode", {
        email: fullEmail,
      });
      setMessage("이메일이 전송되었습니다!"); // 성공 메시지 설정
      setMessageType("success");
      setIsButtonDisabled(true); // 버튼 비활성화 설정
      handleRequestCode(); // 타이머 및 버튼 비활성화 함수 호출
    } catch (error) {
      setMessage("이메일 전송에 실패했습니다!"); // 실패 메시지 설정
      setMessageType("error");
    }
  };

  const handleVerify = () => {
    // 여기에 인증번호 검증 로직을 추가하세요.
    // 검증 실패 시 setError("인증번호가 오지 않나요?");
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
  };
};

export default useVerificationCode;
