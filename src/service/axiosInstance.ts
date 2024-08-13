import axios from "axios";
import { isLocalStorageAccessTokenExpired } from "./tokenUtils";
import { serverUrl } from "../constant/url";

// Axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: serverUrl, // API 기본 URL 설정
  withCredentials: true, // 쿠키를 포함하도록 설정
});

// 요청 인터셉터 추가
axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken && isLocalStorageAccessTokenExpired()) {
      try {
        // 만료된 Access Token과 Refresh Token을 쿠키에 설정
        config.headers.Authorization = `Bearer ${accessToken}`;

        // 새로운 Access Token 요청
        const response = await axios.post(
          "/api/auth/renew-token",
          {},
          {
            withCredentials: true, // 쿠키를 함께 전송하기 위해 설정
          },
        );

        if (response.status === 200) {
          const newAccessToken =
            response.headers["authorization"] ||
            response.headers["Authorization"];
          if (newAccessToken && newAccessToken.startsWith("Bearer ")) {
            const token = newAccessToken.slice(7); // 'Bearer ' 제거
            localStorage.setItem("accessToken", token);
            config.headers.Authorization = `Bearer ${token}`;
          } else {
            throw new Error("New access token not found in response headers");
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
