import { useState } from "react";
import Map from "../../components/Map/Map";
import Navbar from "../../components/Navbar/Navbar";
import BottomSheet from "../../components/ui/BottomSheet";
import Container from "../../components/ui/Container";
import useGeoLocation from "../../hooks/geoLocation";
import { Facility } from "../../types/facility";
import { Road } from "../../types/road";
import FacilityInfo from "../../components/FacilityInfo/FacilityInfo";
import ModalPortal from "../../components/ui/ModalPortal";
import Modal from "../../components/ui/Modal";
import FacilityMarkers from "../../components/FacilityMarkers/FacilityMarkers";
import RoadMarkers from "../../components/RoadMarkers/RoadMarkers";
import BookmarkMarkers from "../../components/BookmarkMarkers/BookmarkMarkers";

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
  const [openRoadModal, setOpenRoadModal] = useState(false);
  const [clickedId, setClickedId] = useState<number>(0);
  const [map, setMap] = useState<any>();

  const openBottomSheet = () => {
    setBottomSheetOpen(true);
  };

  const closeBottomSheet = () => {
    setBottomSheetOpen(false);
  };

  const onClickMarkerForBottomSheet = (id: number) => {
    closeBottomSheet();
    setClickedId(id);
    openBottomSheet();
  };

  const onClickMarkerForModal = (id: number) => {
    closeBottomSheet();
    setClickedId(id);
    setOpenRoadModal(true);
  };

  return (
    <div
      onClick={(e) => {
        if (e.target instanceof HTMLCanvasElement) {
          closeBottomSheet();
          setClickedId(10);
        }
      }}
    >
      <Container hasHeader={false} hasNav={true}>
        <Map
          map={map}
          setMap={setMap}
          currentLocation={location}
          height="calc(100vh - 64px)"
          setClickedId={(id: number) => setClickedId(id)}
        >
          <FacilityMarkers
            map={map}
            clickedId={clickedId}
            facilities={facilities}
            onClick={onClickMarkerForBottomSheet}
          />
          <RoadMarkers
            map={map}
            clickedId={clickedId}
            roads={roads}
            onClick={onClickMarkerForModal}
          />
          <BookmarkMarkers
            map={map}
            clickedId={clickedId}
            bookmarks={bookmarks}
            onClick={onClickMarkerForBottomSheet}
          />
        </Map>
        <BottomSheet isOpen={isBottomSheetOpen} onClose={closeBottomSheet}>
          <FacilityInfo id={clickedId} />
        </BottomSheet>
        <Navbar />
      </Container>
      {openRoadModal && (
        <ModalPortal>
          <Modal onClose={() => setOpenRoadModal(false)}>
            <></>
          </Modal>
        </ModalPortal>
      )}
    </div>
  );
};

export default Main;
