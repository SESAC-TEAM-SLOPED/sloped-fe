import { removeToken } from "./cookieUtils";

export const handleLogout = (navigate) => {
  // 쿠키 삭제
  removeToken("accessToken");
  // LocalStorage에서 Refresh Token 삭제
  localStorage.removeItem("refreshToken");
  // 로그인 페이지로 이동
  navigate("/joinpage");
};
