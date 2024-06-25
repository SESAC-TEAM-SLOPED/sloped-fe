import React, { useState } from "react";
import AdminManageUserForm from "../../components/AdminPageForm/AdminManageUserForm";

const AdminManageUser = () => {
  return (
    <div className="min-h-screen flex">
      <div className="flex flex-col flex-grow">
        <main className="flex-grow p-4">
          <AdminManageUserForm />
        </main>
      </div>
    </div>
  );
};

export default AdminManageUser;
