import Header from "../../components/Header/Header";
import MySocialProfileEditorForm from "../../components/MyPageForm/MySocialProfileEditorForm";
import Container from "../../components/ui/Container";

const MySocialProfileEditor = () => {
  return (
    <Container hasHeader={true} hasNav={false} full={true}>
      <Header text="정보 수정" />
      <div
        style={{ height: "calc(100vh - 70px)" }}
        className="px-10 flex flex-col gap-6"
      >
        <MySocialProfileEditorForm />
      </div>
    </Container>
  );
};

export default MySocialProfileEditor;
