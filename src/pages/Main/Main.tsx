import { useState } from "react";
import Map from "../../components/Map/Map";
import Navbar from "../../components/Navbar/Navbar";
import BottomSheet from "../../components/ui/BottomSheet";
import Container from "../../components/ui/Container";
import useGeoLocation from "../../hooks/geoLocation";
import { Facility } from "../../types/facility";
import { Road } from "../../types/road";
import FacilityInfo from "../../components/FacilityInfo/FacilityInfo";
import Marker from "../../components/Map/Marker";

const facilities: Facility[] = [
  {
    id: 1,
    latitude: 37.517799,
    longitude: 126.886949,
    type: "병원",
    address: "",
  },
  {
    id: 2,
    latitude: 37.517393,
    longitude: 126.886155,
    type: "카페",
    address: "",
  },
  {
    id: 3,
    latitude: 37.51703,
    longitude: 126.88811,
    type: "관광지",
    address: "",
  },
];

const roads: Road[] = [
  {
    id: 4,
    latitude: 37.51739,
    longitude: 126.886949,
  },
  {
    id: 5,
    latitude: 37.51739,
    longitude: 126.88613,
  },
  {
    id: 6,
    latitude: 37.5172,
    longitude: 126.88801,
  },
];

const bookmarks: Facility[] = [
  {
    id: 1,
    latitude: 37.517799,
    longitude: 126.886949,
    type: "병원",
    address: "",
  },
];

const Main = () => {
  const { location } = useGeoLocation();
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [clickedId, setClickedId] = useState<number>(0);
  const [map, setMap] = useState<any>();

  const openBottomSheet = () => {
    setBottomSheetOpen(true);
  };

  const closeBottomSheet = () => {
    setBottomSheetOpen(false);
  };

  return (
    <div
      onClick={(e) => {
        if (e.target instanceof HTMLCanvasElement) {
          closeBottomSheet();
        }
      }}
    >
      <Container hasHeader={false} hasNav={true}>
        <div
          onClick={(e) => {
            if (e.target instanceof HTMLCanvasElement && setClickedId) {
              setClickedId(10);
            }
          }}
        >
          <Map
            map={map}
            setMap={setMap}
            currentLocation={location}
            height="calc(100vh - 64px)"
            setClickedId={(id: number) => setClickedId(id)}
          >
            {facilities.map((location) => (
              <Marker
                key={location.id}
                map={map}
                lat={location.latitude}
                lng={location.longitude}
                icon="pin"
                clickedId={clickedId}
                id={location.id}
                onClick={() => {
                  closeBottomSheet();
                  setClickedId(location.id);
                  openBottomSheet && openBottomSheet();
                }}
              />
            ))}
            {roads.map((location) => (
              <Marker
                key={location.id}
                map={map}
                lat={location.latitude}
                lng={location.longitude}
                icon="warning"
                clickedId={clickedId}
                id={location.id}
                onClick={() => {
                  closeBottomSheet();
                  setClickedId(location.id);
                }}
              />
            ))}
            {bookmarks.map((location) => (
              <Marker
                key={location.id}
                map={map}
                lat={location.latitude}
                lng={location.longitude}
                icon="star"
                clickedId={clickedId}
                id={location.id}
                onClick={() => {
                  setClickedId(location.id);
                  openBottomSheet && openBottomSheet();
                }}
              />
            ))}
          </Map>
        </div>
        <BottomSheet isOpen={isBottomSheetOpen} onClose={closeBottomSheet}>
          <FacilityInfo id={clickedId} />
        </BottomSheet>
        <Navbar />
      </Container>
    </div>
  );
};

export default Main;
