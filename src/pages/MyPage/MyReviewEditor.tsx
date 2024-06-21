import Header from "../../components/Header/Header";
import MyReviewEditorForm from "../../components/MyPageForm/MyReviewEditorForm";
import Container from "../../components/ui/Container";

const MyReviewEditor = () => {
  return (
    <Container hasHeader={true} hasNav={false} full={true}>
      <Header text="리뷰 수정" />
      <div
        style={{ height: "calc(100vh - 70px)" }}
        className="px-10 flex flex-col gap-6"
      >
        <MyReviewEditorForm />
      </div>
    </Container>
  );
};

export default MyReviewEditor;
