import React, { useState } from "react";
import { Review } from "../../types/Review";

type Props = {
  reviewData: Review[];
  setFilteredReviews: React.Dispatch<React.SetStateAction<Review[]>>;
};

const ReviewFilter = ({ reviewData, setFilteredReviews }: Props) => {
  // const [sortBy, setSortBy] = useState("latest"); // 최신순 기본 설정
  const [filterBy, setFilterBy] = useState<
    "all" | "comfortable" | "uncomfortable"
  >("all");

  // // 최신순 정렬 처리 함수
  // const handleSortBy = (type: string) => {
  //   const sortedReviews = [...reviewData];
  //   if (type === "latest") {
  //     sortedReviews.sort((a, b) => b.id - a.id); // id를 기준으로 내림차순 정렬 (최신순)
  //   }
  //   setFilteredReviews(sortedReviews);
  //   setSortBy(type); // sortBy 상태 업데이트
  // };

  // 리뷰 필터링 처리 함수
  const handleFilterBy = (type: "all" | "comfortable" | "uncomfortable") => {
    let filteredReviews = [...reviewData];
    if (type !== "all") {
      filteredReviews = filteredReviews.filter(
        (review) => review.type === type,
      );
    }
    setFilteredReviews(filteredReviews);
    setFilterBy(type);
  };

  return (
    <div className="flex items-center gap-4 mt-4">
      {/* <button
        onClick={() => handleSortBy("latest")}
        className={`px-4 py-2 rounded-md ${
          sortBy === "latest"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-800"
        }`}
        style={{ borderRadius: "9999px" }}
      >
        최신순
      </button> */}
      <button
        onClick={() => handleFilterBy("all")}
        className={`px-3 py-2 rounded-md ${
          filterBy === "all"
            ? "bg-[#3F51B5] text-[#F1F9F1]"
            : "bg-gray-200 text-gray-800"
        }`}
        style={{ borderRadius: "9999px" }}
      >
        전체
      </button>
      <button
        onClick={() => handleFilterBy("comfortable")}
        className={`px-3 py-2 rounded-md ${
          filterBy === "comfortable"
            ? "bg-[#F1F9F1] text-[#4caf50]"
            : "bg-gray-200 text-gray-800"
        }`}
        style={{ borderRadius: "9999px" }}
      >
        편해요 리뷰만 보기
      </button>
      <button
        onClick={() => handleFilterBy("uncomfortable")}
        className={`px-3 py-2 rounded-md ${
          filterBy === "uncomfortable"
            ? "bg-[#FFF0EF] text-[#F8837C]"
            : "bg-gray-200 text-gray-800"
        }`}
        style={{ borderRadius: "9999px" }}
      >
        불편해요 리뷰만 보기
      </button>
    </div>
  );
};

export default ReviewFilter;
