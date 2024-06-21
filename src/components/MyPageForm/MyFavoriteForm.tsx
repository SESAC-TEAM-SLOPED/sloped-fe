import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa"; // 추후 star 마커 동일하게 수정 예정

const favoriteData = [
  {
    name: "청년취업사관학교",
    category: "기타",
    address: "서울특별시 영등포구 선유로9길 30 106동",
    reviewCount: 10,
  },
  {
    name: "원조부안집 문래점",
    category: "음식점",
    address: "서울특별시 영등포구 선유로9길 10 문래SK V1센터 104호",
    reviewCount: 10,
  },
  {
    name: "청년다방",
    category: "음식점",
    address: "서울특별시 영등포구 선유로9길 10 문래SK V1센터 104호",
    reviewCount: 10,
  },
  {
    name: "빽다방",
    category: "카페",
    address: "서울특별시 영등포구 선유로9길 10 문래SK V1센터 104호",
    reviewCount: 10,
  },
];

const MyFavoriteForm = () => {
  return (
    <div className="py-4">
      {favoriteData.map((item, index) => (
        <div
          key={index}
          className="flex items-center bg-white p-4 rounded-lg shadow mb-4"
        >
          <div className="flex-grow">
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p className="text-gray-600">{item.category}</p>
            <p className="text-gray-600">{item.address}</p>
            <p className="text-gray-600">리뷰 {item.reviewCount}개</p>
          </div>
          <FaStar className="text-yellow-500" size={24} />
        </div>
      ))}
    </div>
  );
};

export default MyFavoriteForm;
