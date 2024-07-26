import axios from "axios";
import { getCookie, removeCookie } from "./cookieUtils";
import { isTokenExpired } from "./tokenUtils";

// Axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: "/", // API 기본 URL 설정
  withCredentials: true, // 쿠키를 포함하도록 설정
});

// 요청 인터셉터 추가
axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem("accessToken");
    let newAccessToken = null; // 새로운 Access Token 변수

    if (accessToken && isTokenExpired(accessToken)) {
      try {
        const refreshToken = getCookie("refreshToken"); // 쿠키에서 Refresh Token 가져오기
        console.log("Access Token expired, requesting new access token");
        // 새로운 Access Token 요청
        const response = await axios.post(
          "/api/auth/refresh-token",
          { expiredAccessToken: accessToken },
          {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
          },
        );

        if (response.status === 200) {
          const tokenFromCookie = getCookie("accessToken"); // 쿠키에서 새로운 Access Token 가져오기
          newAccessToken = tokenFromCookie || null;

          if (newAccessToken) {
            localStorage.setItem("accessToken", newAccessToken); // 새로운 Access Token을 localStorage에 저장
            removeCookie("accessToken");
            config.headers.Authorization = `Bearer ${newAccessToken}`; // 요청 헤더에 새로운 Access Token 설정
          } else {
            throw new Error("Failed to retrieve new access token from cookie");
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
