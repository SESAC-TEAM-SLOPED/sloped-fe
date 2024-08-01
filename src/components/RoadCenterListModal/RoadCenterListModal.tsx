import { RoadReportCenter } from "../../types/roadReportCenter";

type Props = {
  centerListState: boolean;
  stateChangeFunc: () => void;
  centerList: RoadReportCenter[];
};

const RoadCenterListModal = ({
  centerList,
  centerListState,
  stateChangeFunc,
}: Props) => {
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="w-[350px]">
      <div className="relative">
        <p className="absolute bottom-1 text-lg">통행 불편사항 민원 기관</p>
      </div>
      <div className="flex justify-center mt-4 mb-5 m-3">
        <button
          className="mr-2 h-[40px] w-[150px] flex items-center justify-center bg-yellow-200 rounded-xl"
          onClick={() =>
            handleClick("https://www.safetyreport.go.kr/#safereport/safereport")
          }
        >
          <img src="/img/safetyreport_logo.png" className="p-3"></img>
        </button>
        <button
          className="p-2 h-[40px] w-[240px] flex items-center justify-center rounded-xl"
          onClick={() =>
            handleClick("https://smartreport.seoul.go.kr/w100/index.do")
          }
          style={{ backgroundColor: "rgba(0, 166, 159, 0.8)", color: "white" }}
        >
          <img
            src="/img/seoul_logo.png"
            className="max-w-full max-h-full mr-[1px]"
          ></img>
          서울 스마트 불편신고
        </button>
      </div>
      <div className="overflow-auto" style={{ maxHeight: "430px" }}>
        {centerList &&
          centerList.map((center) => (
            <button
              key={center.id}
              className={`relative block w-full mb-4 h-[35px] flex items-center rounded-xl ${center.id % 2 === 0 ? "bg-blue-200" : "bg-green-200"} hover:text-black hover:font-bold transition-all duration-200`}
              style={{
                backgroundColor: center.id % 2 === 0 ? "#EAEAEA" : "#C5CBE9",
              }}
              onClick={() =>
                (window.location.href = `tel:${center.centerContact}`)
              }
            >
              <p className="absolute left-3">{center.centerName}</p>
              <p className="absolute right-3">{center.centerContact}</p>
            </button>
          ))}
      </div>
    </div>
  );
};

export default RoadCenterListModal;
