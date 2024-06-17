import { FaCheck } from "react-icons/fa";
import Button from "./Button";

type Props = {
  thankYouText: string; // 아이콘 아래 들어가는 굵은 텍스트
  subText: string; // 굵은 텍스트 아래 들어가는 부가설명 텍스트
  bottomText: string; // 버튼 위에 들어가는 텍스트
  buttonText: string; // 버튼 안에 적힌 텍스트
  navigateTo: () => void; // 버튼 클릭 시 이동할 페이지
};

const SubmitOK = ({
  thankYouText,
  subText,
  bottomText,
  buttonText,
  navigateTo,
}: Props) => {
  return (
    <div
      className="flex flex-col items-center justify-center h-full text-center px-10 flex gap-2"
      style={{ height: "calc(100vh - 180px)" }}
    >
      <FaCheck size="100" color="#3F51B5" />
      <p className="text-[#404040] font-bold text-xl">{thankYouText}</p>
      <div>
        <p
          className="text-[#757575] text-sm"
          dangerouslySetInnerHTML={{ __html: subText }}
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center mb-4 text-center px-[10px]">
        <div className="mb-3">
          <p dangerouslySetInnerHTML={{ __html: bottomText }} />
        </div>
        <Button text={buttonText} size="full" onClick={() => navigateTo()} />
      </div>
    </div>
  );
};

export default SubmitOK;
