import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalPortal from "../ui/ModalPortal";
import Modal from "../ui/Modal";

const MyReviewForm = () => {
  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [reviewToDelete, setReviewToDelete] = useState<number | null>(null);

  // 임시 데이터
  const reviews = [
    {
      id: 1,
      name: "청년취업사관학교",
      rating: "편해요",
      content: "아이랑 이용하기 편해요 엘리베이터는 공사중이었어요",
      images: [
        "https://t3.ftcdn.net/jpg/07/02/60/46/240_F_702604626_9ojecqSF0MHmeV4St7PGi3mqcUWdygJh.jpg",
        "https://t3.ftcdn.net/jpg/07/02/60/46/240_F_702604626_9ojecqSF0MHmeV4St7PGi3mqcUWdygJh.jpg",
        "https://t3.ftcdn.net/jpg/07/02/60/46/240_F_702604626_9ojecqSF0MHmeV4St7PGi3mqcUWdygJh.jpg",
      ],
      createdAt: "8개월 전",
    },
    {
      id: 2,
      name: "원조부안집 문래점",
      rating: "불편해요",
      content: "아이랑 이용하기 편해요 엘리베이터는 공사중이었어요",
      images: [
        "https://t3.ftcdn.net/jpg/07/02/60/46/240_F_702604626_9ojecqSF0MHmeV4St7PGi3mqcUWdygJh.jpg",
      ],
      createdAt: "8개월 전",
    },
  ];

  const handleEdit = (id: number) => {
    // id 임시로 number로 설정
    navigate("/mypage/edit-review");
  };

  const handleDelete = (id: number) => {
    setReviewToDelete(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (reviewToDelete !== null) {
      // 삭제 로직 추가
      console.log(`삭제: ${reviewToDelete}`);
      // 삭제 로직 후 상태 초기화
      setReviewToDelete(null);
      setShowDeleteModal(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">내가 남긴 리뷰</h1>
      {reviews.map((review) => (
        <div key={review.id} className="bg-white p-4 rounded-lg shadow mb-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold">{review.name}</h2>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(review.id)}
                className="px-4 py-2 bg-signiture text-white rounded-lg"
              >
                수정
              </button>
              <button
                onClick={() => handleDelete(review.id)}
                className="px-4 py-2 bg-signiture text-white rounded-lg"
              >
                삭제
              </button>
            </div>
          </div>
          <div className="flex items-center mb-2">
            <span
              className={`px-2 py-1 rounded ${
                review.rating === "편해요"
                  ? "bg-[#F1F9F1] text-[#4caf50]"
                  : "bg-[#FFF0EF] text-[#F8837C]"
              }`}
            >
              {review.rating}
            </span>
            <span className="ml-4 text-gray-500">{review.createdAt}</span>
          </div>
          <p className="mb-4">{review.content}</p>
          <div className="grid grid-cols-3 gap-2">
            {review.images.slice(0, 3).map((image, index) => (
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
