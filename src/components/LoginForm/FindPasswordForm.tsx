import React, { useState, useEffect } from "react";
import { FaRegQuestionCircle, FaCheckCircle } from "react-icons/fa";

//통과 페이지 호출용
type Props = {
  setActiveTab: (tab: string) => void;
};

const FindPasswordForm = ({ setActiveTab }: Props) => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [domain, setDomain] = useState("naver.com");
  const [customDomain, setCustomDomain] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");
  const [showHelp, setShowHelp] = useState(false);
  const [timer, setTimer] = useState(0); // 타이머 상태
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0 && isButtonDisabled === false) {
      setIsButtonDisabled(true);
    }
  }, [timer, isButtonDisabled]);

  const handleVerify = () => {
    if (verificationCode === "123456") {
      // 예시: 인증번호가 "123456"일 때 통과
      setIsVerified(true);
      setError("");
    } else {
      setIsVerified(false);
      setError("잘못 입력하셨습니다!");
    }
  };

  const handleContinue = () => {
    setActiveTab("password-pass"); // 통과페이지로
  };

  const handleRequestCode = () => {
    setTimer(300); // 5분(300초) 타이머 시작
    setIsButtonDisabled(false);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };
  return (
    <div
      style={{ minHeight: "80vh" }}
      className="flex flex-col items-center justify-center min-h-screen space-y-6 bg-white"
    >
      <h1 className="text-xl font-bold mb-6">본인확인 이메일로 인증</h1>

      <div className="w-[300px] mb-4">
        <label htmlFor="id" className="text-sm text-gray-700 mb-2">
          아이디
        </label>
        <input
          type="text"
          id="id"
          className="w-full border-b border-gray-400 py-2 outline-none"
          placeholder="아이디 입력"
          value={id}
          onChange={(event) => setId(event.target.value)}
          disabled={isVerified} // 아이디 수정 불가
        />
      </div>

      <div className="w-[300px] mb-4">
        <label htmlFor="email" className="text-sm text-gray-700 mb-2">
          이메일
        </label>
        <div className="flex items-center border-b border-gray-400 py-2">
          <input
            type="text"
            id="email"
            className="flex-grow outline-none"
            placeholder="이메일 입력"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isVerified} // 이메일 수정 불가
          />
          <span className="mx-2">@</span>
          {domain === "custom" ? (
            <input
              type="text"
              className="outline-none"
              placeholder="직접 입력"
              value={customDomain}
              onChange={(e) => setCustomDomain(e.target.value)}
              disabled={isVerified} // 이메일 수정 불가
            />
          ) : (
            <select
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="outline-none"
              disabled={isVerified} // 이메일 수정 불가
            >
              <option value="naver.com">naver.com</option>
              <option value="gmail.com">gmail.com</option>
              <option value="custom">직접 입력</option>
            </select>
          )}
        </div>
      </div>

      <div className="w-[300px] flex justify-between items-center mb-4">
        {timer > 0 && (
          <div className="text-center text-black-500 text-2xl">
            {formatTime(timer)}
          </div>
        )}
        <button
          className={`h-[40px] bg-signiture text-white rounded-lg ${
            timer > 0 ? "w-[50%]" : "w-full"
          }`}
          onClick={handleRequestCode}
        >
          인증번호 받기
        </button>
      </div>

      <div className="w-[300px] mb-4 flex items-center">
        <input
          type="text"
          id="verificationCode"
          className="w-full border-b border-gray-400 py-2 outline-none"
          placeholder="인증번호 6자리 숫자 입력"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
          disabled={isButtonDisabled} // 타이머 만료 시 입력 비활성화
        />
        {isVerified ? (
          <FaCheckCircle className="text-green-500 ml-2" />
        ) : (
          <button
            className={`w-[50px] h-[40px] rounded-lg ml-2 ${
              isButtonDisabled
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-signiture text-white"
            }`}
            onClick={handleVerify}
            disabled={isButtonDisabled}
          >
            확인
          </button>
        )}
      </div>

      {!isVerified && error && (
        <div className="w-[300px] mb-4 text-red-500">{error}</div>
      )}

      <div className="w-[300px] flex items-center text-gray-700 mt-2 text-xs">
        <p className="mr-2">인증번호가 오지 않나요?</p>
        <FaRegQuestionCircle
          className="cursor-pointer"
          onClick={() => setShowHelp(!showHelp)}
        />
      </div>
      {showHelp && (
        <div className="w-[300px] text-sm text-gray-500 mt-2">
          <p>
            스팸 메일함을 확인해보세요. 스팸 메일함에도 없다면, 다시 한 번
            &apos;인증번호 받기&apos;를 눌러주세요.
          </p>
        </div>
      )}

      <button
        className={`w-[300px] h-[40px] rounded-lg mb-4 ${
          isVerified
            ? "bg-signiture text-white"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
        onClick={handleContinue}
        disabled={!isVerified}
      >
        완료
      </button>
    </div>
  );
};

export default FindPasswordForm;
