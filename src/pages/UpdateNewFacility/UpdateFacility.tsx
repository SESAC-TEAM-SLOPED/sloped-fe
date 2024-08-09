import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Container from "../../components/ui/Container";
import RadioButtonGroup from "../../components/ui/RadioButtonGroup";
import Textarea from "../../components/ui/TextArea";
import Button from "../../components/ui/Button";
import axiosInstance from "../../service/axiosInstance";
import { serverUrl } from "../../constant/url";

const FACILITY_TYPE: { [key: string]: string } = {
  식당: "RESTAURANT",
  카페: "CAFE",
  공공장소: "PUBLIC_SPACE",
  기타: "ETC",
};

const UpdateFacility = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const facilityData = location.state;

  const [facilityName, setFacilityName] = useState(facilityData.name);
  const [phoneNumber, setPhoneNumber] = useState(facilityData.contact);
  const [selectedCategory, setSelectedCategory] = useState(
    FACILITY_TYPE[facilityData.facilityType],
  );
  const [entranceStep, setEntranceStep] = useState(
    facilityData.isEntranceBarrier ? "있음" : "없음",
  );
  const [slope, setSlope] = useState(facilityData.hasSlope ? "있음" : "없음");
  const [elevator, setElevator] = useState(
    facilityData.hasElevator ? "있음" : "없음",
  );
  const [textContent, setTextContent] = useState(facilityData.content);
  const [address, setAddress] = useState(facilityData.address);

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

  const submitForm = async () => {
    // 성공시 submit 페이지로 이동
    await axiosInstance.post(`${serverUrl}/api/facilities`, {
      name: facilityName,
      address,
      content: textContent,
      contact: phoneNumber,
      facilityType: Object.keys(FACILITY_TYPE).find(
        (key) => FACILITY_TYPE[key] === selectedCategory,
      ),
      hasSlope: slope === "있음" ? true : false,
      isEntranceBarrier: entranceStep === "있음" ? true : false,
      hasElevator: elevator === "있음" ? true : false,
    });

    navigate("/submit/completed");
  };

  return (
    <Container hasHeader={true}>
      <Header text="시설 정보 수정" />
      <div className="flex flex-col gap-6">
        <div className="h-80 w-full max-w-2xl mx-auto">
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
                options={["식당", "카페", "공공장소", "기타"]}
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
            text="시설 정보 수정 요청"
            size="full"
            onClick={submitForm}
            disabled={isButtonDisabled}
          />
        </div>
      </div>
    </Container>
  );
};

export default UpdateFacility;
