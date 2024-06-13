import Header from "../../components/Header/Header";
import IdLoginForm from "../../components/LoginForm/IdLoginForm";
import Container from "../../components/ui/Container";

const IdLogin = () => {
  return (
    <Container hasHeader={true}>
      <Header text="로그인" />
      <IdLoginForm />
    </Container>
  );
};

export default IdLogin;
