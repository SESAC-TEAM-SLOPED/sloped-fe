import React from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleLoginButton = () => {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8080/api/auth/login/google";
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
