import { jwtDecode } from "jwt-decode";
import { getCookie, removeCookie } from "./cookieUtils";

export const decodeTokenNickname = (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded.nickname; // 토큰에서 닉네임 추출
  } catch (error) {
    console.error("Failed to decode token", error);
    return null;
  }
};

export const isTokenExpired = (token) => {
  if (!token) {
    return true;
  }

  const decodedToken = jwtDecode(token);
  const currentTime = Date.now() / 1000;

  return decodedToken.exp < currentTime;
};

export const handleTokenStorageAndNavigation = (
  navigate,
  accessToken,
  refreshToken,
) => {
  console.log("Access Token:", accessToken);
  console.log("Refresh Token:", refreshToken);

  if (accessToken) {
    localStorage.setItem("accessToken", accessToken); // 액세스 토큰을 localStorage에 저장
    removeCookie("accessToken");
  } else {
    localStorage.removeItem("accessToken"); // 액세스 토큰이 없을 경우 localStorage에서 제거
  }

  if (accessToken || refreshToken) {
    console.log("Navigating to home page");
    navigate("/");
  }
};
