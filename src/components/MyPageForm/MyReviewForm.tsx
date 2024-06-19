import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

const MyReviewsPage = () => {
  const navigate = useNavigate();

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
    // 수정 로직 추가
    navigate("/mypage/edit-review");
  };

  const handleDelete = (id: number) => {
    // id 임시로 number로 설정
    // 삭제 로직 추가
    console.log(`삭제: ${id}`);
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
            {review.rating === "편해요" ? (
              <div className="bg-[#F1F9F1] text-[#4caf50] flex justify-center items-center w-20 h-9 rounded-full text-center">
                <p>편해요</p>
              </div>
            ) : (
              <div className="bg-[#FFF0EF] text-[#F8837C] flex justify-center items-center w-20 h-9 rounded-full text-center">
                <p>불편해요</p>
              </div>
            )}
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
    </div>
  );
};

export default MyReviewsPage;
