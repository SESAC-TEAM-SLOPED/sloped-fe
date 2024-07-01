import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// 회원 데이터 타입 정의
interface Review {
  id: string;
  isConvenient: boolean; //편해요 - 1, 불편해요 - 0
  name: string; //시설명
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

  //검색, 삭제 용도
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  //검색 주의사항, 검색은 리뷰 내용으로 진행
  //삭제는 id값 사용
  useEffect(() => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setReviews(
      data
        .filter((review) => review.reviewContext.includes(searchTerm))
        .slice(startIndex, endIndex),
    );
  }, [page, data, searchTerm]);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    setPage(1); // Reset to the first page on a new search
  };

  const handleSelect = (id: string) => {
    setSelectedIds((prev) => {
      const newSelected = new Set(prev);
      if (newSelected.has(id)) {
        newSelected.delete(id);
      } else {
        newSelected.add(id);
      }
      return newSelected;
    });
  };

  const handleDelete = () => {
    const newData = data.filter((facility) => !selectedIds.has(facility.id));
    setSelectedIds(new Set());
    // Assuming you want to update the parent component with newData
    // Pass newData to a callback function from the parent if needed
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex justify-end w-full items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="리뷰 내용을 입력하세요"
            className="border p-2"
          />
          <button
            onClick={handleSearch}
            className="ml-2 px-4 py-2 bg-[#3F51B5] text-white rounded"
            style={{ minWidth: "64px" }}
          >
            검색
          </button>
        </div>
        <button
          onClick={handleDelete}
          className="ml-2 px-4 py-2 bg-red-500 text-white rounded"
          style={{ minWidth: "64px" }}
        >
          삭제
        </button>
      </div>
      <table className="min-w-full bg-white">
        <thead className="bg-[#3F51B5] text-white">
          <tr>
            <th className="py-2">
              <input
                type="checkbox"
                onChange={(e) =>
                  setSelectedIds(
                    e.target.checked
                      ? new Set(reviews.map((r) => r.id))
                      : new Set(),
                  )
                }
              />
            </th>
            <th className="py-2">No.</th>
            <th className="py-2">키워드</th>
            <th className="py-2">시설명</th>
            <th className="py-2">리뷰 내용</th>
            <th className="py-2">리뷰 작성자</th>
            <th className="py-2">생성/수정 일시</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review, index) => (
            <tr key={review.id} className="text-center">
              <td className="py-2">
                <input
                  type="checkbox"
                  checked={selectedIds.has(review.id)}
                  onChange={() => handleSelect(review.id)}
                />
              </td>
              <td className="py-2">{(page - 1) * itemsPerPage + index + 1}</td>
              <td className="py-2">
                <span
                  className={`px-4 py-2 rounded-full ${
                    review.isConvenient
                      ? "bg-[#F1F9F1] text-[#4caf50]"
                      : "bg-[#FFF0EF] text-[#F8837C]"
                  }`}
                >
                  {review.isConvenient ? "편해요" : "불편해요"}
                </span>
              </td>
              <td className="py-2">
                <Link
                  to={`/admin/review/${review.id}`}
                  className="text-blue-600 hover:underline"
                >
                  {review.name}
                </Link>
              </td>
              <td className="py-2">{review.reviewContext}</td>
              <td className="py-2">{review.reporterId}</td>
              <td className="py-2">
                <div>
                  {new Date(review.createdAt).toLocaleString()}
                  <br />
                  {new Date(review.modifiedAt).toLocaleString()}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center items-center mt-4">
        <button
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
          onClick={() => handlePageChange(page - 1)}
          disabled={page <= 1}
        >
          이전
        </button>
        <span className="mx-4">
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
