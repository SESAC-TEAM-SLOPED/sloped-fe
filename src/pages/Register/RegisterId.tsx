import Header from "../../components/Header/Header";
import Container from "../../components/ui/Container";
import RegisterIdForm from "../../components/RegisterForm/RegisterIdForm";
const RegisterId = () => {
  return (
    <Container hasHeader={true}>
      <Header text="로그인" />
      <RegisterIdForm />
    </Container>
  );
};

export default RegisterId;
