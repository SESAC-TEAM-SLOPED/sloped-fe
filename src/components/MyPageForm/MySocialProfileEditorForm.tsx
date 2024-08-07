import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../service/axiosInstance";
import { handleLogout } from "../../service/authUtils";

const MySocialProfileEditorForm = () => {
  const [nickname, setNickname] = useState("");
  const [userType, setUserType] = useState("general");
  const navigate = useNavigate();

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

export default MySocialProfileEditorForm;
