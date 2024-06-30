import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// Review data type definition
interface Review {
  id: string;
  isConvenient: boolean; //편해요 - true, 불편해요 - false
  name: string; //시설명
  reviewType: string; //시설 구분
  reviewContext: string; // 리뷰 내용
  reporterId: string; //제보자 아이디(이메일)
  createdAt: string; //생성 일시
  modifiedAt: string; //수정 일시
}

const AdminReviewDetailForm = ({ data }: { data: Review[] }) => {
  const { id } = useParams<{ id: string }>();
  const [review, setReview] = useState<Review | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Review | null>(null);

  useEffect(() => {
    const reviewData = data.find((review) => review.id === id);
    if (reviewData) {
      setReview(reviewData);
      setFormData(reviewData);
    }
  }, [id, data]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing); // 수정 누르면, 데이터 수정 모드로 변경
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    if (formData) {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSave = () => {
    if (formData) {
      setReview(formData);
      setIsEditing(false);
      // 수정 버튼을 누르면, 수정된 데이터를 서버로 전송하는 로직을 추가해야 함.
    }
  };

  const handleCancel = () => {
    setFormData(review);
    setIsEditing(false);
  };

  const handleDelete = () => {
    // 삭제 버튼을 누르면, 해당 데이터를 서버에서 삭제하는 로직을 추가해야 함.
    // 정말 삭제 하겠습니까? 라는 모달 폼 추가 가능!
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {review && formData && (
        <div className="bg-white p-6 rounded shadow-md relative">
          <h2 className="text-2xl font-bold mb-4">{review.name}</h2>
          <div className="absolute top-4 right-4 flex space-x-2">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-green-600 text-white rounded"
                >
                  확인
                </button>
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 bg-red-600 text-white rounded"
                >
                  취소
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleEditToggle}
                  className="px-4 py-2 bg-yellow-600 text-white rounded"
                >
                  수정
                </button>
                <button
                  onClick={handleDelete}
                  className="px-4 py-2 bg-gray-600 text-white rounded"
                >
                  삭제
                </button>
                <Link
                  to="/admin/review"
                  className="px-4 py-2 bg-[#3F51B5] text-white rounded"
                >
                  목록으로
                </Link>
              </>
            )}
          </div>
          <div className="bg-gray-200 p-4 rounded mb-4">
            <div className="mb-4">
              <label className="block font-semibold mb-1">시설 구분</label>
              <div className="flex">
                {["식당", "관광지", "카페", "기타"].map((category) => (
                  <label key={category} className="mr-4">
                    <input
                      type="radio"
                      name="reviewType"
                      value={category}
                      checked={formData.reviewType === category}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                    {category}
                  </label>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">편의 여부</label>
              <div className="flex">
                <label className="mr-4">
                  <input
                    type="radio"
                    name="isConvenient"
                    value="true"
                    checked={formData.isConvenient === true}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                  편해요
                </label>
                <label className="mr-4">
                  <input
                    type="radio"
                    name="isConvenient"
                    value="false"
                    checked={formData.isConvenient === false}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                  불편해요
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">리뷰 내용</label>
              <textarea
                name="reviewContext"
                value={formData.reviewContext}
                className="w-full border p-2 rounded"
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">제보자 아이디</label>
              <input
                type="text"
                name="reporterId"
                value={formData.reporterId}
                className="w-full border p-2 rounded"
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">생성 일시</label>
              <input
                type="text"
                name="createdAt"
                value={formData.createdAt}
                className="w-full border p-2 rounded"
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">수정 일시</label>
              <input
                type="text"
                name="modifiedAt"
                value={formData.modifiedAt}
                className="w-full border p-2 rounded"
                readOnly
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminReviewDetailForm;
