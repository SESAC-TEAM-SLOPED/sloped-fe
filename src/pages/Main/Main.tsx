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
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import RoadTroubleModal from "../../components/RoadTroubleModal/RoadTroubleModal";
import RoadReportCallModal from "../../components/RoadReportCallModal/RoadReportCallModal";
import RoadCenterListModal from "../../components/RoadCenterListModal/RoadCenterListModal";
import CallTaxiModal from "../../components/CallTaxiModal/CallTaxiModal";
import { RoadReportDetail } from "../../types/roadReportDetail";
import { RoadReportCenter } from "../../types/roadReportCenter";
import { RoadReportCallTaxi } from "../../types/RoadReportCallTaxi";

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
  const [roadReport, setRoadReport] = useState<RoadReportDetail>(Object);
  const [requestRoad, setRequestRoad] = useState<Road>(Object);
  const [roadReportCenter, setRoadReportCenter] =
    useState<RoadReportCenter>(Object);
  const [complaintCenterList, setComplaintCenterList] = useState<any[]>([]);
  const [callTaxi, setCallTaxi] = useState<RoadReportCallTaxi>(Object);

  /*
   1. isRoadOpen - 첫 번째 도로 모달
   2. isComplaintCallOpen - 두 번째 '민원' 클릭 시 모달
   3. isCenterListOpen - 민원> '기관목록' 클릭 시 모달
   4. iscallTaxiOpen - 두 번째 '콜택시' 클릭 시 모달
  */
  const [isRoadOpen, setIsRoadOpen] = useState(false);
  const [isComplaintCallOpen, setIsComplaintCallOpen] = useState(false);
  const [isCenterListOpen, setIsCenterListOpen] = useState(false);
  const [iscallTaxiOpen, setIscallTaxiOpen] = useState(false);

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
    const fetchRoadsData = async () => {
      try {
        const response = await axios.get<Road[]>(
          "http://localhost:8080/api/roads/get-points",
        );
        setRoads(response.data);
      } catch (error) {
        console.error("데이터를 불러오는 데 오류가 발생했습니다.:", error);
      }
    };

    visibleRoads && fetchRoadsData();
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

  const onClickMarkerForModal = async (id: number) => {
    closeBottomSheet();
    setClickedId(id);
    try {
      const roadResponse = await axios.get<Road>(
        `http://localhost:8080/api/roads/${id}`,
      );
      const roadData = roadResponse.data;
      setRequestRoad(roadData);

      const response = await axios.get(
        `http://localhost:8080/api/roadReport/info/${id}`,
      );
      setRoadReport(response.data);
      setIsRoadOpen(true);
    } catch (error) {
      console.error(
        "로드 상세 정보를 불러오는 데 오류가 발생했습니다. :",
        error,
      );
    }
  };

  // 도로 모달 > '민원' 클릭 시
  const handleRoadModalState = async () => {
    setIsRoadOpen(false);
    setIsComplaintCallOpen(true);
    if (requestRoad) {
      try {
        const response = await axios.post<RoadReportCenter>(
          "http://localhost:8080/api/roadReport/connect-center",
          requestRoad,
        );
        setRoadReportCenter(response.data);
      } catch (error) {
        console.error(
          "Error sending road data or fetching report centers:",
          error,
        );
      }
    }
  };

  // 기존 두 번째 민원 모달 닫기
  const handleComplaintCallModalState = () => {
    setIsComplaintCallOpen(false);
  };
  // 두번째 모달 - 기관 목록 클릭 시 기관목록 모달
  const handleCenterListModalState = async () => {
    setIsComplaintCallOpen(false);
    try {
      const response = await axios.get<RoadReportCenter[]>(
        "http://localhost:8080/api/roadReport/get-centerList",
      );
      setComplaintCenterList(response.data);
      setIsCenterListOpen(true);
    } catch (error) {
      console.error(
        "Error sending road data or fetching report centers:",
        error,
      );
    }
  };
  // 기존 도로 모달 닫고 택시 모달 open
  const handleCallTaxiModalState = async () => {
    setIsRoadOpen(false);
    setIscallTaxiOpen(true);
    if (requestRoad) {
      try {
        const response = await axios.post<RoadReportCallTaxi>(
          "http://localhost:8080/api/roadReport/connect-callTaxi",
          requestRoad,
        );
        setCallTaxi(response.data);
        console.log(callTaxi);
      } catch (error) {
        console.error(
          "Error sending road data or fetching report centers:",
          error,
        );
      }
    }
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
      {/* 1. 통행 불편 모달 open */}
      {isRoadOpen && (
        <ModalPortal>
          <Modal
            onClose={() => setIsRoadOpen(false)}
            height="620px"
            width="450px"
          >
            <RoadTroubleModal
              roadReport={roadReport}
              callTaxiModalFunc={handleCallTaxiModalState}
              stateChangeFunc={handleRoadModalState}
            />
          </Modal>
        </ModalPortal>
      )}
      {/* 2. 민원 모달 open */}
      {isComplaintCallOpen && (
        <ModalPortal>
          <Modal
            onClose={() => setIsComplaintCallOpen(false)}
            height="250px"
            width="350px"
          >
            <RoadReportCallModal
              complaintCenter={roadReportCenter}
              complaintCallState={isComplaintCallOpen}
              stateChangeFunc={handleComplaintCallModalState}
              centerListSetState={handleCenterListModalState}
            ></RoadReportCallModal>
          </Modal>
        </ModalPortal>
      )}
      {/* 3. 기관목록 모달 open */}
      {isCenterListOpen && (
        <ModalPortal>
          <Modal
            height="600px"
            width="420px"
            onClose={() => setIsCenterListOpen(false)}
          >
            <RoadCenterListModal
              centerList={complaintCenterList}
              centerListState={isCenterListOpen}
              stateChangeFunc={handleCenterListModalState}
            ></RoadCenterListModal>
          </Modal>
        </ModalPortal>
      )}
      {/* 4. 콜택시 모달 open */}
      {iscallTaxiOpen && (
        <ModalPortal>
          <Modal
            width="380px"
            height="220px"
            onClose={() => setIscallTaxiOpen(false)}
          >
            <CallTaxiModal callTaxi={callTaxi}></CallTaxiModal>
          </Modal>
        </ModalPortal>
      )}
    </>
  );
};

export default Main;
