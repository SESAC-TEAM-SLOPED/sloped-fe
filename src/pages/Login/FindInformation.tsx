import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Container from "../../components/ui/Container";
import FindIdForm from "../../components/LoginForm/FindIdForm";
import FindPasswordForm from "../../components/LoginForm/FindPasswordForm";
import FindIdPassForm from "../../components/LoginForm/FindIdPassForm"; // 추가된 폼 컴포넌트
import FindPasswordPassForm from "../../components/LoginForm/FindPasswordPassForm"; // 추가된 폼 컴포넌트
import TabChanger from "../../components/LoginForm/TabChanger";

const FindInformation = () => {
  const [activeTab, setActiveTab] = useState("id");

  return (
    <div style={{ height: "90vh" }} className="wrap-min-screen">
      <Container hasHeader={true} full={false}>
        <Header text="아이디/비밀번호 찾기" />
        <TabChanger activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "id" && <FindIdForm setActiveTab={setActiveTab} />}
        {activeTab === "password" && (
          <FindPasswordForm setActiveTab={setActiveTab} />
        )}
        {activeTab === "id-pass" && <FindIdPassForm />}
        {activeTab === "password-pass" && <FindPasswordPassForm />}
      </Container>
    </div>
  );
};

export default FindInformation;
