import Map from "../../components/Map/Map";
import Navbar from "../../components/Navbar/Navbar";
import Container from "../../components/ui/Container";
import useGeoLocation from "../../hooks/geoLocation";
import { Facility } from "../../types/facility";
import { Road } from "../../types/road";

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

  return (
    <Container hasHeader={false} hasNav={true}>
      <Map
        currentLocation={location}
        height="calc(100vh - 64px)"
        facilities={facilities}
        roads={roads}
        bookmarks={bookmarks}
      />
      <Navbar />
    </Container>
  );
};

export default Main;
