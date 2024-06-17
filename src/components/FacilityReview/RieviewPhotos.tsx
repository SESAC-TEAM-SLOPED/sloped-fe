import React, { useState } from "react";
import RightArrowIcon from "../icons/RightArrowIcon";

type Props = {
  photos: string[];
};

const ReviewPhotos = ({ photos }: Props) => {
  /* startIndex 상태를 사용하여 현재 보여지는 이미지의 시작 인덱스를 관리하고, 
  다음 버튼을 클릭할 때마다 startIndex를 3씩 증가. 
  이미지가 3개 이하일 경우, startIndex가 변경되지 않고 그대로 보여짐. 
  또한, 이미지가 없는 경우에도 photos.length > 3 조건을 이용하여 오른쪽 화살표 아이콘이 표시되지 않게 처리 */
  const [startIndex, setStartIndex] = useState(0);

  const handleNextClick = () => {
    if (startIndex + 3 < photos.length) {
      setStartIndex(startIndex + 3);
    } else {
      setStartIndex(0);
    }
  };

  const displayedPhotos = photos.slice(startIndex, startIndex + 3);

  return (
    <div className="flex gap-2 mt-1">
      {displayedPhotos.map((photo, index) => (
        <img
          key={index}
          src={photo}
          alt={`review-${index}`}
          className="w-40 h-40 object-cover rounded-lg"
        />
      ))}
      {photos.length > 3 && (
        <div
          className="flex items-center justify-center w-40 h-40 text-[#404040]"
          onClick={handleNextClick}
        >
          <RightArrowIcon color="#8D8D8D" size={18} />
        </div>
      )}
    </div>
  );
};

export default ReviewPhotos;
