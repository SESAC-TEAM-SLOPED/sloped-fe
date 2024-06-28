import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// Facility data type definition
interface Facility {
  id: string;
  name: string;
  facilityType: string;
  address: string;
  phoneNumber: string;
  accessibilityFeatures: string;
  openingHours: string;
  createdAt: string;
  modifiedAt: string;
}

const AdminFacilityDetailForm = ({ data }: { data: Facility[] }) => {
  const { id } = useParams<{ id: string }>();
  const [facility, setFacility] = useState<Facility | null>(null);

  useEffect(() => {
    const facilityData = data.find((facility) => facility.id === id);
    if (facilityData) {
      setFacility(facilityData);
    }
  }, [id, data]);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {facility && (
        <div className="bg-white p-6 rounded shadow-md relative">
          <h2 className="text-2xl font-bold mb-4">{facility.name}</h2>
          <div className="absolute top-4 right-4 flex space-x-2">
            <button className="px-4 py-2 bg-yellow-600 text-white rounded">
              수정
            </button>
            <button className="px-4 py-2 bg-gray-600 text-white rounded">
              삭제
            </button>
            <Link
              to="/admin/facility"
              className="px-4 py-2 bg-[#3F51B5] text-white rounded"
            >
              목록으로
            </Link>
          </div>
          <div className="bg-gray-200 p-4 rounded mb-4">
            <div className="mb-4">
              <label className="block font-semibold mb-1">위치</label>
              <input
                type="text"
                value={facility.address}
                className="w-full border p-2 rounded"
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">전화번호</label>
              <input
                type="text"
                value={facility.phoneNumber}
                className="w-full border p-2 rounded"
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">카테고리</label>
              <div className="flex">
                {["식당", "관광지", "카페", "기타"].map((category) => (
                  <label key={category} className="mr-4">
                    <input
                      type="radio"
                      value={category}
                      checked={facility.facilityType === category}
                      readOnly
                    />
                    {category}
                  </label>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">입구턱 유무</label>
              <div className="flex">
                <label className="mr-4">
                  <input
                    type="radio"
                    value="있음"
                    checked={facility.accessibilityFeatures.includes(
                      "입구턱 있음",
                    )}
                    readOnly
                  />
                  있음
                </label>
                <label className="mr-4">
                  <input
                    type="radio"
                    value="없음"
                    checked={facility.accessibilityFeatures.includes(
                      "입구턱 없음",
                    )}
                    readOnly
                  />
                  없음
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">경사로 유무</label>
              <div className="flex">
                <label className="mr-4">
                  <input
                    type="radio"
                    value="있음"
                    checked={facility.accessibilityFeatures.includes(
                      "경사로 있음",
                    )}
                    readOnly
                  />
                  있음
                </label>
                <label className="mr-4">
                  <input
                    type="radio"
                    value="없음"
                    checked={facility.accessibilityFeatures.includes(
                      "경사로 없음",
                    )}
                    readOnly
                  />
                  없음
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">
                엘리베이터 유무
              </label>
              <div className="flex">
                <label className="mr-4">
                  <input
                    type="radio"
                    value="있음"
                    checked={facility.accessibilityFeatures.includes(
                      "엘리베이터 있음",
                    )}
                    readOnly
                  />
                  있음
                </label>
                <label className="mr-4">
                  <input
                    type="radio"
                    value="없음"
                    checked={facility.accessibilityFeatures.includes(
                      "엘리베이터 없음",
                    )}
                    readOnly
                  />
                  없음
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">영업 시간</label>
              <textarea
                value={facility.openingHours}
                className="w-full border p-2 rounded"
                readOnly
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-1">시설 설명</label>
            <textarea value="" className="w-full border p-2 rounded" />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminFacilityDetailForm;
