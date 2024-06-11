import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import Input from "../../components/ui/Input";

const WriteReview = () => {
  return (
    <Container hasHeader={true} hasNav={true}>
      <Header text="리뷰 작성" closeButton={true} />
      <Input labelText="아이디" width={280} />
      <Button text="로그인" onClick={() => {}} />
      <Navbar />
    </Container>
  );
};

export default WriteReview;
