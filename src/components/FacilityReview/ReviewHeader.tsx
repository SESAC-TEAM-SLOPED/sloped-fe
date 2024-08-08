import { FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

type Props = {
  reviewCount: number;
  facilityName: string;
  facilityId: string;
};

const ReviewHeader = ({ reviewCount, facilityName, facilityId }: Props) => {
  return (
    <div className="flex justify-between items-center mt-4">
      <p className="text-[#404040] text-xl font-semibold">
        방문자 리뷰 <span className="text-[#8D8D8D]">{reviewCount}</span>
      </p>
      <Link
        to="/review/new"
        state={{ facilityName, facilityId }}
        className="flex items-center gap-2 cursor-pointer"
      >
        <FaPencilAlt color="#3F51B5" />
        <p>리뷰 작성하기</p>
      </Link>
    </div>
  );
};

export default ReviewHeader;
