import { removeCookie } from "./cookieUtils";

export const handleLogout = (navigate) => {
  // 쿠키 삭제
  removeCookie("refreshToken");

  // LocalStorage에서 Access Token 삭제
  localStorage.removeItem("accessToken");

  // 로그인 페이지로 이동
  navigate("/joinpage");
};
