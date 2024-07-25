import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie, removeCookie } from "../../service/cookieUtils";

const GetJwt = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = getCookie("accessToken");
    const refreshToken = getCookie("refreshToken");

    console.log("Access Token:", accessToken);
    console.log("Refresh Token:", refreshToken);

    if (accessToken) {
      window.accessToken = accessToken; // 액세스 토큰을 브라우저 메모리에 저장
      removeCookie("accessToken");
    } else {
      window.accessToken = null; // 액세스 토큰이 없을 경우 null로 초기화
    }

    if (accessToken || refreshToken) {
      console.log("Navigating to home page");
      navigate("/");
    }
  }, [navigate]);

  return <div>Loading...</div>;
};

export default GetJwt;
