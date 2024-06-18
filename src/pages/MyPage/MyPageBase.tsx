import Header from "../../components/Header/Header";
import MyPageBaseForm from "../../components/MyPageForm/MyPageBaseForm";
import Container from "../../components/ui/Container";
import Navbar from "../../components/Navbar/Navbar";

const MyPageBase = () => {
  return (
    <Container hasHeader={true} hasNav={false} full={true}>
      <Header text="마이페이지" />
      <div
        style={{ height: "calc(100vh - 70px)" }}
        className="px-10 flex flex-col gap-6"
      >
        <MyPageBaseForm nickname={"nickname2"} />
      </div>
      <Navbar />
    </Container>
  );
};

export default MyPageBase;
