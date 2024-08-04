import React from "react";
import { SiNaver } from "react-icons/si";

const NaverLoginButton = () => {
  const handleNaverLogin = async () => {
    try {
      const response = await fetch("/api/auth/naver-login");
      const data = await response.json();
      const { naverClientId, naverRedirectUri } = data;
      const naverAuthUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${naverClientId}&state=STATE_STRING&redirect_uri=${naverRedirectUri}`;
      window.location.href = naverAuthUrl;
    } catch (error) {
      console.error("Failed to fetch naver login info", error);
    }
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
