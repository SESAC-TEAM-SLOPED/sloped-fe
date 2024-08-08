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
}

const MyFavoriteForm = () => {
  const [favoriteData, setFavoriteData] = useState<FavoriteItem[]>([]);
  const [isBookmarked, setIsBookmarked] = useState(true);

  useEffect(() => {
    const fetchFavoriteData = async () => {
      try {
        const response = await axiosInstance.get("/api/users/bookmark");
        setFavoriteData(response.data);
      } catch (error) {
        console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
      }
    };

    fetchFavoriteData();
  }, []);

  const onClickBookmark = (id: number) => {
    setIsBookmarked(!isBookmarked);
    const addBookmark = async () => {
      await axiosInstance.post(`${serverUrl}/api/users/bookmark`, {
        facilityId: id,
      });
    };

    const removeBookmark = async () => {
      await axiosInstance.delete(
        `${serverUrl}/api/users/bookmark?facilityId=${id}`,
      );
    };

    !isBookmarked ? addBookmark() : removeBookmark();
  };

  const removeFavorite = async (facilityId: number) => {
    try {
      const response = await axiosInstance.delete(
        `/api/users/bookmark?facilityId=${facilityId}`,
      );
      if (response.status === 204) {
        // 삭제가 성공하면, 즐겨찾기 데이터를 다시 가져와서 업데이트
        const fetchResponse = await axiosInstance.get("/api/users/bookmark/");
        setFavoriteData(fetchResponse.data);
      }
    } catch (error) {
      console.error("즐겨찾기를 삭제하는 중 오류가 발생했습니다:", error);
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
            <FaStar size={20} color={isBookmarked ? "#FFF500" : "#dfdfdf"} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyFavoriteForm;
