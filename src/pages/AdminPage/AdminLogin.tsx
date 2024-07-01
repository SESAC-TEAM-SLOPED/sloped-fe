import React from "react";
import AdminLoginForm from "../../components/AdminPageForm/AdminLoginForm";

const AdminLogin = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "#353535" }}
    >
      <div className="w-full max-w-md p-8 rounded-lg">
        <AdminLoginForm />
      </div>
    </div>
  );
};

export default AdminLogin;
