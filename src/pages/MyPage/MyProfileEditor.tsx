import Header from "../../components/Header/Header";
import MyProfileEditorForm from "../../components/MyPageForm/MyProfileEditorForm";
import Container from "../../components/ui/Container";

const MyProfileEditor = () => {
  return (
    <Container hasHeader={true} hasNav={false} full={true}>
      <Header text="정보 수정" />
      <div
        style={{ height: "calc(100vh - 70px)" }}
        className="px-10 flex flex-col gap-6"
      >
        <MyProfileEditorForm />
      </div>
    </Container>
  );
};

export default MyProfileEditor;
