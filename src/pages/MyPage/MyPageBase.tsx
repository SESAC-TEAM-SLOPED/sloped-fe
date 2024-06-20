import Header from "../../components/Header/Header";
import MyPageBaseForm from "../../components/MyPageForm/MyPageBaseForm";
import Container from "../../components/ui/Container";
import Navbar from "../../components/Navbar/Navbar";

const MyPageBase = () => {
  return (
    <div className="bg-gray-100">
      <Container hasHeader={true} hasNav={true} full={true}>
        <Header text="마이페이지" />
        <div
          style={{ height: "calc(100vh - 70px)" }}
          className="px-10 flex flex-col gap-6 w-full"
        >
          <MyPageBaseForm nickname={"nickname2"} />
        </div>
        <Navbar />
      </Container>
    </div>
  );
};

export default MyPageBase;
