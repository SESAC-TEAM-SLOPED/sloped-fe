import { RoadReportCallTaxi } from "../../types/RoadReportCallTaxi";

type Props = {
  callTaxi: RoadReportCallTaxi;
};
const CallTaxiModal = ({ callTaxi }: Props) => {
  const phoneNumber = callTaxi.callTaxiContact;
  const canOnlineReserve = callTaxi.canOnlineReserve;
  const homePage = callTaxi.homePage;

  const getButtonText = () => {
    if (canOnlineReserve && homePage) {
      return "온라인 예약";
    } else if (homePage) {
      return "홈페이지";
    }
    return null;
  };

  const buttonText = getButtonText();
  return (
    <div
      className="h-[180px] w-[360px]"
      // style={{ backgroundColor: "yellowgreen" }}
    >
      {/* <div className="relative">
        <span className="absolute bottom-1 text-sm bottom-6">
          장애인 콜택시 연결
        </span>
      </div> */}
      <div className="mb-2 pt-5">
        <p className="text-center">마커에 위치한 지역을 기반으로</p>
        <p className="text-center">장애인 콜택시를 연결합니다.</p>
        <div
          className="flex items-center justify-center text-center font-bold text-lg h-[60px]"
          style={{ color: "#3F51B5" }}
        >
          {callTaxi.callTaxiName}
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <a href={`tel:${phoneNumber}`}>
          <button
            className="w-[100px] h-[35px] rounded-lg"
            style={{ backgroundColor: "#F8837C", color: "white" }}
          >
            전화 예약
          </button>
        </a>
        {buttonText && homePage && (
          <a href={homePage} target="_blank" rel="noopener noreferrer">
            <button
              className="w-[100px] h-[35px] rounded-lg"
              style={{ backgroundColor: "#4CAF50", color: "white" }}
            >
              {buttonText}
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default CallTaxiModal;
