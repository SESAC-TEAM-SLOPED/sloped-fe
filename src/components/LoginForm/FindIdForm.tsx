import React, { useState } from "react";
import { FaRegQuestionCircle, FaCheckCircle } from "react-icons/fa";
import { MdHeight } from "react-icons/md";

//통과 페이지 호출용
type Props = {
  setActiveTab: (tab: string) => void;
};

const FindIdForm = ({ setActiveTab }: Props) => {
  const [email, setEmail] = useState("");
  const [domain, setDomain] = useState("naver.com");
  const [customDomain, setCustomDomain] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");
  const [showHelp, setShowHelp] = useState(false);

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
    setActiveTab("id-pass"); // 통과페이지로
  };

  return (
    <div
      style={{ minHeight: "80vh" }}
      className="flex flex-col items-center justify-center min-h-screen space-y-6 bg-white"
    >
      <h1 className="text-xl font-bold mb-6">본인확인 이메일로 인증</h1>

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

      <button className="w-[300px] h-[40px] bg-signiture text-white rounded-lg mb-4">
        인증번호 받기
      </button>

      <div className="w-[300px] mb-4 flex items-center">
        <input
          type="text"
          id="verificationCode"
          className="w-full border-b border-gray-400 py-2 outline-none"
          placeholder="인증번호 6자리 숫자 입력"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
        />
        {isVerified ? (
          <FaCheckCircle className="text-green-500 ml-2" />
        ) : (
          <button
            className="w-[50px] h-[40px] bg-signiture text-white rounded-lg ml-2"
            onClick={handleVerify}
          >
            확인
          </button>
        )}
      </div>

      {!isVerified && error && (
        <div className="w-[300px] mb-4 text-red-500">
          인증 번호를 잘못 입력하셨습니다!
        </div>
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
        통과 페이지로 이동
      </button>
    </div>
  );
};

export default FindIdForm;
