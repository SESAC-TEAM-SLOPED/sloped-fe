import React, { useState, useEffect } from "react";

// 회원 데이터 타입 정의
interface Traffic {
  id: string;
  address: string; //주소
  trafficContext: string; // 통행 불편 장애 내용
  reporterId: string; //제보자 아이디(이메일)
  imageUrl: string; //이미지 URL
  createdAt: string; //생성 일시
  modifiedAt: string; //수정 일시
}

interface AdminTrafficFormProps {
  data: Traffic[];
}

const AdminTrafficDisruptionForm = ({ data }: AdminTrafficFormProps) => {
  const [page, setPage] = useState(1);
  const [Traffics, setTraffics] = useState<Traffic[]>([]);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setTraffics(data.slice(startIndex, endIndex));
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
            <th className="py-2">주소</th>
            <th className="py-2">통행 불편 내용</th>
            <th className="py-2">제보 등록자</th>
            <th className="py-2">이미지 url</th>
            <th className="py-2">생성/수정 일시</th>
          </tr>
        </thead>
        <tbody>
          {Traffics.map((Traffic, index) => (
            <tr key={Traffic.id} className="text-center">
              <td className="py-2">{(page - 1) * itemsPerPage + index + 1}</td>
              <td className="py-2">{Traffic.address}</td>
              <td className="py-2">{Traffic.trafficContext}</td>
              <td className="py-2">{Traffic.reporterId}</td>
              <td className="py-2">{Traffic.imageUrl}</td>
              <td className="py-2">
                <div>
                  {new Date(Traffic.createdAt).toLocaleString()}
                  <br />
                  {new Date(Traffic.modifiedAt).toLocaleString()}
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

export default AdminTrafficDisruptionForm;
