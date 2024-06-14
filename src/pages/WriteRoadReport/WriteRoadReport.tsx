import Header from "../../components/Header/Header";
import Map from "../../components/Map/Map";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import RoundedBox from "../../components/ui/RoundedBox";
import useGeoLocation from "../../hooks/geoLocation";

const WriteRoadReport = () => {
  const { location } = useGeoLocation();
  console.log(location);

  return (
    <Container hasHeader={true} hasNav={false}>
      <h1 className="text-xl font-bold">주소가 이곳이 맞나요?</h1>
      <Header text="불편 도로 제보" closeButton={true} />
      <div className="mb-2.5 mt-3">
        <RoundedBox text="서울특별시 강남구 역삼동 123-45" size="full" />
      </div>
      <Map location={location} height={"calc(100vh - 280px)"}></Map>
      <div className="mt-3">
        <Button text="다음" size="full" onClick={() => {}} />
      </div>
    </Container>
  );
};

export default WriteRoadReport;
