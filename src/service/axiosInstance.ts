import axios from "axios";
import { getCookie } from "./cookieUtils";
import { isTokenExpired } from "./tokenUtils";

// Axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: "http://localhost:8080", // API 기본 URL 설정
  withCredentials: true, // 쿠키를 포함하도록 설정
});

// 요청 인터셉터 추가
axiosInstance.interceptors.request.use(
  async (config) => {
    let accessToken = window.accessToken;
    let newAccessToken: string | null = null; // 새로운 Access Token 변수

    if (accessToken && isTokenExpired(accessToken)) {
      try {
        const refreshToken = getCookie("refreshToken"); // 쿠키에서 Refresh Token 가져오기

        // 새로운 Access Token 요청
        const response = await axios.post(
          "http://localhost:8080/api/auth/refresh-access-token",
          { expiredAccessToken: accessToken }, // 만료된 Access Token을 Body에 포함
          {
            headers: {
              Authorization: `Bearer ${refreshToken}`, // Refresh Token을 헤더에 포함
            },
          },
        );

        if (response.status === 200) {
          const tokenFromCookie = getCookie("accessToken"); // 쿠키에서 새로운 Access Token 가져오기
          newAccessToken =
            tokenFromCookie !== undefined ? tokenFromCookie : null;

          if (newAccessToken) {
            window.accessToken = newAccessToken; // 새로운 Access Token을 메모리에 저장
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
      config.headers.Authorization = `Bearer ${accessToken}`; // 유효한 Access Token을 요청 헤더에 설정
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
