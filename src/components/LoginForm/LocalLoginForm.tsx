import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import Button from "../ui/Button";
import api from "../../service/api";
import { useNavigate } from "react-router-dom";
import { serverUrl } from "../../constant/url";
const LocalLoginForm = () => {
  const [memberId, setmemberId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    try {
      const response = await api.post(
        `${serverUrl}/api/auth/login`,
        {
          memberId,
          password,
        },
        { withCredentials: true },
      );

      if (response.status === 200) {
        const accessToken =
          response.headers["authorization"] ||
          response.headers["Authorization"];
        if (accessToken && accessToken.startsWith("Bearer ")) {
          const token = accessToken.slice(7); // 'Bearer ' 제거
          localStorage.setItem("accessToken", token);

          // API 인스턴스의 헤더 업데이트
          api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

          console.log("Navigating to home page");
          navigate("/");
        } else {
          setError("Invalid access token received");
        }
      }
    } catch (error: any) {
      if (error.response) {
        console.log(error.response.data);
        const errorMessage = error.response.data;
        if (errorMessage === "잘못된 자격 증명입니다.") {
          setError("비밀 번호를 확인해주세요.");
        } else {
          setError(errorMessage);
        }
      } else {
        setError("서버와의 통신 중 오류가 발생했습니다.");
      }
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

      {error && (
        <div className="w-full text-center mb-4 text-red-500 px-4">{error}</div>
      )}

      <div className="flex justify-center mt-20 w-[280px]">
        <Button text="로그인" onClick={handleLogin} />
      </div>
    </form>
  );
};

export default LocalLoginForm;
