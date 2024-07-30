import { Navigate, Outlet, useLocation } from "react-router-dom";

const CheckAuth = () => {
  const { pathname } = useLocation();

  const token = localStorage.getItem("accessToken");

  if (
    !token &&
    pathname !== "/joinpage" &&
    !token &&
    pathname !== "/login/id" &&
    !token &&
    !pathname.includes("register") &&
    !token &&
    pathname !== "/find/information"
  ) {
    return <Navigate to="/joinpage" />;
  } else if (
    (token && (pathname === "/joinpage" || pathname === "/login/id")) ||
    (token && pathname.includes("register"))
  ) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default CheckAuth;
