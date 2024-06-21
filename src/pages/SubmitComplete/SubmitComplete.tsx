import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import { FaCheck } from "react-icons/fa";
import SubmitOK from "../../components/ui/SubmitOK";

const SubmitComplete = () => {
  const navigate = useNavigate();

  return (
    <Container hasHeader={true} full={true}>
      <Header text="통행 불편 제보" closeButton={true} />

      <SubmitOK
        thankYouText="제보 감사합니다"
        subText="관리자 확인 후 승인 처리가 완료되면,<br /> 지도에 반영됩니다."
        bottomText="승인 상태는 &#39;마이페이지>나의 제보&#39;에서 <br />확인 가능합니다."
        buttonText="지도로 돌아가기"
        navigateTo={() => navigate("/")}
      />
    </Container>
  );
};

export default SubmitComplete;
