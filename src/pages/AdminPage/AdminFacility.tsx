import React from "react";
import AdminFacilityForm from "../../components/AdminPageForm/AdminFacilityForm";

// 임시 데이터
const tempFacilities = [
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
  {
    id: "id2",
    name: "컴포즈커피 문래점",
    facilityType: "카페",
    address: "서울시 영등포구 문래동",
    phoneNumber: "010-2418-3251",
    accessibilityFeatures: "O, X, X",
    openingHours: "월 9:00 - 22:00",
    createdAt: "2024-06-06T12:45:21Z",
    modifiedAt: "2024-06-07T10:41:21Z",
  },
  {
    id: "id3",
    name: "행복한 도서관",
    facilityType: "도서관",
    address: "서울시 강남구 대치동",
    phoneNumber: "02-555-1234",
    accessibilityFeatures: "X, O, O",
    openingHours: "화 10:00 - 18:00",
    createdAt: "2024-06-06T10:15:00Z",
    modifiedAt: "2024-06-07T08:30:00Z",
  },
  {
    id: "id4",
    name: "다이소 강남점",
    facilityType: "상점",
    address: "서울시 강남구 역삼동",
    phoneNumber: "02-333-4444",
    accessibilityFeatures: "O, O, O",
    openingHours: "수 9:00 - 22:00",
    createdAt: "2024-06-06T09:00:00Z",
    modifiedAt: "2024-06-07T09:30:00Z",
  },
  {
    id: "id5",
    name: "스타벅스 종로점",
    facilityType: "카페",
    address: "서울시 종로구 종로1가",
    phoneNumber: "02-111-2222",
    accessibilityFeatures: "O, X, O",
    openingHours: "목 7:00 - 22:00",
    createdAt: "2024-06-06T07:00:00Z",
    modifiedAt: "2024-06-07T07:30:00Z",
  },
  {
    id: "id6",
    name: "롯데리아 홍대점",
    facilityType: "패스트푸드",
    address: "서울시 마포구 서교동",
    phoneNumber: "02-777-8888",
    accessibilityFeatures: "O, O, X",
    openingHours: "금 8:00 - 23:00",
    createdAt: "2024-06-06T08:00:00Z",
    modifiedAt: "2024-06-07T08:30:00Z",
  },
  {
    id: "id7",
    name: "삼성동 주민센터",
    facilityType: "공공기관",
    address: "서울시 강남구 삼성동",
    phoneNumber: "02-555-6666",
    accessibilityFeatures: "X, O, O",
    openingHours: "토 9:00 - 18:00",
    createdAt: "2024-06-06T09:00:00Z",
    modifiedAt: "2024-06-07T09:30:00Z",
  },
  {
    id: "id8",
    name: "롯데백화점 본점",
    facilityType: "백화점",
    address: "서울시 중구 소공동",
    phoneNumber: "02-777-9999",
    accessibilityFeatures: "O, O, O",
    openingHours: "일 10:00 - 20:00",
    createdAt: "2024-06-06T10:00:00Z",
    modifiedAt: "2024-06-07T10:30:00Z",
  },
  {
    id: "id9",
    name: "강남구립도서관",
    facilityType: "도서관",
    address: "서울시 강남구 대치동",
    phoneNumber: "02-444-5555",
    accessibilityFeatures: "X, X, O",
    openingHours: "월 10:00 - 19:00",
    createdAt: "2024-06-06T10:00:00Z",
    modifiedAt: "2024-06-07T10:30:00Z",
  },
  {
    id: "id10",
    name: "영등포 타임스퀘어",
    facilityType: "쇼핑몰",
    address: "서울시 영등포구 영등포동",
    phoneNumber: "02-888-9999",
    accessibilityFeatures: "O, O, O",
    openingHours: "화 10:00 - 22:00",
    createdAt: "2024-06-06T10:00:00Z",
    modifiedAt: "2024-06-07T10:30:00Z",
  },
];

const AdminFacility = () => {
  return (
    <div>
      <AdminFacilityForm data={tempFacilities} />
    </div>
  );
};

export default AdminFacility;
