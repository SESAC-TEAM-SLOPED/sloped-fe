import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import VerificationCodeInput from "../AuthenticationForm/VerificationCodeInput";

const RegisterIdForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userType, setUserType] = useState("general");
  const [email, setEmail] = useState("");
  const [domain, setDomain] = useState("naver.com");
  const [customDomain, setCustomDomain] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div
      style={{ minHeight: "90vh" }}
      className="flex flex-col items-center justify-center min-h-screen space-y-4 bg-white"
    >
      <div className="w-[300px] mb-4">
        <label htmlFor="id" className="text-sm text-gray-700 mb-2">
          아이디
        </label>
        <div className="flex items-center border-b border-gray-400 py-2">
          <input
            type="text"
            id="id"
            className="flex-grow outline-none"
            placeholder="아이디 입력"
          />
          <button className="ml-2 text-signiture">중복확인</button>
        </div>
      </div>

      <div className="w-[300px] mb-4">
        <label htmlFor="password" className="text-sm text-gray-700 mb-2">
          비밀번호
        </label>
        <div className="flex items-center border-b border-gray-400 py-2">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className="flex-grow outline-none"
            placeholder="비밀번호 입력"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="ml-2"
          >
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
        </div>
      </div>

      <div className="w-[300px] mb-4">
        <label htmlFor="confirmPassword" className="text-sm text-gray-700 mb-2">
          비밀번호 확인
        </label>
        <div className="flex items-center border-b border-gray-400 py-2">
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            className="flex-grow outline-none"
            placeholder="비밀번호 확인 입력"
          />
          <button
            type="button"
            onClick={toggleConfirmPasswordVisibility}
            className="ml-2"
          >
            {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
        </div>
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
            onChange={(event) => setEmail(event.target.value)}
          />
          <span className="mx-2">@</span>
          {domain === "custom" ? (
            <input
              type="text"
              className="outline-none"
              placeholder="직접 입력"
              value={customDomain}
              onChange={(event) => setCustomDomain(event.target.value)}
            />
          ) : (
            <select
              value={domain}
              onChange={(event) => setDomain(event.target.value)}
              className="outline-none"
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
      />

      <div className="w-[300px] mb-4">
        <label htmlFor="nickname" className="text-sm text-gray-700 mb-2">
          닉네임
        </label>
        <div className="border-b border-gray-400 py-2">
          <input
            type="text"
            id="nickname"
            className="w-full outline-none"
            placeholder="닉네임 입력"
          />
        </div>
      </div>

      <div className="w-[300px] mb-4">
        <label className="text-sm text-gray-700 mb-2">교통약자 여부</label>
        <div className="flex items-center mt-2">
          <input
            type="radio"
            id="general"
            name="userType"
            value="general"
            checked={userType === "general"}
            onChange={(e) => setUserType(e.target.value)}
            className="mr-2"
          />
          <label htmlFor="general" className="mr-4">
            일반 사용자
          </label>
          <input
            type="radio"
            id="disabled"
            name="userType"
            value="disabled"
            checked={userType === "disabled"}
            onChange={(e) => setUserType(e.target.value)}
            className="mr-2"
          />
          <label htmlFor="disabled">교통약자</label>
        </div>
      </div>

      <button className="w-[300px] h-[40px] bg-signiture text-white rounded-lg">
        회원가입
      </button>
    </div>
  );
};

export default RegisterIdForm;
