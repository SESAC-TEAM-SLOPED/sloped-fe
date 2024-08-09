import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa"; // 추후 star 마커 동일하게 수정 예정
import axiosInstance from "../../service/axiosInstance";
import { serverUrl } from "../../constant/url";

// 데이터 항목의 타입 정의
interface FavoriteItem {
  facilityId: number;
  name: string;
  facilityType: string;
  address: string;
  isBookmarked: boolean;
}

const MyFavoriteForm = () => {
  const [favoriteData, setFavoriteData] = useState<FavoriteItem[]>([]);

  useEffect(() => {
    const fetchFavoriteData = async () => {
      try {
        const response = await axiosInstance.get("/api/users/bookmark");
        const modifiedData = response.data.map((item: any) => ({
          ...item,
          isBookmarked: true, // 즐겨찾기 목록에 있는 항목은 모두 true로 설정
        }));
        setFavoriteData(modifiedData);
      } catch (error) {
        console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
      }
    };

    fetchFavoriteData();
  }, []);

  const onClickBookmark = async (id: number) => {
    const item = favoriteData.find((item) => item.facilityId === id);
    if (!item) {
      return;
    }

    try {
      if (!item.isBookmarked) {
        await axiosInstance.post(`${serverUrl}/api/users/bookmark`, {
          facilityId: id,
        });
      } else {
        await axiosInstance.delete(`/api/users/bookmark?facilityId=${id}`);
      }

      // 상태 업데이트
      setFavoriteData((prevData) =>
        prevData.map((item) =>
          item.facilityId === id
            ? { ...item, isBookmarked: !item.isBookmarked }
            : item,
        ),
      );
    } catch (error) {
      console.error("북마크 상태를 변경하는 중 오류가 발생했습니다:", error);
    }
  };

  return (
    <div className="py-4">
      {favoriteData.map((item) => (
        <div
          key={item.facilityId}
          className="flex items-center bg-white p-4 rounded-lg shadow mb-4"
        >
          <div className="flex-grow">
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p className="text-gray-600">{item.facilityType}</p>
            <p className="text-gray-600">{item.address}</p>
          </div>
          <button onClick={() => onClickBookmark(item.facilityId)}>
            <FaStar
              size={20}
              color={item.isBookmarked ? "#FFF500" : "#dfdfdf"}
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyFavoriteForm;
