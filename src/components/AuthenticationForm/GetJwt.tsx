import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken, removeToken } from "../../service/cookieUtils";

const GetJwt = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = getToken("accessToken");
    const refreshToken = getToken("refreshToken");

    console.log("Access Token:", accessToken);
    console.log("Refresh Token:", refreshToken);

    if (refreshToken) {
      localStorage.setItem("refreshToken", refreshToken); // refreshToken 토큰을 localStorage에 저장
      removeToken();
    } else {
      localStorage.removeItem("refreshToken"); // refreshToken 토큰이 없을 경우 localStorage에서 제거
    }

    if (accessToken || refreshToken) {
      console.log("Navigating to home page");
      navigate("/");
    }
  }, [navigate]);

  return <div>Loading...</div>;
};

export default GetJwt;
