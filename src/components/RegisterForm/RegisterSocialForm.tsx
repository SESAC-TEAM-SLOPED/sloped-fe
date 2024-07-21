import React, { useState } from "react";

// Props의 타입을 정의합니다.
interface RegisterSocialFormProps {
  email: string;
  oauthType: string;
}

const RegisterSocialForm = ({ email, oauthType }: RegisterSocialFormProps) => {
  const [userType, setUserType] = useState("general");

  return (
    <div
      style={{ minHeight: "90vh" }}
      className="flex flex-col items-center justify-center min-h-screen space-y-4 bg-white"
    >
      <div style={{ marginBottom: "2rem" }} className="w-[300px] mb-4">
        <label htmlFor="id" className="text-sm text-gray-700 mb-2">
          닉네임
        </label>
        <div className="flex items-center border-b border-gray-400 py-2">
          <input
            type="text"
            id="id"
            className="flex-grow outline-none"
            placeholder="아이디 입력"
          />
        </div>
      </div>
      <div style={{ marginBottom: "4rem" }} className="w-[300px] mb-4">
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

export default RegisterSocialForm;
