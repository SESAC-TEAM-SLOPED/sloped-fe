import React from "react";
import { useParams } from "react-router-dom";
import AdminFacilityDetailForm from "../../components/AdminPageForm/AdminFacilityDetailForm";
const tempFacility = [
  {
    id: "id1",
    name: "청년사관학교 영등포",
    facilityType: "기타",
    address: "서울시 영등포구 문래동",
    phoneNumber: "02-123-1234",
    accessibilityFeatures: "O, O, X",
    openingHours: "월 9:00 - 22:00",
    createdAt: "2024-06-06T12:45:21Z",
    modifiedAt: "2024-06-07T10:41:21Z",
  },
];

const AdminFacilityDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <AdminFacilityDetailForm data={tempFacility} />
    </div>
  );
};

export default AdminFacilityDetail;
