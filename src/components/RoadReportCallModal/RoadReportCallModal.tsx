type Props = {
  complaintCallState: boolean;
  stateChangeFunc: (state: boolean) => void;
  centerListSetState: () => void;
};

const RoadReportCallModal = ({
  complaintCallState,
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
          서울지방국토관리청
        </p>
      </div>
      <div className="mb-5">
        <p className="text-center">현재 위치를 기반으로</p>
        <p className="text-center">해당 지역의 기관에 연결합니다.</p>
      </div>
      <div className="text-center">
        <button
          className="p-0 w-[82px] h-[30px] left-118 top-453 rounded-lg shadow-md mr-6"
          style={{ backgroundColor: "#F8837C", color: "white" }}
        >
          전화연결
        </button>
        <button
          className="p-0 w-[82px] h-[30px] left-118 top-453 rounded-lg shadow-md"
          style={{ backgroundColor: "#3F51B5", color: "white" }}
          onClick={handleCenterList}
        >
          기관목록
        </button>
      </div>
    </div>
  );
};

export default RoadReportCallModal;
