// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080", // 기본 baseURL 설정
  withCredentials: true, // 쿠키를 포함하도록 설정
});

export default api;
