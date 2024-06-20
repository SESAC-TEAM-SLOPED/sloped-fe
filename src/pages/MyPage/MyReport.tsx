import Header from "../../components/Header/Header";
import MyReportForm from "../../components/MyPageForm/MyReportForm";
import Container from "../../components/ui/Container";

const MyReport = () => {
  return (
    <Container hasHeader={true} hasNav={false} full={true}>
      <Header text="나의 제보" />
      <div
        style={{ height: "calc(100vh - 70px)" }}
        className="px-10 flex flex-col gap-6"
      >
        <MyReportForm />
      </div>
    </Container>
  );
};

export default MyReport;
