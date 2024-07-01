import React from "react";
import { useParams } from "react-router-dom";
import AdminReviewDetailForm from "../../components/AdminPageForm/AdminReviewDetailForm";

const tempReview = [
  {
    id: "id1",
    isConvenient: true,
    name: "청년사관학교 영등포",
    reviewContext: "시설이 매우 청결하고 접근성이 좋습니다.",
    reporterId: "user1@example.com",
    createdAt: "2024-06-06T12:45:21Z",
    modifiedAt: "2024-06-07T10:41:21Z",
  },
];

const AdminReviewDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <AdminReviewDetailForm data={tempReview} />
    </div>
  );
};

export default AdminReviewDetail;
