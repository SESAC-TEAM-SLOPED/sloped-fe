import React, { useState, useEffect } from "react";

// 회원 데이터 타입 정의
interface Review {
  id: string;
  isConvenient: boolean; //편해요 - 1, 불편해요 - 0
  name: string; //시설명
  reviewType: string; //시설 구분
  reviewContext: string; // 리뷰 내용
  reporterId: string; //제보자 아이디(이메일)
  createdAt: string; //생성 일시
  modifiedAt: string; //수정 일시
}

interface AdminReviewFormProps {
  data: Review[];
}

const AdminReviewForm = ({ data }: AdminReviewFormProps) => {
  const [page, setPage] = useState(1);
  const [reviews, setReviews] = useState<Review[]>([]);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setReviews(data.slice(startIndex, endIndex));
  }, [page, data]);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="p-4">
      <table className="min-w-full bg-white">
        <thead className="bg-[#3F51B5] text-white">
          <tr>
            <th className="py-2">No.</th>
            <th className="py-2">키워드</th>
            <th className="py-2">시설명</th>
            <th className="py-2">리뷰 내용</th>
            <th className="py-2">전화번호</th>
            <th className="py-2">리뷰 작성자</th>
            <th className="py-2">생성/수정 일시</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((Review, index) => (
            <tr key={Review.id} className="text-center">
              <td className="py-2">{(page - 1) * itemsPerPage + index + 1}</td>
              <td className="py-2">
                <span
                  className={`px-4 py-2 rounded-full ${
                    Review.isConvenient
                      ? "bg-[#F1F9F1] text-[#4caf50]"
                      : "bg-[#FFF0EF] text-[#F8837C]"
                  }`}
                >
                  {Review.isConvenient ? "편해요" : "불편해요"}
                </span>
              </td>
              <td className="py-2">{Review.name}</td>
              <td className="py-2">{Review.reviewType}</td>
              <td className="py-2">{Review.reviewContext}</td>
              <td className="py-2">{Review.reporterId}</td>
              <td className="py-2">
                <div>
                  {new Date(Review.createdAt).toLocaleString()}
                  <br />
                  {new Date(Review.modifiedAt).toLocaleString()}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <button
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
          onClick={() => handlePageChange(page - 1)}
          disabled={page <= 1}
        >
          이전
        </button>
        <span>
          {page} / {totalPages}
        </span>
        <button
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
          onClick={() => handlePageChange(page + 1)}
          disabled={page >= totalPages}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default AdminReviewForm;
