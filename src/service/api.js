// src/api.js
import axios from "axios";
import { serverUrl } from "../constant/url";

const api = axios.create({
  baseURL: serverUrl, // 기본 baseURL 설정
  withCredentials: true, // 쿠키를 포함하도록 설정
});

export default api;
