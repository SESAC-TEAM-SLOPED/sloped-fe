import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import Button from "../ui/Button";
import api from "../../service/api";
import { useNavigate } from "react-router-dom";

const IdLoginForm = () => {
  const [memberId, setmemberId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    try {
      const response = await api.post(
        "/api/auth/login",
        {
          memberId,
          password,
        },
        { withCredentials: true },
      );

      // 응답 상태 코드 확인
      if (response.status === 200) {
        navigate("/get-jwt");
      } else {
        console.error("Login failed with status:", response.status);
      }
    } catch (error) {
      // 로그인 실패 시 처리 로직 추가
      console.error("Login failed", error);
    }
  };

  return (
    <form
      style={{ minHeight: "89vh" }}
      className="flex flex-col justify-center items-center min-h-screen space-y-8"
    >
      <div className="flex flex-col mb-4 w-[280px]">
        <label htmlFor="id" className="text-sm text-gray-700 mb-2">
          아이디
        </label>
        <input
          type="text"
          id="id"
          className="border-b h-7 border-[#949494] outline-none text-[#404040] w-full"
          onChange={(event) => setmemberId(event.target.value)}
        />
      </div>

      <div className="flex flex-col mb-8 w-[280px]">
        <label htmlFor="password" className="text-sm text-gray-700 mb-2">
          비밀번호
        </label>
        <div className="flex items-center border-b border-[#949494]">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className="h-7 outline-none text-[#404040] w-full"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            type="button"
            onClick={toggleShowPassword}
            className="text-gray-700 cursor-pointer ml-2"
          >
            {showPassword ? <IoEyeOff /> : <IoEye />}
          </button>
        </div>
        <div className="flex justify-end mt-2">
          <a href="/login/find-information" className="text-sm text-gray-500">
            아이디/비밀번호 찾기
          </a>
        </div>
      </div>

      <div className="flex justify-center mt-20 w-[280px]">
        <Button text="로그인" onClick={handleLogin} />
      </div>
    </form>
  );
};

export default IdLoginForm;
