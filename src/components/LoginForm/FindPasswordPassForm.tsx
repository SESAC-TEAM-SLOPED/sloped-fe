import React, { useState } from "react";

const FindPasswordPassForm = () => {
  const [id, setId] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }
    // 여기에 비밀번호 변경 로직을 추가하세요.
    // 비밀번호 변경 성공 시 setSuccess(true);
    setSuccess(true); // 예시용
  };

  return (
    <div
      style={{ minHeight: "80vh" }}
      className="flex flex-col items-center justify-center min-h-screen space-y-6 bg-white"
    >
      <h1 className="text-xl font-bold mb-6">비밀번호 재설정</h1>

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
        />
      </div>

      <div className="w-[300px] mb-4">
        <label htmlFor="newPassword" className="text-sm text-gray-700 mb-2">
          비밀번호
        </label>
        <input
          type="password"
          id="newPassword"
          className="w-full border-b border-gray-400 py-2 outline-none"
          placeholder="새 비밀번호 입력"
          value={newPassword}
          onChange={(event) => setNewPassword(event.target.value)}
        />
      </div>

      <div className="w-[300px] mb-4">
        <label htmlFor="confirmPassword" className="text-sm text-gray-700 mb-2">
          비밀번호 확인
        </label>
        <input
          type="password"
          id="confirmPassword"
          className="w-full border-b border-gray-400 py-2 outline-none"
          placeholder="새 비밀번호 확인"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
      </div>

      {error && (
        <div className="w-[300px] text-red-500 mb-4">
          <p>{error}</p>
        </div>
      )}

      <button
        className="w-[300px] h-[40px] bg-signiture text-white rounded-lg"
        onClick={handleChangePassword}
      >
        비밀번호 변경
      </button>

      {success && (
        <div className="w-[300px] text-green-500 mt-4">
          <p>비밀번호가 성공적으로 변경되었습니다!</p>
        </div>
      )}
    </div>
  );
};

export default FindPasswordPassForm;
