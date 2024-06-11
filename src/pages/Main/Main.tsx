import Map from "../../components/Map/Map";
import Navbar from "../../components/Navbar/Navbar";
import Container from "../../components/ui/Container";
import useGeoLocation from "../../hooks/geoLocation";

const Main = () => {
  const { location } = useGeoLocation();

  return (
    <Container hasHeader={false} hasNav={true}>
      <Map location={location} />
      <Navbar />
    </Container>
  );
};

export default Main;
