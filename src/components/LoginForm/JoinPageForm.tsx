import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaUser } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import KakaoLoginButton from "../LoginButton/KakaoLoginButton";
import NaverLoginButton from "../LoginButton/NaverLoginButton";
import GoogleLoginButton from "../LoginButton/GoogleLoginButton";

const JoinPageForm = () => {
  const navigate = useNavigate();

  const handleGuestClick = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4 bg-white">
      <h1 className="text-4xl font-bold mb-6">함께가길</h1>

      <GoogleLoginButton />

      <NaverLoginButton />

      <KakaoLoginButton />

      <Link
        to="/login/local"
        className="flex items-center justify-start w-[250px] h-[60px] py-2 bg-email rounded-lg text-lg "
      >
        <div className="flex items-center ml-5">
          <MdEmail className="text-white" size={22} />
        </div>
        <div className="flex-grow flex items-center justify-center">
          <span>아이디로 로그인</span>
        </div>
      </Link>

      <button
        onClick={handleGuestClick}
        className="flex items-center justify-start w-[250px] h-[60px] py-2 bg-gray-200 rounded-lg text-lg "
      >
        <div className="flex items-center ml-5">
          <FaUser size={22} />
        </div>
        <div className="flex-grow flex items-center justify-center">
          <span>비회원으로 이용하기</span>
        </div>
      </button>

      <Link
        to="/login/register/id"
        className="flex items-center justify-center w-[200px] h-[40px] bg-white rounded-lg text-lg border border-gray-300"
      >
        <span>회원가입</span>
      </Link>
    </div>
  );
};

export default JoinPageForm;
