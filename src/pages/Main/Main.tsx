import Map from "../../components/Map/Map";
import Navbar from "../../components/Navbar/Navbar";
import Container from "../../components/ui/Container";
import useGeoLocation from "../../hooks/geoLocation";
import { Facility } from "../../types/facility";

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

const Main = () => {
  const { location } = useGeoLocation();

  return (
    <Container hasHeader={false} hasNav={true}>
      <Map
        currentLocation={location}
        height="calc(100vh - 64px)"
        locations={facilities}
      />
      <Navbar />
    </Container>
  );
};

export default Main;
