import { RiSpeakFill } from "react-icons/ri";
import { FaTaxi } from "react-icons/fa";
import ImageContentSlide from "../ImageContentSlide/ImageContentSlide";

type Props = {
  isRoadModalOpen: boolean;
  stateChange: (state: boolean) => void;
};

const RoadTroubleModal = ({ isRoadModalOpen, stateChange }: Props) => {
  const handleClick = () => {
    // isRoadModalOpen : true
    stateChange(!isRoadModalOpen);
  };
  const handleCallTaxiClick = () => {};

  return (
    <div className="max-w-[380px]">
      <div className="w-[380px] h-[360px]">
        <ImageContentSlide></ImageContentSlide>
      </div>
      <div className="h-[130px] pt-5 mb-3">
        횡단보도 앞쪽 볼라드 설치가 무너져있습니다. 또, 공사 현장 및 도로 파손이
        있어 통행에 위험을 겪고 있습니다. 공사 기간은 2025.06월까지라고 합니다.
      </div>
      <div className="h-[50px] flex items-center">
        <p className="flex space-x-4">
          <button
            onClick={handleClick}
            className="flex items-center justify-center flex-col mr-1"
          >
            <RiSpeakFill size={20} color="#404040" />
            <span>민원</span>
          </button>
          <button className="flex items-center justify-center flex-col">
            <FaTaxi size={20} color="#404040" />
            <span onClick={handleCallTaxiClick}>콜택시</span>
          </button>
        </p>
      </div>
    </div>
  );
};
export default RoadTroubleModal;
