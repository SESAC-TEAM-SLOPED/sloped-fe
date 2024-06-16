import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import { FaCheck } from "react-icons/fa";

const SubmitComplete = () => {
  const navigate = useNavigate();

  return (
    <Container hasHeader={true} full={true}>
      <Header text="불편 도로 제보" closeButton={true} />

      <div
        className="flex flex-col items-center justify-center h-full text-center px-10 flex gap-2"
        style={{ height: "calc(100vh - 180px)" }}
      >
        <FaCheck size="100" color="3F51B5" />
        <p className="text-[#404040] font-bold text-xl">제보 감사합니다</p>
        <div>
          <p className="text-[#757575] text-sm">
            관리자 확인 후 승인 처리가 완료되면,
          </p>
          <p className="text-[#757575] text-sm">지도에 반영됩니다.</p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center mb-4 text-center px-[10px]">
          <div className="mb-3">
            <p>승인 상태는 &#39;마이페이지{">"}내가 남긴 제보&#39;에서 </p>
            <p>확인 가능합니다.</p>
          </div>
          <Button
            text="지도로 돌아가기"
            size="full"
            onClick={() => navigate("/")}
          />
        </div>
      </div>
    </Container>
  );
};

export default SubmitComplete;
