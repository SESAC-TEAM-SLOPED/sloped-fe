import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Container from "../../components/ui/Container";
import FindIdForm from "../../components/LoginForm/FindIdForm";
import FindPasswordForm from "../../components/LoginForm/FindPasswordForm";
import FindIdPassForm from "../../components/LoginForm/FindIdPassForm";
import FindPasswordPassForm from "../../components/LoginForm/FindPasswordPassForm";
import TabChanger from "../../components/LoginForm/TabChanger";
import IdCheckBeforePasswordForm from "../../components/LoginForm/IdCheckBeforePasswordForm";

const FindInformation = () => {
  const [activeTab, setActiveTab] = useState("id");
  const [memberId, setMemberId] = useState("");
  const [isIdVerified, setIsIdVerified] = useState(false);

  return (
    <div style={{ height: "90vh" }} className="wrap-min-screen">
      <Container hasHeader={true} full={false}>
        <Header text="아이디/비밀번호 찾기" />
        <TabChanger activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "id" && (
          <FindIdForm setActiveTab={setActiveTab} setMemberId={setMemberId} />
        )}

        {activeTab === "id-pass" && <FindIdPassForm memberId={memberId} />}

        {activeTab === "password" && !isIdVerified && (
          <IdCheckBeforePasswordForm
            setActiveTab={setActiveTab}
            setIsIdVerified={setIsIdVerified}
            setMemberId={setMemberId}
          />
        )}

        {activeTab === "password" && isIdVerified && (
          <FindPasswordForm setActiveTab={setActiveTab} id={memberId} />
        )}

        {activeTab === "password-pass" && (
          <FindPasswordPassForm id={memberId} />
        )}
      </Container>
    </div>
  );
};

export default FindInformation;
