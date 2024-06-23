import { useState } from "react";
import Button from "../ui/Button";

const AdminPageLoginForm = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      style={{ minHeight: "89vh" }}
      className="flex flex-col justify-center items-center min-h-screen space-y-8"
    >
      <div>
        <div className="flex flex-col mb-4 w-[280px]">
          <label htmlFor="id" className="text-sm text-gray-700 mb-2">
            아이디
          </label>
          <input
            type="text"
            id="id"
            className="border-b h-7 border-[#949494] outline-none text-[#404040] w-full"
            onChange={(event) => setId(event.target.value)}
          />
        </div>

        <div className="flex flex-col mb-8 w-[280px]">
          <label htmlFor="password" className="text-sm text-gray-700 mb-2">
            비밀번호
          </label>
          <input
            type="password"
            id="password"
            className="h-7 outline-none text-[#404040] w-full"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
      </div>

      <div className="flex justify-center mt-20 w-[280px]">
        <Button text="로그인" onClick={() => {}} />
      </div>
    </form>
  );
};

export default AdminPageLoginForm;
