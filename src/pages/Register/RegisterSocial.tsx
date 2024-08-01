import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import RegisterSocialForm from "../../components/RegisterForm/RegisterSocialForm";
import Container from "../../components/ui/Container";

const RegisterSocial = () => {
  const [email, setEmail] = useState<string>("");
  const [oauthType, setOauthType] = useState<string>("");
  const location = useLocation();

  useEffect(() => {
    // URL 파라미터를 읽어오는 함수
    const getQueryParams = () => {
      const params = new URLSearchParams(location.search);
      return {
        email: params.get("email") || "",
        oauthType: params.get("oauthType") || "",
      };
    };

    const fetchData = async () => {
      try {
        const data = getQueryParams(); // URL 파라미터에서 데이터 가져오기

        setEmail(data.email);
        setOauthType(data.oauthType);
      } catch (error) {
        console.error("Error fetching social register data:", error);
      }
    };

    fetchData();
  }, [location]);

  return (
    <Container hasHeader={true}>
      <Header text="소셜 회원 가입" />
      <RegisterSocialForm email={email} oauthType={oauthType} />
    </Container>
  );
};

export default RegisterSocial;
