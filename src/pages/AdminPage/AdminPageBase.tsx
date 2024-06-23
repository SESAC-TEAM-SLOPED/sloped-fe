import React from "react";
import AdminPageBaseForm from "../../components/AdminPageForm/AdminPageBaseForm";

const AdminPageBase = () => {
  // 필요한 props를 정의합니다.
  const userId = "운영자1";
  const pendingFacilityReports = 15;
  const pendingRoadReports = 10;

  return (
    <div className="w-full max-w-md p-8 rounded-lg">
      <AdminPageBaseForm
        userId={userId}
        pendingFacilityReports={pendingFacilityReports}
        pendingRoadReports={pendingRoadReports}
      />
    </div>
  );
};

export default AdminPageBase;
