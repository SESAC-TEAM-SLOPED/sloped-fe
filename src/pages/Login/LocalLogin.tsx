import Header from "../../components/Header/Header";
import LocalLoginForm from "../../components/LoginForm/LocalLoginForm";
import Container from "../../components/ui/Container";

const LocalLogin = () => {
  return (
    <Container hasHeader={true} hasNav={false} full={true}>
      <Header text="로그인" />
      <div
        style={{ height: "calc(100vh - 70px)" }}
        className="px-10 flex flex-col gap-6"
      >
        <LocalLoginForm />
      </div>
    </Container>
  );
};

export default LocalLogin;
