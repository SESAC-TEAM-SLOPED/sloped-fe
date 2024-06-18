import Map from "../../components/Map/Map";
import Navbar from "../../components/Navbar/Navbar";
import Container from "../../components/ui/Container";
import useGeoLocation from "../../hooks/geoLocation";
import { Facility } from "../../types/facility";

const facilities: Facility[] = [
  {
    id: 1,
    latitude: 1,
    longitude: 1,
    type: "",
    address: "",
  },
];

const Main = () => {
  const { location } = useGeoLocation();

  return (
    <Container hasHeader={false} hasNav={true}>
      <Map currentLocation={location} height="calc(100vh - 64px)" />
      <Navbar />
    </Container>
  );
};

export default Main;
