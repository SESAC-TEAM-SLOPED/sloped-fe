import Header from "../../components/Header/Header";
import MyFavoriteForm from "../../components/MyPageForm/MyFavoriteForm";
import Container from "../../components/ui/Container";

const MyFavorite = () => {
  return (
    <Container hasHeader={true} hasNav={false} full={true}>
      <Header text="즐겨찾기" />
      <div
        style={{ height: "calc(100vh - 70px)" }}
        className="px-10 flex flex-col gap-6"
      >
        <MyFavoriteForm />
      </div>
    </Container>
  );
};

export default MyFavorite;
