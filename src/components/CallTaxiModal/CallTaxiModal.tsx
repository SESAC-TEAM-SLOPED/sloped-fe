const CallTaxiModal = () => {
  const phoneNumber = "1588-4388";

  return (
    <div>
      <div className="mb-5 pt-3">
        <p className="text-center">현재 위치한 지역을 기반으로</p>
        <p className="text-center">
          <span
            className="text-center font-bold text-lg"
            style={{ color: "#3F51B5" }}
          >
            장애인 콜택시
          </span>
          를 호출합니다.
        </p>
      </div>
      <div className="text-center">
        <a href={`tel:${phoneNumber}`}>
          <button
            className="w-[82px] h-[30px] rounded-lg shadow-md"
            style={{ backgroundColor: "#F8837C", color: "white" }}
          >
            전화연결
          </button>
        </a>
      </div>
    </div>
  );
};

export default CallTaxiModal;
