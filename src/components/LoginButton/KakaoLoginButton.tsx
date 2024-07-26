import React from "react";
import { RiKakaoTalkFill } from "react-icons/ri";

const KakaoLoginButton = () => {
  const handleKakaoLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/kakao";
  };

  return (
    <button
      onClick={handleKakaoLogin}
      className="flex items-center justify-start w-[250px] h-[60px] py-2 bg-kakao rounded-lg text-lg"
    >
      <div className="flex items-center ml-5">
        <RiKakaoTalkFill className="text-brown" size={22} />
      </div>
      <div className="flex-grow flex items-center justify-center">
        <span>카카오 계정으로 로그인</span>
      </div>
    </button>
  );
};

export default KakaoLoginButton;
