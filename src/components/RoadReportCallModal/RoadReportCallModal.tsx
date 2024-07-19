import { RoadReportCenter } from "../../types/roadReportCenter";

type Props = {
  complaintCallState: boolean;
  stateChangeFunc: (state: boolean) => void;
  centerListSetState: () => void;
  complaintCenter: RoadReportCenter;
};

const RoadReportCallModal = ({
  complaintCallState,
  complaintCenter,
  stateChangeFunc,
  centerListSetState,
}: Props) => {
  const handleCenterList = () => {
    stateChangeFunc(!complaintCallState);
    centerListSetState();
  };

  return (
    <div className="h-[220px] w-[300px]">
      <div className="relative h-[20px] mb-5">
        <p className="absolute top-2">통행 불편사항 민원</p>
      </div>
      <div>
        <p
          className="text-center font-bold text-2xl m-4 mt-7"
          style={{ color: "#3F51B5" }}
        >
          {complaintCenter && complaintCenter.centerName}
        </p>
      </div>
      <div className="mb-5">
        <p className="text-center">마커 위치를 기반으로</p>
        <p className="text-center">해당 지역의 민원기관을 연결합니다.</p>
      </div>
      <div className="text-center">
        <button
          className="p-0 w-[85px] h-[30px] left-118 top-453 rounded-lg mr-5"
          style={{ backgroundColor: "#F8837C", color: "white" }}
          onClick={() =>
            (window.location.href = `tel:${complaintCenter.centerContact}`)
          }
        >
          전화 연결
        </button>
        <button
          className="p-0 w-[85px] h-[30px] left-118 top-453 rounded-lg"
          style={{ backgroundColor: "#3F51B5", color: "white" }}
          onClick={handleCenterList}
        >
          기관 목록
        </button>
      </div>
    </div>
  );
};

export default RoadReportCallModal;
