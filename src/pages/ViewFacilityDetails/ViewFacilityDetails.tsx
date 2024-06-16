import Header from "../../components/Header/Header";
import Map from "../../components/Map/Map";
import Container from "../../components/ui/Container";
import useGeoLocation from "../../hooks/geoLocation";
import FacilityCategory from "../../components/FacilityDetails/FacilityCategory";
import FacilityName from "../../components/FacilityDetails/FacilityName";
import FacilityIconsWrapper from "../../components/FacilityDetails/FacilityIconsWrapper";
import FacilityInformation from "../../components/FacilityDetails/FacilityInformation";
import ReportIcon from "../../components/icons/ReportIcon";
import { Link } from "react-router-dom";

const ViewFacilityDetails = () => {
  const { location } = useGeoLocation();

  // 임의로 시설 데이터 지정
  const facility = {
    name: "컴포즈커피 문래skv1점",
    category: "카페",
    hasSlope: true,
    isEntranceBarrier: true,
    hasElevator: true,
    address: "서울특별시 영등포구 문래동 3가 55-20",
    contact: "02-123-4567",
    businessHours: {
      Monday: "08:00 - 22:00",
      Tuesday: "08:00 - 22:00",
      Wednesday: "08:00 - 22:00",
      Thursday: "08:00 - 22:00",
      Friday: "08:00 - 22:00",
      Saturday: "10:00 - 18:00",
      Sunday: "10:00 - 18:00",
    },
  };

  return (
    <Container hasHeader={true} full={true}>
      <Header text="시설 정보" closeButton={true} />
      <div
        style={{ height: "calc(100vh - 70px)" }}
        className="px-10 flex flex-col gap-6"
      >
        <Map location={location} height="50%" />
        <div className="flex items-center gap-4 h-3">
          <FacilityName name={facility.name} />
          <FacilityCategory category={facility.category} />
        </div>
        <FacilityIconsWrapper
          hasSlope={facility.hasSlope}
          isEntranceBarrier={facility.isEntranceBarrier}
          hasElevator={facility.hasElevator}
        />
        <FacilityInformation
          address={facility.address}
          contact={facility.contact}
          businessHours={facility.businessHours}
        />
        <div className="flex justify-end items-center gap-1 mt-4">
          {/* 틀린 정보 제보 페이지가 아직 없어서 우선은 메인 페이지로 경로 설정 */}
          <Link to="/" className="flex items-center gap-1">
            <ReportIcon />
            <span
              style={{ color: "#F8837C", borderBottom: "1px solid #F8837C" }}
            >
              틀린 정보 제보
            </span>
          </Link>
        </div>
      </div>
    </Container>
  );
};
export default ViewFacilityDetails;
