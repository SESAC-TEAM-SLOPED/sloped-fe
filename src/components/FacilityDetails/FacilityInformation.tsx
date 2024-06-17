import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";

type FacilityInformationProps = {
  address: string;
  contact: string;
  businessHours: { [day: string]: string }; // 요일별 영업시간 정보를 받도록
};

const FacilityInformation = ({
  address,
  contact,
  businessHours,
}: FacilityInformationProps) => {
  const daysOfWeek = [
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
    "일요일",
  ];

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <FaMapMarkerAlt color="#404040" size={20} />
        <p>{address}</p>
      </div>
      <div className="flex items-center gap-2">
        <FaPhone color="#404040" size={20} />
        <p>{contact}</p>
      </div>
      <div className="flex flex-col">
        {Object.keys(businessHours).map((day, index) => (
          <div key={index} className="flex items-center gap-2">
            {index === 0 ? (
              <FaClock color="#404040" size={20} />
            ) : (
              <div className="w-[20px]" />
            )}
            <p>
              {daysOfWeek[index]}: {businessHours[day]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacilityInformation;
