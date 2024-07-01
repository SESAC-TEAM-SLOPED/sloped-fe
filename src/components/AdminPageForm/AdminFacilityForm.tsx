import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Facility data type definition
interface Facility {
  id: string;
  name: string; // 시설명
  facilityType: string; // 시설 구분 (식당, 카페, 공공장소, 기타)
  address: string; // 주소
  phoneNumber: string; // 전화번호
  accessibilityFeatures: string; // 입구턱, 경사로, 엘리베이터 유무
  openingHours: string; // 영업 시간
  createdAt: string; // 생성 일시
  modifiedAt: string; // 수정 일시
  description?: string; // 설명
}

interface AdminFacilityFormProps {
  data: Facility[];
}

const AdminFacilityForm = ({ data }: AdminFacilityFormProps) => {
  const [page, setPage] = useState(1);
  const [facilitys, setFacilitys] = useState<Facility[]>([]);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setFacilitys(data.slice(startIndex, endIndex));
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
            <th className="py-2">시설명</th>
            <th className="py-2">시설구분</th>
            <th className="py-2">주소</th>
            <th className="py-2">전화번호</th>
            <th className="py-2">입구턱, 경사로, 엘리베이터 유무</th>
            <th className="py-2">영업 시간</th>
            <th className="py-2">생성/수정 일시</th>
          </tr>
        </thead>
        <tbody>
          {facilitys.map((facility, index) => (
            <tr key={facility.id} className="text-center">
              <td className="py-2">{(page - 1) * itemsPerPage + index + 1}</td>
              <td className="py-2">
                <Link
                  to={`/admin/facility/${facility.id}`}
                  className="text-blue-600 hover:underline"
                >
                  {facility.name}
                </Link>
              </td>
              <td className="py-2">{facility.facilityType}</td>
              <td className="py-2">{facility.address}</td>
              <td className="py-2">{facility.phoneNumber}</td>
              <td className="py-2">{facility.accessibilityFeatures}</td>
              <td className="py-2">{facility.openingHours}</td>
              <td className="py-2">
                <div>
                  {new Date(facility.createdAt).toLocaleString()}
                  <br />
                  {new Date(facility.modifiedAt).toLocaleString()}
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

export default AdminFacilityForm;
