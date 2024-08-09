import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ModalPortal from "../ui/ModalPortal";
import Modal from "../ui/Modal";
import axiosInstance from "../../service/axiosInstance";

interface Review {
  facilityReviewId: number;
  facilityName: string;
  nickname: string;
  isConvenient: boolean;
  content: string;
  urls: string[];
  updatedAt: string;
  disability: boolean;
}

const MyReviewForm = () => {
  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [reviewToDelete, setReviewToDelete] = useState<number | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axiosInstance.get(
          "/api/reviews/get-all-reviews",
        );
        setReviews(response.data);
      } catch (error) {
        console.error("리뷰 데이터를 가져오는 중 오류가 발생했습니다:", error);
      }
    };

    fetchReviews();
  }, []);

  const handleEdit = (
    facilityReviewId: number,
    facilityName: string,
    facilityId: string,
    content: string,
    isConvenient: boolean,
  ) => {
    navigate(`/review/update/`, {
      state: {
        facilityReviewId,
        facilityName,
        facilityId,
        content,
        isConvenient,
      },
    });
  };

  const handleDelete = (id: number) => {
    setReviewToDelete(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (reviewToDelete !== null) {
      try {
        // DELETE 요청을 보내 리뷰를 삭제
        const response = await axiosInstance.delete(
          `/api/reviews/${reviewToDelete}`,
        );
        if (response.status === 204) {
          // 삭제 성공 시 상태 업데이트
          setReviews(
            reviews.filter(
              (review) => review.facilityReviewId !== reviewToDelete,
            ),
          );
          setReviewToDelete(null);
          setShowDeleteModal(false);
        }
      } catch (error) {
        console.error("리뷰 삭제 중 오류가 발생했습니다:", error);
      }
    }
  };

  return (
    <div className="py-4">
      {reviews.map((review) => (
        <div
          key={review.facilityReviewId}
          className="bg-white p-4 rounded-lg shadow mb-4"
        >
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold">{review.facilityName}</h2>
            <div className="flex gap-2">
              <button
                onClick={() =>
                  handleEdit(
                    review.facilityReviewId,
                    review.facilityName,
                    review.nickname,
                    review.content,
                    review.isConvenient,
                  )
                }
                className="px-4 py-2 bg-signiture text-white rounded-lg"
              >
                수정
              </button>
              <button
                onClick={() => handleDelete(review.facilityReviewId)}
                className="px-4 py-2 bg-signiture text-white rounded-lg"
              >
                삭제
              </button>
            </div>
          </div>
          <div className="flex items-center mb-2">
            <span
              className={`px-2 py-1 rounded ${
                review.isConvenient
                  ? "bg-[#F1F9F1] text-[#4caf50]"
                  : "bg-[#FFF0EF] text-[#F8837C]"
              }`}
            >
              {review.isConvenient ? "편해요" : "불편해요"}
            </span>
            <span className="ml-4 text-gray-500">
              {new Date(review.updatedAt).toLocaleDateString()}
            </span>
          </div>
          <p className="mb-4">{review.content}</p>
          <div className="grid grid-cols-3 gap-2">
            {review.urls.slice(0, 3).map((image, index) => (
              <img
                key={index}
                src={image}
                alt="리뷰 이미지"
                className="w-full h-24 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      ))}

      {showDeleteModal && (
        <ModalPortal>
          <Modal onClose={() => setShowDeleteModal(false)}>
            <div className="flex flex-col items-center p-4">
              <p className="text-xl mb-4">리뷰를 삭제하시겠습니까?</p>
              <div className="flex gap-8 mb-4">
                <button
                  onClick={confirmDelete}
                  className="px-4 py-2 bg-signiture text-white rounded-lg"
                >
                  예
                </button>
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg"
                >
                  아니요
                </button>
              </div>
              <p className="text-xs text-gray-600">
                이 결정은 되돌릴 수 없습니다!
              </p>
            </div>
          </Modal>
        </ModalPortal>
      )}
    </div>
  );
};

export default MyReviewForm;
