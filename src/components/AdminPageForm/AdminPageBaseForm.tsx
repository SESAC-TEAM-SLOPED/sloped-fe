import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Container from "../../components/ui/Container";
// import MemberManagementForm from "./MemberManagementForm";
// import FacilityManagementForm from "./FacilityManagementForm";

interface AdminPageBaseFormProps {
  userId: string;
  pendingFacilityReports: number;
  pendingRoadReports: number;
}

const AdminPageBaseForm = ({
  userId,
  pendingFacilityReports,
  pendingRoadReports,
}: AdminPageBaseFormProps) => {
  const [activeTab, setActiveTab] = useState("members");

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-white shadow p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">운영자 {userId}</h1>
          <button
            className="text-blue-500"
            onClick={() => (window.location.href = "/")}
          >
            서비스 바로가기
          </button>
        </div>
      </header>
      <div className="flex flex-1">
        <main className="flex-1 p-4">
          {/* {activeTab === "members" && <MemberManagementForm />}
          {activeTab === "facilities" && <FacilityManagementForm />} */}
          {/* 다른 탭들의 내용을 추가하세요 */}
        </main>
      </div>
    </div>
  );
};

export default AdminPageBaseForm;
