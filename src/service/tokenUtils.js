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

export const decodeTokenAuthType = (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded.oauthType; // 토큰에서 type 추출
  } catch (error) {
    console.error("Failed to decode token", error);
    return null;
  }
};

export const isLocalStorageAccessTokenExpired = () => {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    return true; // 토큰이 없으면 만료로 간주
  }

  try {
    const decodedToken = jwtDecode(accessToken);
    const currentTime = Date.now() / 1000; // 현재 시간을 초 단위로 계산

    // 만료 시간이 현재 시간보다 작으면 만료된 것으로 간주
    return decodedToken.exp < currentTime;
  } catch (error) {
    console.error("Failed to decode token", error);
    return true; // 디코딩 오류가 발생한 경우 만료로 간주
  }
};
