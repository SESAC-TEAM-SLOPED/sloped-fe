import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Container from "../../components/ui/Container";
import FindIdForm from "../../components/LoginForm/FindIdForm";
import FindPasswordForm from "../../components/LoginForm/FindPasswordForm";
import TabSwitcher from "../../components/LoginForm/Tabswitcher";

const FindId = () => {
  const [activeTab, setActiveTab] = useState("id");

  return (
    <div style={{ height: "90vh" }} className="wrap-min-screen">
      <Container hasHeader={true} full={false}>
        <Header text="아이디/비밀번호 찾기" />
        <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "id" ? <FindIdForm /> : <FindPasswordForm />}
      </Container>
    </div>
  );
};

export default FindId;
