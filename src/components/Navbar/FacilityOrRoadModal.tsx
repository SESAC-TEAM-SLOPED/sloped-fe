import { Link } from "react-router-dom";

const FacilityOrRoadModal = () => {
  return (
    <div>
      <p className="text-[#404040]">무엇을 제보하시겠어요?</p>
      <div className="w-full border flex justify-around rounded-md mt-7">
        <Link
          to="/facility/new/positioning"
          className="flex items-center justify-center w-1/2 border-r h-10 bg-blue-100"
        >
          시설
        </Link>
        <Link
          to="/road/new/positioning"
          className="flex items-center justify-center w-1/2 h-10 bg-red-100"
        >
          도로
        </Link>
      </div>
    </div>
  );
};

export default FacilityOrRoadModal;
