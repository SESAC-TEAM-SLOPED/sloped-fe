import React from "react";
import { useParams } from "react-router-dom";
import AdminFacilityDetailForm from "../../components/AdminPageForm/AdminFacilityDetailForm";
const tempFacility = [
  {
    //임시데이터
    id: "id1",
    name: "청년사관학교 영등포",
    facilityType: "기타",
    address: "서울시 영등포구 문래동",
    phoneNumber: "02-123-1234",
    accessibilityFeatures: "O, O, X",
    openingHours:
      "월 9:00 - 22:00, 화 9:00 - 22:00, 수 9:00 - 22:00, 목 9:00 - 22:00, 금 9:00 - 22:00, 토 9:00 - 22:00, 일 9:00 - 22:00",
    createdAt: "2024-06-06T12:45:21Z",
    modifiedAt: "2024-06-07T10:41:21Z",
    description: "사장님이 맛있고, 음식이 친절해요.",
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
