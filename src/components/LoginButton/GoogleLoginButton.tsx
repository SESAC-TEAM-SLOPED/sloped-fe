import React from "react";
import { FcGoogle } from "react-icons/fc";
import { serverUrl } from "../../constant/url";

const GoogleLoginButton = () => {
  const handleGoogleLogin = async () => {
    try {
      const response = await fetch(`${serverUrl}/api/auth/google-login`);
      const data = await response.json();
      const { googleClientId, googleRedirectUri } = data;
      const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleClientId}&redirect_uri=${googleRedirectUri}&response_type=code&scope=email`;
      window.location.href = googleAuthUrl;
    } catch (error) {
      console.error("Failed to fetch google login info", error);
    }
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="flex items-center justify-start w-[250px] h-[60px] py-2 bg-white border border-gray-400 rounded-lg text-lg" // Added border class
    >
      <div className="flex items-center ml-5">
        <FcGoogle className="text-brown" size={22} />
      </div>
      <div className="flex-grow flex items-center justify-center">
        <span>구글 계정으로 로그인</span>
      </div>
    </button>
  );
};

export default GoogleLoginButton;
