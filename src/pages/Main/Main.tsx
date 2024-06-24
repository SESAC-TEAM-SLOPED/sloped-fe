import { useEffect, useState } from "react";
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
import Categories from "../../components/Categories/Categories";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import RoadTroubleModal from "../../components/RoadTroubleModal/RoadTroubleModal";
import RoadReportCallModal from "../../components/RoadReportCallModal/RoadReportCallModal";
import RoadCenterListModal from "../../components/RoadCenterListModal/RoadCenterListModal";
import CallTaxiModal from "../../components/CallTaxiModal/CallTaxiModal";

const facilitiesData: Facility[] = [
  {
    id: 1,
    latitude: 37.517799,
    longitude: 126.886949,
    type: "hospital",
    address: "",
  },
  {
    id: 2,
    latitude: 37.517393,
    longitude: 126.886155,
    type: "cafe",
    address: "",
  },
  {
    id: 3,
    latitude: 37.51703,
    longitude: 126.88811,
    type: "tour",
    address: "",
  },
  {
    id: 4,
    latitude: 37.51395,
    longitude: 127.102234,
    type: "tour",
    address: "",
  },
];

const roadsData: Road[] = [
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
  {
    id: 7,
    latitude: 37.272033,
    longitude: 127.124855,
  },
];

const bookmarksData: Facility[] = [
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
  const [searchParams, setSearchParams] = useSearchParams();
  const [facilities, setFacilities] = useState<Facility[]>([]);
  const [bookmarks, setBookmarks] = useState<any[]>([]);
  const [visibleBookmarks, setVisibleBookmarks] = useState(false);
  const [roads, setRoads] = useState<any[]>([]);
  const [visibleRoads, setVisibleRoads] = useState(false);
  const [openRoadModal, setOpenRoadModal] = useState(false);
  const [isComplaintCallModalOpen, setIsComplaintCallModalOpen] =
    useState(false);
  const [centerListModalOpen, setCenterListModalOpen] = useState(false);
  const [callTaxiModalOpen, setCallTaxiModalOpen] = useState(false);

  useEffect(() => {
    searchParams.get("id") && setBottomSheetOpen(true);
  }, [searchParams]);

  useEffect(() => {
    // 즐겨찾기를 받아오는 로직
    //const data = await axios.get()
    visibleBookmarks && setBookmarks(bookmarksData);
  }, [visibleBookmarks]);

  useEffect(() => {
    // 불편 지역을 받아오는 로직
    visibleRoads && setRoads(roadsData);
  }, [visibleRoads]);

  useEffect(() => {
    const getByCategory = async () => {
      // 카테고리별로 장소를 받아오는 로직
      const currentCategory = searchParams.get("category");

      //const data = await axios.get("");
      //return data;

      const data = facilitiesData.filter(
        (data) =>
          (data.type === currentCategory || currentCategory === "all") &&
          !bookmarks.some(
            (bookmark) => visibleBookmarks && bookmark.id === data.id,
          ),
      );
      setFacilities(data);
    };

    getByCategory();
  }, [bookmarks, searchParams, visibleBookmarks]);

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

  const handleModalStateChange = () => {
    setOpenRoadModal(false);
    setIsComplaintCallModalOpen(true);
  };

  const handleComplaintCallModalStateChange = (state: boolean) => {
    setIsComplaintCallModalOpen(false);
  };

  const handleCallTaxiModalChange = () => {
    setOpenRoadModal(false);
    setCallTaxiModalOpen(true);
  };

  return (
    <>
      <Container hasHeader={false} hasNav={true}>
        <div
          className="relative"
          onClick={(e) => {
            if (e.target instanceof HTMLCanvasElement) {
              closeBottomSheet();
              setClickedId(10);
              setSearchParams({ category: searchParams.get("category") || "" });
            }
          }}
        >
          <div className="absolute z-10 flex flex-col gap-3 px-3 pt-3 w-full select-none">
            <SearchBar />
            <Categories
              onClick={() => {
                closeBottomSheet();
                setClickedId(10);
              }}
            />
            <RightSidebar
              visibleBookmarks={visibleBookmarks}
              visibleRoads={visibleRoads}
              onClickRoads={() => setVisibleRoads(!visibleRoads)}
              onClickBookmarks={() => setVisibleBookmarks(!visibleBookmarks)}
            />
          </div>
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
            {visibleRoads && (
              <RoadMarkers
                map={map}
                clickedId={clickedId}
                roads={roads}
                onClick={onClickMarkerForModal}
              />
            )}
            {visibleBookmarks && (
              <BookmarkMarkers
                map={map}
                clickedId={clickedId}
                bookmarks={bookmarks}
                onClick={onClickMarkerForBottomSheet}
              />
            )}
          </Map>
          {searchParams.get("id") && (
            <BottomSheet isOpen={isBottomSheetOpen} onClose={closeBottomSheet}>
              <FacilityInfo id={Number(searchParams.get("id"))} />
            </BottomSheet>
          )}
          <Navbar />
        </div>
      </Container>
      {openRoadModal && (
        <ModalPortal>
          <Modal
            onClose={() => setOpenRoadModal(false)}
            height="620px"
            width="450px"
          >
            <RoadTroubleModal
              callTaxiModalHandle={handleCallTaxiModalChange}
              stateChange={handleModalStateChange}
            />
          </Modal>
        </ModalPortal>
      )}
      {isComplaintCallModalOpen && (
        <ModalPortal>
          <Modal
            onClose={() => setIsComplaintCallModalOpen(false)}
            height="250px"
            width="350px"
          >
            <RoadReportCallModal
              isComplaintCallModalOpen={isComplaintCallModalOpen}
              stateChange={handleComplaintCallModalStateChange}
              openCenterListModal={() => setCenterListModalOpen(true)}
            ></RoadReportCallModal>
          </Modal>
        </ModalPortal>
      )}
      {centerListModalOpen && (
        <ModalPortal>
          <Modal
            height="600px"
            width="420px"
            onClose={() => setCenterListModalOpen(false)}
          >
            <RoadCenterListModal></RoadCenterListModal>
          </Modal>
        </ModalPortal>
      )}
      {callTaxiModalOpen && (
        <ModalPortal>
          <Modal width="280px" onClose={() => setCallTaxiModalOpen(false)}>
            <CallTaxiModal></CallTaxiModal>
          </Modal>
        </ModalPortal>
      )}
    </>
  );
};

export default Main;
