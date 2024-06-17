import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import ArrowForwardIcon from "../icons/ArrowForwardIcon";

type Props = {
  photos: string[];
};

const ReviewPhotos = ({ photos }: Props) => {
  /* startIndex 상태를 사용하여 현재 보여지는 이미지의 시작 인덱스를 관리하고, 
  다음 버튼을 클릭할 때마다 startIndex를 3씩 증가. 
  이미지가 3개 이하일 경우, startIndex가 변경되지 않고 그대로 보여짐. 
  또한, 이미지가 없는 경우에도 photos.length > 3 조건을 이용하여 오른쪽 화살표 아이콘이 표시되지 않게 처리 */
  const [startIndex, setStartIndex] = useState(0);

  // 다음 버튼 클릭 시 처리
  const handleNextClick = () => {
    if (startIndex + 3 < photos.length) {
      setStartIndex(startIndex + 3);
    } else {
      setStartIndex(0);
    }
  };

  // 이전 버튼 클릭 시 처리
  const handlePrevClick = () => {
    if (startIndex - 3 >= 0) {
      setStartIndex(startIndex - 3);
    } else {
      // 마지막 페이지로 이동
      const lastPageStartIndex = Math.floor(photos.length / 3) * 3;
      setStartIndex(lastPageStartIndex);
    }
  };

  // 현재 페이지에 표시할 사진들
  const displayedPhotos = photos.slice(startIndex, startIndex + 3);

  return (
    <div className="flex items-center justify-between">
      <div
        className="flex items-center justify-center w-12 h-12 cursor-pointer ml-2"
        onClick={handlePrevClick}
      >
        <IoIosArrowBack color="#8D8D8D" size={25} />
      </div>
      <div className="flex gap-2 items-start w-full overflow-hidden">
        {displayedPhotos.map((photo, index) => (
          <div key={index} className="relative">
            <img
              src={photo}
              alt={`review-${index}`}
              className="w-40 h-40 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
      <div
        className="flex items-center justify-center w-12 h-12 cursor-pointer mr-2"
        onClick={handleNextClick}
      >
        <ArrowForwardIcon color="#8D8D8D" size={25} />
      </div>
    </div>
  );
};
export default ReviewPhotos;
