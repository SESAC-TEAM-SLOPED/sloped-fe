import React from "react";
import { Link } from "react-router-dom";
import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const JoinPageForm = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4 bg-white">
      <h1 className="text-4xl font-bold mb-6">함께가길</h1>

      <Link
        to="/login/kakao"
        className="flex items-center justify-start w-[250px] h-[60px] py-2 bg-kakao rounded-lg text-lg"
      >
        <div className="flex items-center ml-5">
          <RiKakaoTalkFill size={22} />
        </div>
        <div className="flex-grow flex items-center justify-center">
          <span>카카오 계정으로 로그인</span>
        </div>
      </Link>

      <Link
        to="/login/naver"
        className="flex items-center justify-start w-[250px] h-[60px] py-2 bg-naver rounded-lg text-lg "
      >
        <div className="flex items-center ml-5">
          <SiNaver className="text-white" size={22} />
        </div>
        <div className="flex-grow flex items-center justify-center">
          <span>네이버 계정으로 로그인</span>
        </div>
      </Link>

      <Link
        to="/login/id"
        className="flex items-center justify-start w-[250px] h-[60px] py-2 bg-email rounded-lg text-lg "
      >
        <div className="flex items-center ml-5">
          <MdEmail className="text-white" size={22} />
        </div>
        <div className="flex-grow flex items-center justify-center">
          <span>아이디로 로그인</span>
        </div>
      </Link>

      <button className="flex items-center justify-start w-[250px] h-[60px] py-2 bg-gray-200 rounded-lg text-lg ">
        <div className="flex items-center ml-5">
          <FaUser size={22} />
        </div>
        <div className="flex-grow flex items-center justify-center">
          <span>비회원으로 이용하기</span>
        </div>
      </button>

      <Link to="/register/id" className="text-lg text-lg mt-4">
        회원가입
      </Link>
    </div>
  );
};

export default JoinPageForm;
