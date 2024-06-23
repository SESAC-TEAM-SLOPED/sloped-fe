import React from "react";
import AdminPageLoginForm from "../../components/AdminPageForm/AdminPageLoginForm";

const AdminPage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "#353535" }}
    >
      <div className="w-full max-w-md p-8 rounded-lg">
        <AdminPageLoginForm />
      </div>
    </div>
  );
};

export default AdminPage;
