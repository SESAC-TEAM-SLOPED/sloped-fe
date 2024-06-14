import React, { useState } from "react";
import { FaRegQuestionCircle, FaCheckCircle } from "react-icons/fa";
import { MdHeight } from "react-icons/md";

const FindIdForm = () => {
  const [email, setEmail] = useState("");
  const [domain, setDomain] = useState("naver.com");
  const [customDomain, setCustomDomain] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");
  const [showHelp, setShowHelp] = useState(false);

  const handleVerify = () => {
    // 여기에 인증번호 검증 로직을 추가하세요.
    // 검증 실패 시 setError("인증번호가 오지 않나요?");
    setIsVerified(true); // 검증용
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
          />
          <span className="mx-2">@</span>
          {domain === "custom" ? (
            <input
              type="text"
              className="outline-none"
              placeholder="직접 입력"
              value={customDomain}
              onChange={(e) => setCustomDomain(e.target.value)}
            />
          ) : (
            <select
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="outline-none"
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
        <button
          className="w-[50px] h-[40px] bg-signiture text-white rounded-lg ml-2"
          onClick={handleVerify}
        >
          확인
        </button>
      </div>
      <div>
        {isVerified && <FaCheckCircle className="text-green-500 ml-2" />}
      </div>

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

      {error && (
        <div className="w-[300px] text-red-500 mt-2">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default FindIdForm;
