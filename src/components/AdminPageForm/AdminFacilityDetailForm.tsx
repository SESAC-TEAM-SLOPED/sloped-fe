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
  description?: string; // ? : description이 있을 수도 있고 없을 수도 있다.
}

const AdminFacilityDetailForm = ({ data }: { data: Facility[] }) => {
  const { id } = useParams<{ id: string }>();
  const [facility, setFacility] = useState<Facility | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Facility | null>(null);

  useEffect(() => {
    const facilityData = data.find((facility) => facility.id === id);
    if (facilityData) {
      setFacility(facilityData);
      setFormData(facilityData);
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
      setFacility(formData);
      setIsEditing(false);
      // 수정 버튼을 누르면, 수정된 데이터를 서버로 전송하는 로직을 추가해야 함.
    }
  };

  const handleCancel = () => {
    setFormData(facility);
    setIsEditing(false);
  };

  const handleDelete = () => {
    // 삭제 버튼을 누르면, 해당 데이터를 서버에서 삭제하는 로직을 추가해야 함.
    // 정말 삭제 하겠습니까? 라는 모달 폼 추가 가능!
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {facility && formData && (
        <div className="bg-white p-6 rounded shadow-md relative">
          <h2 className="text-2xl font-bold mb-4">{facility.name}</h2>
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
                  to="/admin/facility"
                  className="px-4 py-2 bg-[#3F51B5] text-white rounded"
                >
                  목록으로
                </Link>
              </>
            )}
          </div>
          <div className="bg-gray-200 p-4 rounded mb-4">
            <div className="mb-4">
              <label className="block font-semibold mb-1">위치</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                className="w-full border p-2 rounded"
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">전화번호</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                className="w-full border p-2 rounded"
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">카테고리</label>
              <div className="flex">
                {["식당", "관광지", "카페", "기타"].map((category) => (
                  <label key={category} className="mr-4">
                    <input
                      type="radio"
                      name="facilityType"
                      value={category}
                      checked={formData.facilityType === category}
                      onChange={handleChange}
                      disabled={!isEditing}
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
                    name="accessibilityFeatures"
                    value="입구턱 있음"
                    checked={formData.accessibilityFeatures.includes(
                      "입구턱 있음",
                    )}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                  있음
                </label>
                <label className="mr-4">
                  <input
                    type="radio"
                    name="accessibilityFeatures"
                    value="입구턱 없음"
                    checked={formData.accessibilityFeatures.includes(
                      "입구턱 없음",
                    )}
                    onChange={handleChange}
                    disabled={!isEditing}
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
                    name="accessibilityFeatures"
                    value="경사로 있음"
                    checked={formData.accessibilityFeatures.includes(
                      "경사로 있음",
                    )}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                  있음
                </label>
                <label className="mr-4">
                  <input
                    type="radio"
                    name="accessibilityFeatures"
                    value="경사로 없음"
                    checked={formData.accessibilityFeatures.includes(
                      "경사로 없음",
                    )}
                    onChange={handleChange}
                    disabled={!isEditing}
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
                    name="accessibilityFeatures"
                    value="엘리베이터 있음"
                    checked={formData.accessibilityFeatures.includes(
                      "엘리베이터 있음",
                    )}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                  있음
                </label>
                <label className="mr-4">
                  <input
                    type="radio"
                    name="accessibilityFeatures"
                    value="엘리베이터 없음"
                    checked={formData.accessibilityFeatures.includes(
                      "엘리베이터 없음",
                    )}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                  없음
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">영업 시간</label>
              <textarea
                name="openingHours"
                value={formData.openingHours}
                className="w-full border p-2 rounded"
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-1">시설 설명</label>
            <textarea
              name="description"
              value={formData.description || ""}
              className="w-full border p-2 rounded"
              onChange={handleChange}
              readOnly={!isEditing}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminFacilityDetailForm;
