import React, { useState } from "react";
import Button from "../../components/ui/Button";
import AdminSidebar from "../../components/ui/AdminSidebar";
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

  const getHeaderTitle = () => {
    switch (activeTab) {
      case "members":
        return "회원 관리";
      case "facilities":
        return "시설 관리";
      case "roads":
        return "위험 도로 관리";
      case "reviews":
        return "리뷰 관리";
      case "pendingReports":
        return "승인 대기 제보";
      case "pendingFacilities":
        return "승인 대기 시설";
      case "pendingRoads":
        return "승인 대기 도로";
      default:
        return "운영자 페이지";
    }
  };

  return (
    <div className="min-h-screen flex">
      <AdminSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        userId={userId}
        pendingFacilityReports={pendingFacilityReports}
        pendingRoadReports={pendingRoadReports}
      />
      <div className="flex flex-col flex-grow">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
            <h1 className="text-xl font-bold">{getHeaderTitle()}</h1>
            <Button text="로그아웃" onClick={handleLogout} />
          </div>
        </header>
        <main className="flex-grow p-4">
          {activeTab === "members" && <AdminPageManageUserForm />}
          {/* 다른 탭들의 내용을 추가하세요 */}
        </main>
      </div>
    </div>
  );
};

export default AdminPage;
