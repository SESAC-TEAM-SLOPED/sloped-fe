import { useLocation, useNavigate } from "react-router-dom";
import Container from "./../../components/ui/Container";
import Header from "../../components/Header/Header";
import Textarea from "./../../components/ui/TextArea";
import UploadButton from "../../components/ui/UploadButton";
import Button from "../../components/ui/Button";
import { useRef, useState } from "react";

const RoadReportForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { location: reportLocation, address } = location.state || {};
  const [textContent, setTextContent] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const [isPhotoUploaded, setIsPhotoUploaded] = useState(false);
  const isButtonDisabled = !isPhotoUploaded || textContent.trim() === "";

  const submitForm = () => {
    // 불편 도로 제보 API 연동, 성공시 submit 페이지로 이동
    console.log(reportLocation);
    console.log(`주소: ${address}`);
    console.log(uploadedFiles);
    console.log(`내용: ${textContent}`);

    navigate("/submit/completed");
  };

  return (
    <Container hasHeader={true} full={true}>
      <Header text="통행 불편 제보" />
      <div
        style={{ height: "calc(100vh - 70px)" }}
        className="px-10 flex flex-col gap-2"
      >
        <div className="w-full bg-white pt-6">
          <p className="text-[#404040] font-bold text-xl inline">
            제보 사진이 필요해요
          </p>
          <p className="text-red-500 inline font-bold text-xl">*</p>
          <p className="text-[#757575] text-sm">
            통행 장애/불편 요소가 사진에 잘 나오게 촬영해주세요.
          </p>
        </div>
        <div>
          <UploadButton
            onUploadChange={setIsPhotoUploaded}
            setUploadedFiles={setUploadedFiles}
          />
        </div>

        <div className="w-full bg-white mt-4">
          <div className="mb-2 ">
            <p className="text-[#404040] font-bold text-xl inline">
              어떤 점이 통행에 불편한가요?
            </p>
            <p className="text-red-500 inline font-bold text-xl">*</p>
          </div>
          <Textarea
            placeholder="예시. (어떤 장소)에 (어떤 불편함)이 있어요. (어떤 날짜)에는 불편함이 해소될 것 같아요."
            height="200px"
            onTextChange={setTextContent}
          />
        </div>
        <p className="text-[#757575] text-sm">
          * 구체적으로 작성할수록 정보 수집에 도움됩니다. 허위 사실 및 제보나
          목적과 알맞지 않은 내용은 관리자에 의해 거절될 수 있습니다.
        </p>
        <Button
          text="다 작성했어요"
          size="full"
          onClick={submitForm}
          disabled={isButtonDisabled}
        />
      </div>
    </Container>
  );
};

export default RoadReportForm;
