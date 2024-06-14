import Header from "../../components/Header/Header";
import RegisterSocialForm from "../../components/RegisterForm/RegisterSocialForm";
import Container from "../../components/ui/Container";

const RegisterSocial = () => {
  return (
    <Container hasHeader={true}>
      <Header text="회원가입" />
      <RegisterSocialForm />
    </Container>
  );
};

export default RegisterSocial;
