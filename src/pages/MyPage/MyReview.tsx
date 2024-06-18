import Header from "../../components/Header/Header";
import MyReviewForm from "../../components/MyPageForm/MyReviewForm";
import Container from "../../components/ui/Container";

const MyReview = () => {
  return (
    <Container hasHeader={true} hasNav={false} full={true}>
      <Header text="내가 남긴 리뷰" />
      <div
        style={{ height: "calc(100vh - 70px)" }}
        className="px-10 flex flex-col gap-6"
      >
        <MyReviewForm />
      </div>
    </Container>
  );
};

export default MyReview;
