import Header from "../../components/Header/Header";
import Container from "../../components/ui/Container";
import RegisterIdForm from "../../components/RegisterForm/RegisterIdForm";
const RegisterId = () => {
  return (
    <div style={{ height: "92vh" }} className="wrap-min-screen">
      <Container hasHeader={true}>
        <Header text="회원가입" />
        <RegisterIdForm />
      </Container>
    </div>
  );
};

export default RegisterId;
