import ArrowBackIcon from "../icons/ArrowBackIcon";
import CloseIcon from "../icons/CloseIcon";

type Props = {
  text: string; // 페이지 이름
  backButton?: boolean; // 뒤로가기 버튼 유무
  closeButton?: boolean; // 닫기 버튼 유무
};

const Header = ({ text, backButton = true, closeButton = false }: Props) => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="bg-[#3F51B5] fixed min-w-96 max-w-screen-sm h-[70px] px-[15px] top-0 inset-x-0 mx-auto flex justify-between items-center z-10">
      <div className="w-[25px] h-[25px]">
        {backButton && (
          <button onClick={handleGoBack}>
            <ArrowBackIcon />
          </button>
        )}
      </div>
      <h2 className="text-white text-xl font-semibold">{text}</h2>
      <div className="w-[25px] h-[25px]">
        {closeButton && (
          <button>
            <CloseIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
