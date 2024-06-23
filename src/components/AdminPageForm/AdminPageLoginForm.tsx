import React, { useState } from "react";
import Button from "../ui/Button";

const AdminPageLoginForm: React.FC = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

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
        <Button text="로그인" onClick={() => {}} />
      </div>
    </form>
  );
};

export default AdminPageLoginForm;
