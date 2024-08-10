import axios from "axios";
import { isCookieAccessTokenExpired } from "./tokenUtils";
import { serverUrl } from "../constant/url";
import { addToken, getToken, removeToken } from "./cookieUtils";

const getRefreshToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  const response = await axios.get(`${serverUrl}/api/auth/refresh-token`, {
    headers: {
      ["x-access-token"]: `Bearer ${localStorage.getItem("accessToken")}`,
      refresh: refreshToken,
    },
  });
  const accessToken = response.data["x-access-token"];
  localStorage.getItem("accessToken");
};

// Axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: serverUrl, // API 기본 URL 설정
  withCredentials: true, // 쿠키를 포함하도록 설정
});

// 요청 인터셉터 추가
axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = getToken("accessToken");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 응답 인터셉터 추가
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      await getRefreshToken();

      originalRequest.headers!["x-access-token"] =
        `Bearer ${localStorage.getItem("accessToken")}`;

      return axios(originalRequest);
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
