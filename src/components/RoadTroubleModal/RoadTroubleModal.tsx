import { FaTaxi } from "react-icons/fa";
import { RiSpeakFill } from "react-icons/ri";
import RoadTroubleImageSlide from "../RoadTroubleImageSlide/RoadTroubleImageSlide";
import { RoadReportDetail } from "../../types/roadReportDetail";
import InformationIcon from "../icons/InformationIcon";
import { useState } from "react";
import RoadImageCaptioning from "../RoadImageCaptioning/RoadImageCaptioning";

type Props = {
  callTaxiModalFunc: () => void;
  stateChangeFunc: () => void;
  roadReport: RoadReportDetail;
};

const RoadTroubleModal = ({
  roadReport,
  callTaxiModalFunc,
  stateChangeFunc,
}: Props) => {
  const [openImageCaptioning, setOpenImageCaptioning] = useState(false);
  console.log(roadReport);

  return (
    <>
      {roadReport && (
        <div className="max-w-[380px]">
          <div className="w-[380px] h-[360px]">
            <RoadTroubleImageSlide
              roadReportImage={roadReport.reportImageList}
            />
          </div>
          <div className="flex justify-end text-sm mt-4 relative">
            <button
              className="flex items-center gap-1"
              onClick={() => setOpenImageCaptioning(true)}
            >
              <InformationIcon color="3F51B5" />
              <span>AI 이미지 설명</span>
            </button>
            {openImageCaptioning && (
              <RoadImageCaptioning
                onClose={() => setOpenImageCaptioning(false)}
                imageCaption={
                  roadReport.imageCaption
                    ? roadReport.imageCaption.split('"')[1]
                    : "설명이 제공되지 않는 이미지입니다."
                }
              />
            )}
          </div>
          <div className="h-[130px] pt-5 mb-3">{roadReport.content}</div>
          <div className="h-[50px] flex items-center">
            <p className="flex space-x-4">
              <button
                onClick={stateChangeFunc}
                className="flex items-center justify-center flex-col mr-1"
              >
                <RiSpeakFill size={20} color="#404040" />
                <span>민원</span>
              </button>
              <button
                onClick={callTaxiModalFunc}
                className="flex items-center justify-center flex-col"
              >
                <FaTaxi size={20} color="#404040" />
                <span>콜택시</span>
              </button>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default RoadTroubleModal;
