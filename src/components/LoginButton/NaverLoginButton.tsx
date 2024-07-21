import React from "react";
import { SiNaver } from "react-icons/si";

const NaverLoginButton = () => {
  const handleNaverLogin = () => {
    window.location.href = "http://localhost:8080/api/auth/login/naver";
  };

  return (
    <button
      onClick={handleNaverLogin}
      className="flex items-center justify-start w-[250px] h-[60px] py-2 bg-naver rounded-lg text-lg"
    >
      <div className="flex items-center ml-5">
        <SiNaver className="text-white" size={22} />
      </div>
      <div className="flex-grow flex items-center justify-center">
        <span>네이버 계정으로 로그인</span>
      </div>
    </button>
  );
};

export default NaverLoginButton;
