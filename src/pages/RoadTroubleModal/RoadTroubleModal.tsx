import { RiSpeakFill } from "react-icons/ri";
import { FaTaxi } from "react-icons/fa";
import { useEffect, useState } from "react";

type Props = {
  isRoadModalOpen?: boolean;
  stateChange?: (state: boolean) => void;
};

const RoadTroubleModal = ({ isRoadModalOpen, stateChange }: Props) => {
  const handleClick = () => {
    stateChange && stateChange(!isRoadModalOpen);
  };

  return (
    <div className="max-w-[300px]">
      <div>
        <img
          src="https://cdn.newshyu.com/news/photo/202008/896043_29025_1207.png"
          className="w-[300px] h-[230px]"
        />
      </div>
      <div className="h-[100px] pt-6 mb-6">
        도로가 가파르며, 경사 6도 이상입니다. 도로가 가파르며 경사 6도
        이상입니다. 도로가 가파르며, 경사 6도 이상입니다.
      </div>
      <div className="h-[50px] flex items-center">
        <ul className="flex space-x-4">
          <li onClick={handleClick} className="items-center flex-col mr-1">
            <p className="ml-2 m-1">
              <RiSpeakFill size={20} color="#404040" />
            </p>
            <p>민원</p>
          </li>
          <li className="items-center flex-col">
            <p className="ml-3 m-1">
              <FaTaxi size={20} color="#404040" />
            </p>
            <p>콜택시</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default RoadTroubleModal;
