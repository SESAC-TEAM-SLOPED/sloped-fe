import React from "react";
import { useParams } from "react-router-dom";
import AdminRoadReportDetailForm from "../../components/AdminPageForm/AdminRoadReportDetailForm";

const tempRoadReport = [
  {
    id: "id1",
    address: "서울시 영등포구 문래동",
    roadContext: "청년사관학교 앞 도로 공사로 인한 통행 불편",
    reporterId: "reporter1@example.com",
    imageUrl: "https://example.com/image1.jpg",
    createdAt: "2024-06-06T12:45:21Z",
    modifiedAt: "2024-06-07T10:41:21Z",
  },
];

const AdminRoadReportDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <AdminRoadReportDetailForm data={tempRoadReport} />
    </div>
  );
};

export default AdminRoadReportDetail;
