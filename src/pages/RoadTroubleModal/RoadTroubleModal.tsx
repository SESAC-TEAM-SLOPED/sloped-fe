import { RiSpeakFill } from "react-icons/ri";
import { FaTaxi } from "react-icons/fa";

type Props = {
  isRoadModalOpen: boolean;
  stateChange: (state: boolean) => void;
};

const RoadTroubleModal = ({ isRoadModalOpen, stateChange }: Props) => {
  const handleClick = () => {
    stateChange(!isRoadModalOpen);
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
          <button
            onClick={handleClick}
            className="flex items-center justify-center flex-col mr-1"
          >
            <RiSpeakFill size={20} color="#404040" />
            <span>민원</span>
          </button>
          <button className="flex items-center justify-center flex-col">
            <FaTaxi size={20} color="#404040" />
            <span>콜택시</span>
          </button>
        </ul>
      </div>
    </div>
  );
};
export default RoadTroubleModal;
