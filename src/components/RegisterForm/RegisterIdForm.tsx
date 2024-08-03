import React, { useState, useCallback } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import VerificationCodeInput from "../AuthenticationForm/VerificationCodeInput";
import api from "../../service/api";
import { useNavigate } from "react-router-dom";

const RegisterIdForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userType, setUserType] = useState("general");
  const [email, setEmail] = useState("");
  const [domain, setDomain] = useState("naver.com");
  const [customDomain, setCustomDomain] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");
  const [id, setId] = useState("");
  const [isIdChecked, setIsIdChecked] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const isDisabled = userType === "disabled";
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

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

  const handleBlurPasswordFields = () => {
    if (password && confirmPassword && password !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
    } else {
      setError("");
    }
  };

  const handleContinue = async () => {
    if (password !== confirmPassword) {
      // 비밀번호가 일치하지 않으면 회원가입을 진행하지 않음
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    console.log();

    const fullEmail = `${email}@${domain === "custom" ? customDomain : domain}`;
    try {
      const response = await api.post("/api/users/register", {
        memberId: id,
        password,
        email: fullEmail,
        nickname,
        isDisabled,
      });

      if (response.status === 201) {
        navigate("/joinpage"); // 메인 페이지로 이동하게 수정 예정
      }
    } catch (error) {
      setError("회원가입에 실패했습니다. 다시 시도해 주세요.");
    }
  };

  const handleDuplicateCheck = async () => {
    try {
      const response = await api.post("/api/users/duplicate-check/id", {
        memberId: id,
      });
      if (response.status === 200) {
        alert("사용 가능한 아이디 입니다.");
        setIsIdChecked(true);
      }
    } catch (error: any) {
      if (error.response && error.response.status === 409) {
        alert("아이디가 중복됩니다. 다른 아이디를 사용해주세요.");
      } else {
        alert("아이디 중복 확인 중 오류가 발생했습니다.");
      }
    }
  };

  return (
    <div
      style={{ minHeight: "90vh" }}
      className="flex flex-col items-center justify-center min-h-screen space-y-4 bg-white"
    >
      {!isVerified && error && (
        <div className="w-[300px] mb-4 text-red-500">{error}</div>
      )}

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
            value={id}
            onChange={(e) => setId(e.target.value)}
            disabled={isIdChecked}
          />
          <button
            className={`w-[70px] h-[40px] ml-2 ${
              isIdChecked
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-signiture text-white"
            } rounded-lg`}
            onClick={handleDuplicateCheck}
            disabled={isIdChecked} // 중복 확인 완료 시 비활성화
          >
            중복 확인
          </button>
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={handleBlurPasswordFields}
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
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={handleBlurPasswordFields}
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
        pageType="register"
        onVerify={handleVerificationResult}
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
            value={nickname}
            onChange={(e) => setNickname(e.target.value)} // 닉네임 상태 업데이트
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

      <button
        className={`w-[300px] h-[40px] rounded-lg ${
          isVerified
            ? "bg-signiture text-white"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
        onClick={handleContinue}
        disabled={!isVerified}
      >
        회원가입
      </button>
    </div>
  );
};

export default RegisterIdForm;
