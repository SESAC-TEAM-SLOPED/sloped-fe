import React from "react";
import AdminReviewForm from "../../components/AdminPageForm/AdminReviewForm";

// 임시 데이터
const tempReviews = [
  {
    id: "id1",
    isConvenient: true,
    name: "청년사관학교 영등포",
    reviewContext: "시설이 매우 청결하고 접근성이 좋습니다.",
    reporterId: "user1@example.com",
    createdAt: "2024-06-06T12:45:21Z",
    modifiedAt: "2024-06-07T10:41:21Z",
  },
  {
    id: "id2",
    isConvenient: false,
    name: "영등포구립도서관",
    reviewContext: "자료실 내 조명이 어두워서 불편합니다.",
    reporterId: "user2@example.com",
    createdAt: "2024-06-08T15:30:00Z",
    modifiedAt: "2024-06-09T16:20:00Z",
  },
  {
    id: "id3",
    isConvenient: true,
    name: "문래동 커뮤니티 센터",
    reviewContext: "다양한 프로그램과 편리한 시설이 마음에 듭니다.",
    reporterId: "user3@example.com",
    createdAt: "2024-06-10T09:00:00Z",
    modifiedAt: "2024-06-11T10:00:00Z",
  },
  {
    id: "id4",
    isConvenient: false,
    name: "영등포 시장",
    reviewContext: "시장 내 이동 경로가 협소하여 이동이 불편합니다.",
    reporterId: "user4@example.com",
    createdAt: "2024-06-12T11:45:00Z",
    modifiedAt: "2024-06-13T12:50:00Z",
  },
  {
    id: "id5",
    isConvenient: true,
    name: "영등포 공원",
    reviewContext: "가족 단위로 즐길 수 있는 공간이 많아 좋습니다.",
    reporterId: "user5@example.com",
    createdAt: "2024-06-14T13:20:00Z",
    modifiedAt: "2024-06-15T14:30:00Z",
  },
  {
    id: "id6",
    isConvenient: false,
    name: "영등포구청",
    reviewContext: "주차 공간이 부족하여 방문이 어렵습니다.",
    reporterId: "user6@example.com",
    createdAt: "2024-06-16T15:10:00Z",
    modifiedAt: "2024-06-17T16:25:00Z",
  },
  {
    id: "id7",
    isConvenient: true,
    name: "영등포역",
    reviewContext: "역 주변의 편의 시설이 잘 갖춰져 있어 편리합니다.",
    reporterId: "user7@example.com",
    createdAt: "2024-06-18T17:05:00Z",
    modifiedAt: "2024-06-19T18:15:00Z",
  },
  {
    id: "id8",
    isConvenient: true,
    name: "영등포 타임스퀘어",
    reviewContext: "쇼핑, 식사, 영화 모두 한 곳에서 해결할 수 있어 좋습니다.",
    reporterId: "user8@example.com",
    createdAt: "2024-06-20T19:00:00Z",
    modifiedAt: "2024-06-21T20:10:00Z",
  },
  {
    id: "id9",
    isConvenient: false,
    name: "영등포구 노인복지관",
    reviewContext: "프로그램이 다양하지 않아 아쉽습니다.",
    reporterId: "user9@example.com",
    createdAt: "2024-06-22T21:40:00Z",
    modifiedAt: "2024-06-23T22:50:00Z",
  },
  {
    id: "id10",
    isConvenient: true,
    name: "영등포구립미술관",
    reviewContext: "전시 작품이 다채롭고, 관람 경험이 좋았습니다.",
    reporterId: "user10@example.com",
    createdAt: "2024-06-24T23:30:00Z",
    modifiedAt: "2024-06-25T24:40:00Z",
  },
];

const AdminReview = () => {
  return (
    <div>
      <AdminReviewForm data={tempReviews} />
    </div>
  );
};

export default AdminReview;
