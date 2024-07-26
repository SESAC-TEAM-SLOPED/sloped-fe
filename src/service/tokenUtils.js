import { jwtDecode } from "jwt-decode";

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
