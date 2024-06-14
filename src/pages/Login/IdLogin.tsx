import Header from "../../components/Header/Header";
import IdLoginForm from "../../components/LoginForm/IdLoginForm";
import Container from "../../components/ui/Container";

const IdLogin = () => {
  return (
    <Container hasHeader={true} hasNav={false} full={true}>
      <Header text="로그인" />
      <div
        style={{ height: "calc(100vh - 70px)" }}
        className="px-10 flex flex-col gap-6"
      >
        <IdLoginForm />
      </div>
    </Container>
  );
};

export default IdLogin;
