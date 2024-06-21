import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Container from "../../components/ui/Container";
import Map from "../../components/Map/Map";
import { useState } from "react";

const PostNewFacility = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { location: postLocation, address } = location.state || {}; // 전달된 주소 정보 받아오기

  const [map, setMap] = useState();

  return (
    <Container hasHeader={true}>
      <Header text="시설 등록" />
      <div className="flex flex-col gap-6">
        <div className="h-80 w-[580px]">
          {/* 주소 수정 불가 하도록 비활성화 */}
          <Map
            map={map}
            setMap={setMap}
            height="100%"
            canDrag={false}
            canZoom={false}
            currentLocation={postLocation}
          />
          <input type="text" value={address} readOnly />
        </div>
      </div>
    </Container>
  );
};

export default PostNewFacility;
