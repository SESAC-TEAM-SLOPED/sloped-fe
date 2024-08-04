import axios from "axios";
import { setCookie, getCookie, removeCookie } from "./cookieUtils";
import { isCookieAccessTokenExpired } from "./tokenUtils";

// Axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: "/", // API 기본 URL 설정
  withCredentials: true, // 쿠키를 포함하도록 설정
});

// 요청 인터셉터 추가
axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = getCookie("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    let newAccessToken = null; // 새로운 Access Token 변수
    let newRefreshToken = null;

    if (accessToken && isCookieAccessTokenExpired()) {
      try {
        if (!refreshToken) {
          throw new Error("No refresh token available");
        }

        // 만료된 Access Token과 Refresh Token을 쿠키에 설정
        setCookie("expiredAccessToken", accessToken, { maxAge: 300 });
        setCookie("refreshToken", refreshToken, { maxAge: 300 });

        // 새로운 Access Token 요청
        const response = await axios.post(
          "/api/auth/refresh-token",
          {}, // 요청 본문 없이
          {
            withCredentials: true, // 쿠키를 함께 전송하기 위해 설정
          },
        );

        if (response.status === 200) {
          newAccessToken = getCookie("accessToken") || null; // 쿠키에서 새로운 Access Token 가져오기

          const refreshTokenFromCookie = getCookie("refreshToken"); // 쿠키에서 새로운 Refresh Token 가져오기
          newRefreshToken = refreshTokenFromCookie || null;

          if (newAccessToken) {
            config.headers.Authorization = `Bearer ${newAccessToken}`; // 요청 헤더에 새로운 Access Token 설정
          } else {
            throw new Error("Failed to retrieve new access token from cookie");
          }

          if (newRefreshToken) {
            setCookie("refreshToken", newRefreshToken, {
              maxAge: 604800,
            });
          }
        } else {
          throw new Error("Failed to refresh access token");
        }
      } catch (error) {
        console.error("Failed to refresh access token", error);
        throw error;
      }
    } else if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
