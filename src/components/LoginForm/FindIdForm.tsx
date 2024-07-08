import React, { useState, useCallback } from "react";
import VerificationCodeInput from "../AuthenticationForm/VerificationCodeInput"; // 경로를 실제 프로젝트 구조에 맞게 조정하세요.

// 통과 페이지 호출용
type Props = {
  setActiveTab: (tab: string) => void;
};

const FindIdForm = ({ setActiveTab }: Props) => {
  const [email, setEmail] = useState("");
  const [domain, setDomain] = useState("naver.com");
  const [customDomain, setCustomDomain] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");

  const handleVerificationResult = useCallback(
    (isVerified: boolean) => {
      setIsVerified(isVerified);
      if (!isVerified && email) {
        setError("인증에 실패했습니다. 다시 시도해 주세요.");
      } else {
        setError("");
      }
    },
    [email],
  );

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

      <VerificationCodeInput
        email={email}
        domain={domain}
        customDomain={customDomain}
        pageType="findId"
        onVerify={handleVerificationResult}
      />

      {!isVerified && error && (
        <div className="w-[300px] mb-4 text-red-500">{error}</div>
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

export default FindIdForm;
