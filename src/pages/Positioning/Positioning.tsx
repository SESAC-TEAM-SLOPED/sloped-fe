import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Map from "../../components/Map/Map";
import Container from "../../components/ui/Container";
import useGeoLocation from "../../hooks/geoLocation";
import { getAddressFromCoord } from "../../service/map";
import Button from "../../components/ui/Button";
import { useLocation, useNavigate } from "react-router-dom";

const Positioning = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { location } = useGeoLocation();
  const [address, setAddress] = useState("");
  const [center, setCenter] = useState<{ lat: number; lng: number }>();
  const [map, setMap] = useState();

  useEffect(() => {
    if (location && !center) {
      getAddressFromCoord({ lng: location.lng, lat: location.lat }).then(
        (addr) => setAddress(addr),
      );
    } else if (center) {
      getAddressFromCoord({ lng: center.lng, lat: center.lat }).then((addr) =>
        setAddress(addr),
      );
    }
  }, [center, location]);

  const handleNextClick = () => {
    if (pathname.includes("facility")) {
      // 시설 form 페이지 path 지정 필요
      navigate("/report/facility/new", {
        state: { location: center, address },
      });
    } else {
      navigate("/report/road/new", { state: { location: center, address } });
    }
  };

  return (
    <Container hasHeader={true} full={true}>
      <Header
        text={pathname.includes("facility") ? "시설 등록" : "통행 불편 제보"}
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
            {address ? address : "지도 범위를 벗어났습니다."}
          </p>
        </div>
        <Map
          map={map}
          setMap={setMap}
          currentLocation={location}
          height="70%"
          setAddress={setAddress}
          setCenter={setCenter}
        />
        <Button text="다음" onClick={handleNextClick} size="full" />
      </div>
    </Container>
  );
};

export default Positioning;
