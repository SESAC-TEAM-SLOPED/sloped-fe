import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 훅을 불러옵니다.
import Button from "../ui/Button";

const AdminLoginForm = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수를 만듭니다.

  const handleLogin = () => {
    if (id === "test" && password === "123456") {
      navigate("/admin/user"); // 조건이 맞으면 /admin/user 페이지로 이동합니다.
    } else {
      alert("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  return (
    <form className="flex flex-col space-y-6">
      <h1 className="text-white text-6xl mb-8 text-center font-bold">
        함께가길
      </h1>
      <div className="flex flex-col">
        <label htmlFor="id" className="text-sm text-gray-300 mb-2">
          아이디
        </label>
        <input
          type="text"
          id="id"
          className="border-b h-10 border-gray-500 outline-none text-gray-900 w-full px-2"
          onChange={(event) => setId(event.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="password" className="text-sm text-gray-300 mb-2">
          비밀번호
        </label>
        <input
          type="password"
          id="password"
          className="h-10 outline-none text-gray-900 w-full border-b border-gray-500 px-2"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <div className="flex flex-col justify-center mt-8">
        <Button text="로그인" onClick={handleLogin} />
      </div>
    </form>
  );
};

export default AdminLoginForm;
