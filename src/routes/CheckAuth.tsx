import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getToken } from "../service/cookieUtils";

const CheckAuth = () => {
  const { pathname } = useLocation();
  const token = getToken("accessToken");

  if (token) {
    // Token이 있는 경우
    if (pathname === "/joinpage") {
      console.log(
        "Authenticated user trying to access /joinpage. Redirecting to /.",
      );
      return <Navigate to="/" replace />; // /joinpage 접근 차단
    }
    console.log("Authenticated user accessing a protected route:", pathname);
    return <Outlet />; // 보호된 경로 접근 허용
  } else {
    // Token이 없는 경우
    if (pathname === "/joinpage") {
      console.log("Unauthenticated user accessing /joinpage.");
      return <Outlet />; // /joinpage는 접근 허용
    } else {
      console.log(
        "Unauthenticated user trying to access a protected route:",
        pathname,
        ". Redirecting to /joinpage.",
      );
      return <Navigate to="/joinpage" replace />; // 다른 경로는 접근 차단
    }
  }
};

export default CheckAuth;
