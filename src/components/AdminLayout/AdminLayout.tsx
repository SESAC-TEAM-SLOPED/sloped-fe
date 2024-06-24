import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminTitle from "./AdminTitle";

const AdminLayout = () => {
  return (
    <div className="flex w-full">
      <AdminSidebar />
      <div className="w-full">
        <AdminTitle />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
