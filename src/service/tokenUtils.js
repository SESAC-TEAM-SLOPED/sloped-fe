import jwtDecode from "jwt-decode";

export const isTokenExpired = (token) => {
  try {
    const { exp } = jwtDecode(token);
    if (exp < Date.now() / 1000) {
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
};
