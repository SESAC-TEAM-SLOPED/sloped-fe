import { Link } from "react-router-dom";
import { FacilityRecommended } from "../../types/facility";
import { useEffect, useRef } from "react";

type Props = {
  facility: FacilityRecommended;
  index: number;
  clickedId: number;
  onClick: (id: number, lng: number, lat: number) => void;
};

const FACILITY_TYPE: { [key: string]: string } = {
  RESTAURANT: "식당",
  CAFE: "카페",
  PUBLIC_SPACE: "공공장소",
  ETC: "기타",
};

const RecommendedFacility = ({
  facility,
  index,
  clickedId,
  onClick,
}: Props) => {
  const placeRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const placeId = placeRef.current?.getAttribute("id");

    if (clickedId.toString() === placeId) {
      placeRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [clickedId]);

  return (
    <li
      key={facility.id}
      className={`border px-5 py-4 rounded-md my-2 hover:bg-[#0000000c] ${clickedId === facility.id && "border-2 border-blue-400"}`}
      onClick={() =>
        onClick(facility.id, facility.longitude, facility.latitude)
      }
      ref={placeRef}
      id={facility.id.toString()}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <p className="rounded-full bg-blue-200 w-10 h-10 flex items-center justify-center">
            {index + 1}
          </p>
          <div>
            <div className="flex items-center gap-4">
              <p>{facility.name}</p>
              <p className="text-gray-600 text-sm">
                {FACILITY_TYPE[facility.type]}
              </p>
            </div>
            <p className="text-gray-600 text-sm mb-2">{facility.address}</p>
            <Link
              to={`/facility/details/${facility.id}`}
              className="text-gray-600 text-sm hover:underline"
            >
              상세 정보 보러가기
            </Link>
          </div>
        </div>
        {facility.imageUrl && (
          <div className="w-20 h-20 rounded-md">
            <img
              className="w-full h-full rounded-md"
              src={facility.imageUrl}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="mt-3 border-blue-200 border-2 px-4 py-3 rounded-md">
        <div className="flex items-center mb-3 gap-3">
          <p className="text-gray-600">접근성 점수</p>
          <p className="font-bold text-xl text-[#3F51B5]">
            {facility.averageAccessibilityScore
              ? facility.averageAccessibilityScore + "점"
              : "-점"}
          </p>
        </div>
        <p>{facility.accessibilityDescription}</p>
      </div>
    </li>
  );
};

export default RecommendedFacility;
