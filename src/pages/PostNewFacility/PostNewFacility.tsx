import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Map from "../../components/Map/Map";
import Container from "../../components/ui/Container";
import useGeoLocation from "../../hooks/geoLocation";
import { getAddressFromCoord } from "../../service/map";
import { useLocation, useNavigate } from "react-router-dom";
import RadioButtonGroup from "../../components/ui/RadioButtonGroup";
import Textarea from "../../components/ui/TextArea";
import Button from "../../components/ui/Button";

const PostNewFacility = () => {
  const navigate = useNavigate();
  const locationState = useLocation();
  const { location: geoLocation } = useGeoLocation(); // 현재 위치 가져오기
  const { location: postLocation, address: initialAddress } =
    locationState.state || {};
  const [address, setAddress] = useState(initialAddress || "");
  const [facilityName, setFacilityName] = useState("");
  const [map, setMap] = useState();
  const [selectedCategory, setSelectedCategory] = useState("식당");
  const [entranceStep, setEntranceStep] = useState("있음");
  const [slope, setSlope] = useState("있음");
  const [elevator, setElevator] = useState("있음");
  const [textContent, setTextContent] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const isButtonDisabled = facilityName.trim() === "";

  const handleCategoryChange = (option: string) => {
    setSelectedCategory(option); // 카테고리 선택 상태 업데이트
  };

  const handleEntranceStepChange = (option: string) => {
    setEntranceStep(option); // 입구턱유무 상태 업데이트
  };

  const handleSlopeChange = (option: string) => {
    setSlope(option); // 경사로유무 상태 업데이트
  };

  const handleElevatorChange = (option: string) => {
    setElevator(option); // 엘리베이터유무 선택 상태 업데이트
  };

  const submitForm = () => {
    // 성공시 submit 페이지로 이동
    console.log(postLocation);
    console.log(`주소: ${address}`);
    console.log(`이름: ${facilityName}`);
    console.log(`카테고리: ${selectedCategory}`);
    console.log(`입구턱 유무: ${entranceStep}`);
    console.log(`경사로 유무: ${slope}`);
    console.log(`엘리베이터 유무: ${elevator}`);
    console.log(`전화번호: ${phoneNumber}`);
    console.log(`내용: ${textContent}`);

    navigate("/submit/completed");
  };

  useEffect(() => {
    if (geoLocation) {
      getAddressFromCoord({ lng: geoLocation.lng, lat: geoLocation.lat }).then(
        (addr) => setAddress(addr),
      );
    }
  }, [geoLocation]);

  return (
    <Container hasHeader={true}>
      <Header text="시설 등록" />
      <div className="flex flex-col gap-6">
        <div className="h-80 w-full max-w-2xl mx-auto">
          <Map
            map={map}
            setMap={setMap}
            height="100%"
            canDrag={false}
            canZoom={false}
            currentLocation={geoLocation} // 현재 위치 전달
          />
          <div className="w-full mb-4">
            <label htmlFor="location" className="text-sm text-gray-700">
              주소
            </label>
            <p className="text-red-500 inline font-bold text-l">*</p>
            <div className="flex items-center border-b border-gray-400 py-2">
              <input
                type="text"
                value={address}
                className="flex-grow outline-none"
                readOnly
              />
              <button className="ml-2 text-[#F8837C]">수정</button>
            </div>
          </div>
          <div className="w-full mb-4">
            <label htmlFor="name" className="text-sm text-gray-700">
              이름
            </label>
            <p className="text-red-500 inline font-bold text-l">*</p>
            <div className="flex items-center border-b border-gray-400 py-2">
              <input
                type="text"
                value={facilityName}
                onChange={(e) => setFacilityName(e.target.value)}
                className="flex-grow outline-none"
              />
            </div>
          </div>
          <div className="w-full mb-4">
            <label htmlFor="contact" className="text-sm text-gray-700">
              전화번호
            </label>
            <div className="flex items-center border-b border-gray-400 py-2">
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="flex-grow outline-none"
              />
            </div>
          </div>
          <div className="w-full mb-4">
            <label className="text-sm text-gray-700 mb-2">카테고리</label>
            <p className="text-red-500 inline font-bold text-l">*</p>
            <div className="flex flex-wrap items-center mt-2">
              <RadioButtonGroup
                options={["식당", "관광지", "카페", "기타"]}
                name="category"
                onChange={handleCategoryChange}
                initialOption={selectedCategory}
              />
            </div>
          </div>
          <div className="w-full mb-4">
            <label className="text-sm text-gray-700 mb-2">입구턱 유무</label>
            <p className="text-red-500 inline font-bold text-l">*</p>
            <div className="flex flex-wrap items-center mt-2">
              <RadioButtonGroup
                options={["있음", "없음"]}
                name="entranceStep"
                onChange={handleEntranceStepChange}
                initialOption={entranceStep}
              />
            </div>
          </div>
          <div className="w-full mb-4">
            <label className="text-sm text-gray-700 mb-2">경사로 유무</label>
            <p className="text-red-500 inline font-bold text-l">*</p>
            <div className="flex flex-wrap items-center mt-2">
              <RadioButtonGroup
                options={["있음", "없음"]}
                name="slope"
                onChange={handleSlopeChange}
                initialOption={slope}
              />
            </div>
          </div>
          <div className="w-full mb-4">
            <label className="text-sm text-gray-700 mb-2">
              엘리베이터 유무
            </label>
            <p className="text-red-500 inline font-bold text-l">*</p>
            <div className="flex flex-wrap items-center mt-2">
              <RadioButtonGroup
                options={["있음", "없음"]}
                name="elevator"
                onChange={handleElevatorChange}
                initialOption={elevator}
              />
            </div>
          </div>
          <div className="mb-2">
            <label className="text-sm text-gray-700">시설 설명</label>
          </div>
          <Textarea
            placeholder="예시. (이런 공간)에 (이런 점)이 있어요."
            height="200px"
            onTextChange={setTextContent}
          />
          <p className="text-[#757575] text-sm mb-4">
            * 구체적으로 작성할수록 정보 수집에 도움됩니다. 허위 사실 및 제보나
            목적과 알맞지 않은 내용은 관리자에 의해 거절될 수 있습니다.
          </p>
          <Button
            text="시설 등록하기"
            size="full"
            onClick={submitForm}
            disabled={isButtonDisabled}
          />
        </div>
      </div>
    </Container>
  );
};

export default PostNewFacility;
