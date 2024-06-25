import React, { useState } from "react";
import Button from "../../components/ui/Button";
import AdminPageManageUserForm from "../../components/AdminPageForm/AdminPageManageUserForm";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const userId = "운영자1";
  const pendingFacilityReports = 15;
  const pendingRoadReports = 10;

  const [activeTab, setActiveTab] = useState("members");
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/admin");
  };

  return (
    <div className="min-h-screen flex">
      <div className="flex flex-col flex-grow">
        <main className="flex-grow p-4">
          {activeTab === "members" && <AdminPageManageUserForm />}
          {/* 다른 탭들의 내용을 추가하세요 */}
        </main>
      </div>
    </div>
  );
};

export default AdminPage;
