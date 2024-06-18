import React from "react";
import { Link } from "react-router-dom";
import {
  FaUserEdit,
  FaCommentDots,
  FaBell,
  FaBookmark,
  FaSignOutAlt,
  FaUserTimes,
} from "react-icons/fa";

const MyPageBaseForm = () => {
  const nickname = "TEMP NICKNAME"; // 임시 닉네임
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">{nickname}님, 안녕하세요!</h1>
      <div className="w-full max-w-md space-y-6">
        <div className="flex justify-around bg-white p-4 rounded-lg shadow">
          <Link to="/edit-info" className="flex flex-col items-center">
            <FaUserEdit className="text-3xl mb-2" />
            <p>정보 수정</p>
          </Link>
          <Link to="/my-reviews" className="flex flex-col items-center">
            <FaCommentDots className="text-3xl mb-2" />
            <p>내가 남긴 리뷰</p>
          </Link>
          <Link to="/my-reports" className="flex flex-col items-center">
            <FaBell className="text-3xl mb-2" />
            <p>내가 남긴 제보</p>
          </Link>
        </div>
        <Link
          to="/favorites"
          className="bg-white p-4 rounded-lg shadow flex items-center"
        >
          <FaBookmark className="text-2xl mr-4" />
          <p>즐겨찾기</p>
        </Link>
        <Link
          to="/logout"
          className="bg-white p-4 rounded-lg shadow flex items-center"
        >
          <FaSignOutAlt className="text-2xl mr-4" />
          <p>로그아웃</p>
        </Link>
        <Link
          to="/delete-account"
          className="bg-white p-4 rounded-lg shadow flex items-center"
        >
          <FaUserTimes className="text-2xl mr-4" />
          <p>회원 탈퇴</p>
        </Link>
      </div>
    </div>
  );
};

export default MyPageBaseForm;
