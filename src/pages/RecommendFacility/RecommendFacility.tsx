import { Link, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Container from "../../components/ui/Container";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useRef, useState } from "react";
import useGeoLocation from "../../hooks/geoLocation";
import Map from "../../components/Map/Map";
import FacilityMarkers from "../../components/FacilityMarkers/FacilityMarkers";
import axios from "axios";
import { FacilityRecommended } from "../../types/facility";
import FacilityCategory from "../../components/FacilityDetails/FacilityCategory";
import RecommendedFacility from "../../components/RecommendedFacility/RecommendedFacility";

const RecommendFacility = () => {
  const { pathname } = useLocation();
  const { location: currentLocation } = useGeoLocation(); // 현재 위치 가져오기
  const [clickedId, setClickedId] = useState<number>(0);
  const [facilities, setFacilities] = useState<FacilityRecommended[]>([]);
  const [clickedLocation, setClickedLocation] = useState<{
    lat: number;
    lng: number;
  }>();

  const [map, setMap] = useState();

  useEffect(() => {
    const getFacilities = async () => {
      const { data } = await axios.get(
        `http://localhost:8080/api/facilities/recommendation?latitude=${currentLocation?.lat}&longitude=${currentLocation?.lng}&distance_meters=100`,
      );

      setFacilities(data);
    };

    currentLocation && getFacilities();
  }, [currentLocation]);

  const onClickMarker = (id: number) => {
    setClickedId(id);
  };

  console.log(clickedId);

  const onClickLi = (id: number, lng: number, lat: number) => {
    setClickedId(id);
    setClickedLocation({ lat, lng });
  };

  return (
    <Container hasHeader={true} hasNav={true}>
      <Header text="시설 추천" />
      <div className="h-[500px] w-full max-w-2xl mx-auto">
        <Map
          map={map}
          setMap={setMap}
          height="100%"
          location={clickedLocation}
          currentLocation={currentLocation} // 현재 위치 전달
        >
          <FacilityMarkers
            map={map}
            clickedId={clickedId}
            facilities={facilities}
            onClick={onClickMarker}
          />
        </Map>
      </div>
      <div>
        <ul className="h-[500px] overflow-auto mt-3">
          {facilities.map((facility, index) => (
            <RecommendedFacility
              facility={facility}
              key={facility.id}
              index={index}
              clickedId={clickedId}
              onClick={onClickLi}
            />
          ))}
        </ul>
      </div>
      <Navbar />
    </Container>
  );
};

export default RecommendFacility;
