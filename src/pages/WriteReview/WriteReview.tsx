import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";

const WriteReview = () => {
  return (
    <Container hasHeader={true} hasNav={true}>
      <Header text="리뷰 작성" closeButton={true} />
      <Navbar />
    </Container>
  );
};

export default WriteReview;
