const RoadCenterListModal = () => {
  // 임시 데이터
  const centerData = [
    {
      id: 1,
      name: "서울지방국토관리청",
      tel: "02-2110-0691",
    },
    {
      id: 2,
      name: "수원국토관리사무소",
      tel: "031-283-0648",
    },
    {
      id: 3,
      name: "의정부국토관리사무소",
      tel: "031-847-7680",
    },
    {
      id: 4,
      name: "원주지방국토관리청",
      tel: "033-746-6785",
    },
    {
      id: 5,
      name: "홍천국토관리사무소",
      tel: "033-435-5982",
    },
    {
      id: 6,
      name: "강릉국토관리사무소",
      tel: "033-650-8833",
    },
    {
      id: 7,
      name: "홍천국토관리사무소",
      tel: "033-435-5982",
    },
    {
      id: 8,
      name: "정선국토관리사무소",
      tel: "033-563-6767",
    },
    {
      id: 9,
      name: "강릉국토관리사무소",
      tel: "033-563-0757",
    },
    {
      id: 10,
      name: "대전지방국토관리사무소",
      tel: "042-670-3485",
    },
    {
      id: 11,
      name: "전주지방국토관리사무소",
      tel: "042-670-3485",
    },
    {
      id: 12,
      name: "전주지방국토관리사무소",
      tel: "042-670-3485",
    },
  ];

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
        {centerData.map((center) => (
          <button
            key={center.id}
            className={`relative block w-full mb-3 h-[30px] flex items-center justify-center rounded-xl ${center.id % 2 === 0 ? "bg-blue-200" : "bg-green-200"}`}
            style={{
              backgroundColor: center.id % 2 === 0 ? "#EAEAEA" : "#C5CBE9",
            }}
          >
            <p className="absolute left-2 mx-2 text-left">{center.name}</p>
            <p className="absolute right-2 mx-2 text-right">{center.tel}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RoadCenterListModal;
