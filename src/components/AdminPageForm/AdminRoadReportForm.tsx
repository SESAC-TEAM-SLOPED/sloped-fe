import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// 회원 데이터 타입 정의
interface Road {
  id: string;
  address: string; //주소
  roadContext: string; // 통행 불편 장애 내용
  reporterId: string; //제보자 아이디(이메일)
  imageUrl: string; //이미지 URL
  createdAt: string; //생성 일시
  modifiedAt: string; //수정 일시
}

interface AdminRoadReportProps {
  data: Road[];
}

const AdminRoadReportForm = ({ data }: AdminRoadReportProps) => {
  const [page, setPage] = useState(1);
  const [roads, setRoads] = useState<Road[]>([]);
  //검색, 삭제 용도
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  //검색 주의사항, 검색은 불편 내용으로 진행
  //삭제는 id값 사용
  useEffect(() => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setRoads(
      data
        .filter((road) => road.roadContext.includes(searchTerm))
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
            placeholder="제보 내용을 입력하세요"
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
                      ? new Set(roads.map((r) => r.id))
                      : new Set(),
                  )
                }
              />
            </th>
            <th className="py-2">No.</th>
            <th className="py-2">주소</th>
            <th className="py-2">통행 불편 내용</th>
            <th className="py-2">제보 등록자</th>
            <th className="py-2">이미지 url</th>
            <th className="py-2">생성/수정 일시</th>
          </tr>
        </thead>
        <tbody>
          {roads.map((road, index) => (
            <tr key={road.id} className="text-center">
              <td className="py-2">
                <input
                  type="checkbox"
                  checked={selectedIds.has(road.id)}
                  onChange={() => handleSelect(road.id)}
                />
              </td>
              <td className="py-2">{(page - 1) * itemsPerPage + index + 1}</td>
              <td className="py-2">
                <Link
                  to={`/admin/road/${road.id}`}
                  className="text-blue-600 hover:underline"
                >
                  {road.address}
                </Link>
              </td>
              <td className="py-2">{road.roadContext}</td>
              <td className="py-2">{road.reporterId}</td>
              <td className="py-2">{road.imageUrl}</td>
              <td className="py-2">
                <div>
                  {new Date(road.createdAt).toLocaleString()}
                  <br />
                  {new Date(road.modifiedAt).toLocaleString()}
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

export default AdminRoadReportForm;
