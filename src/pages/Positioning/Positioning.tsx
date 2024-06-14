import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Map from "../../components/Map/Map";
import Container from "../../components/ui/Container";
import useGeoLocation from "../../hooks/geoLocation";
import { getAddressFromCoord } from "../../service/map";
import Button from "../../components/ui/Button";
import { useLocation, useNavigate } from "react-router-dom";

const Positioning = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { location } = useGeoLocation();
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (location) {
      getAddressFromCoord({ lng: location.lng, lat: location.lat }).then(
        (addr) => setAddress(addr),
      );
    }
  }, [location]);

  const handleNextClick = () => {
    if (pathname.includes("facility")) {
      // 시설 form 페이지 path 지정 필요
      navigate("/report/facility/form", { state: { location, address } });
    } else {
      navigate("/report/road/form", { state: { location, address } });
    }
  };

  return (
    <Container hasHeader={true} full={true}>
      <Header
        text={pathname.includes("facility") ? "시설 등록" : "불편 도로 제보"}
      />
      <div
        style={{ height: "calc(100vh - 70px)" }}
        className="px-10 flex flex-col gap-6"
      >
        <div className="w-full bg-white pt-6">
          <p className="text-[#404040] font-bold text-xl mb-6">
            주소가 이곳이 맞나요?
          </p>
          <p className="h-12 text-[#515151] bg-[#E4E8FF] rounded-md flex items-center justify-center">
            {address}
          </p>
        </div>

        <Map location={location} height="70%" setAddress={setAddress} />
        <Button text="다음" onClick={handleNextClick} size="full" />
      </div>
    </Container>
  );
};

export default Positioning;
