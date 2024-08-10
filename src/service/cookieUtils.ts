import { Cookies } from "react-cookie";

const cookies = new Cookies();

interface CookieOptions {
  path?: string;
  expires?: Date;
  maxAge?: number;
  domain?: string;
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: "strict" | "lax" | "none";
}

export const addToken = (name: string, value: string): void => {
  localStorage.setItem(name, value);
};

export const getToken = (name: string): string | undefined => {
  return localStorage.get(name);
};

export const removeToken = (): void => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};
