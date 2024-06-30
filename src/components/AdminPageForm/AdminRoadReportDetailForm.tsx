import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// Road data type definition
interface Road {
  id: string;
  address: string; //주소
  roadContext: string; // 통행 불편 장애 내용
  reporterId: string; //제보자 아이디(이메일)
  imageUrl: string; //이미지 URL
  createdAt: string; //생성 일시
  modifiedAt: string; //수정 일시
}

const AdminRoadReportDetailForm = ({ data }: { data: Road[] }) => {
  const { id } = useParams<{ id: string }>();
  const [road, setRoad] = useState<Road | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Road | null>(null);

  useEffect(() => {
    const roadData = data.find((road) => road.id === id);
    if (roadData) {
      setRoad(roadData);
      setFormData(roadData);
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
      setRoad(formData);
      setIsEditing(false);
      // 수정 버튼을 누르면, 수정된 데이터를 서버로 전송하는 로직을 추가해야 함.
    }
  };

  const handleCancel = () => {
    setFormData(road);
    setIsEditing(false);
  };

  const handleDelete = () => {
    // 삭제 버튼을 누르면, 해당 데이터를 서버에서 삭제하는 로직을 추가해야 함.
    // 정말 삭제 하겠습니까? 라는 모달 폼 추가 가능!
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {road && formData && (
        <div className="bg-white p-6 rounded shadow-md relative">
          <h2 className="text-2xl font-bold mb-4">{road.address}</h2>
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
                  to="/admin/roadReports"
                  className="px-4 py-2 bg-[#3F51B5] text-white rounded"
                >
                  목록으로
                </Link>
              </>
            )}
          </div>
          <div className="bg-gray-200 p-4 rounded mb-4">
            <div className="mb-4">
              <label className="block font-semibold mb-1">주소</label>
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
              <label className="block font-semibold mb-1">
                통행 불편 장애 내용
              </label>
              <textarea
                name="roadContext"
                value={formData.roadContext}
                className="w-full border p-2 rounded"
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">제보자 아이디</label>
              <input
                type="text"
                name="reporterId"
                value={formData.reporterId}
                className="w-full border p-2 rounded"
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">이미지 URL</label>
              <input
                type="text"
                name="imageUrl"
                value={formData.imageUrl}
                className="w-full border p-2 rounded"
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">생성 일시</label>
              <input
                type="text"
                name="createdAt"
                value={formData.createdAt}
                className="w-full border p-2 rounded"
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">수정 일시</label>
              <input
                type="text"
                name="modifiedAt"
                value={formData.modifiedAt}
                className="w-full border p-2 rounded"
                readOnly
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminRoadReportDetailForm;
