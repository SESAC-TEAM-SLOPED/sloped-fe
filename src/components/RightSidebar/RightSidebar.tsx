import { getCookie } from "../../service/cookieUtils";
import StarIcon from "../icons/StarIcon";
import WarningIcon from "../icons/WarningIcon";

type Props = {
  onClickBookmarks: () => void;
  onClickRoads: () => void;
  visibleRoads: boolean;
  visibleBookmarks: boolean;
};

const BUTTON_STYLE =
  "rounded-full w-14 h-14 flex flex-col items-center justify-center shadow-xl border";

const RightSidebar = ({
  onClickBookmarks,
  onClickRoads,
  visibleRoads,
  visibleBookmarks,
}: Props) => {
  return (
    <div className="w-fit text-xs flex flex-col gap-3 absolute top-24 right-2">
      <button
        className={`${BUTTON_STYLE} ${visibleRoads ? "text-white bg-[#F8837C] border-[#F8837C]" : "bg-white "}`}
        onClick={onClickRoads}
      >
        <span>
          <WarningIcon active={visibleRoads} />
        </span>
        <span>불편지역</span>
      </button>
      {getCookie("accessToken") && (
        <button
          className={`${BUTTON_STYLE} ${visibleBookmarks ? "text-white bg-[#fff500] border-[#fff500]" : "bg-white"}`}
          onClick={onClickBookmarks}
        >
          <span>
            <StarIcon active={visibleBookmarks} />
          </span>
          <span>즐겨찾기</span>
        </button>
      )}
    </div>
  );
};

export default RightSidebar;
