import { Navigate, Outlet, useLocation } from "react-router-dom";

const CheckAuth = () => {
  const { pathname } = useLocation();

  const token = localStorage.getItem("accessToken");

  if (!token && !token && pathname !== "/joinpage") {
    return <Navigate to="/joinpage" />;
  } else if (token && pathname === "/joinpage") {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default CheckAuth;
