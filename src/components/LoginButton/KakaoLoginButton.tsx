import React from "react";
import { RiKakaoTalkFill } from "react-icons/ri";
import { serverUrl } from "../../constant/url";

const KakaoLoginButton = () => {
  const handleKakaoLogin = async () => {
    try {
      const response = await fetch(`${serverUrl}/api/auth/kakao-login`);
      const data = await response.json();
      const { kakaoClientId, kakaoRedirectUri } = data;
      const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${kakaoClientId}&redirect_uri=${kakaoRedirectUri}`;
      window.location.href = kakaoAuthUrl;
    } catch (error) {
      console.error("Failed to fetch Kakao login info", error);
    }
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
