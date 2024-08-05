import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import axiosInstance from "../../service/axiosInstance";
import { handleLogout } from "../../service/authUtils";

const MyprofileEditorForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [userType, setUserType] = useState("general");
  const [error, setError] = useState(""); // 오류 메시지 상태 추가

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleBlurPasswordFields = () => {
    if (password && confirmPassword && password !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
    } else {
      setError("");
    }
  };

  const handleSubmit = async () => {
    const isDisabled = userType === "disabled";

    try {
      const response = await axiosInstance.post("/api/users/update-user", {
        password: null,
        nickname: nickname || null,
        isDisabled,
      });

      if (response.status === 200) {
        handleLogout(navigate);
      } else {
        alert(response.data.message || "프로필 업데이트에 실패했습니다.");
      }
    } catch (error) {
      alert("update 중 error 발생!");
    }
  };

  return (
    <div
      style={{ minHeight: "90vh" }}
      className="flex flex-col items-center justify-center min-h-screen space-y-4 bg-white"
    >
      <div className="w-[300px] mb-4">
        <label htmlFor="password" className="text-sm text-gray-700 mb-2">
          새로운 비밀번호
        </label>
        <div className="flex items-center border-b border-gray-400 py-2">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className="flex-grow outline-none"
            placeholder="비밀번호 입력 (수정 필요 없다면, 공백)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          새로운 비밀번호 확인
        </label>
        <div className="flex items-center border-b border-gray-400 py-2">
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            className="flex-grow outline-none"
            placeholder="비밀번호 확인 입력 (수정 필요 없다면, 공백)"
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

      {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

      <div className="w-[300px] mb-4">
        <label htmlFor="nickname" className="text-sm text-gray-700 mb-2">
          닉네임
        </label>
        <div className="border-b border-gray-400 py-2">
          <input
            type="text"
            id="nickname"
            className="w-full outline-none"
            placeholder="닉네임 입력 (수정 필요 없다면, 공백)"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
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
        className="w-[300px] h-[40px] bg-signiture text-white rounded-lg"
        onClick={handleSubmit}
      >
        수정하기
      </button>
    </div>
  );
};

export default MyprofileEditorForm;
