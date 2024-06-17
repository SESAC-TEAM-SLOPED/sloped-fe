import React from "react";

const FindIdPassForm = () => {
  const userId = "example"; // 예시 아이디, 실제로는 서버에서 받아온 값을 사용하세요.

  return (
    <div
      style={{ minHeight: "80vh" }}
      className="flex flex-col items-center justify-center min-h-screen space-y-6 bg-white"
    >
      <h1 className="text-xl font-bold mb-6">아이디 찾기</h1>
      <p className="text-lg mb-4">아이디는 다음과 같습니다</p>
      <div className="w-[300px] bg-gray-100 py-4 rounded-lg flex justify-center items-center">
        <span className="text-lg font-semibold">{userId}</span>
      </div>
    </div>
  );
};

export default FindIdPassForm;
