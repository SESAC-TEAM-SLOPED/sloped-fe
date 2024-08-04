import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUserEdit,
  FaCommentDots,
  FaBell,
  FaBookmark,
  FaSignOutAlt,
  FaUserTimes,
} from "react-icons/fa";
import ModalPortal from "../ui/ModalPortal";
import Modal from "../ui/Modal";
import {
  decodeTokenNickname,
  decodeTokenAuthType,
} from "../../service/tokenUtils";
import { handleLogout } from "../../service/authUtils";
import { getCookie } from "../../service/cookieUtils";

const MyPageBaseForm = () => {
  const [nickname, setNickname] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = getCookie("accessToken");
    if (token) {
      const decodedNickname = decodeTokenNickname(token);
      setNickname(decodedNickname); // 닉네임 설정
    }
  }, []);

  const handleEditAccount = () => {
    const token = getCookie("accessToken");
    if (token) {
      const authType = decodeTokenAuthType(token);
      if (authType === "LOCAL") {
        navigate("/mypage/edit-info");
      } else {
        navigate("/mypage/edit-social-info");
      }
    }
  };

  const handleDeleteAccount = () => {
    // 여기에서 회원 탈퇴 로직을 추가하세요.
    console.log("회원 탈퇴 처리");
    setShowDeleteModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-20 w-full">
      <h1 className="text-3xl font-bold mb-6">{nickname}님, 안녕하세요!</h1>
      <div className="w-full max-w-md space-y-6">
        <div className="flex justify-around bg-white p-4 rounded-lg shadow">
          <button
            onClick={handleEditAccount}
            className="flex flex-col items-center px-4 rounded-lg"
          >
            <FaUserEdit className="text-2xl mb-2" />
            <p>정보 수정</p>
          </button>

          <Link
            to="/mypage/my-reviews"
            className="flex flex-col items-center px-4 rounded-lg"
          >
            <FaCommentDots className="text-2xl mb-2" />
            <p>나의 리뷰</p>
          </Link>
          <Link
            to="/mypage/my-reports"
            className="flex flex-col items-center px-4 rounded-lg"
          >
            <FaBell className="text-2xl mb-2" />
            <p>나의 제보</p>
          </Link>
        </div>
        <Link
          to="/mypage/favorites"
          className="bg-white p-4 rounded-lg shadow flex items-center w-full px-6 py-3 my-2"
        >
          <FaBookmark className="text-2xl mr-4" />
          <p>즐겨찾기</p>
        </Link>

        <button
          onClick={() => handleLogout(navigate)}
          className="bg-white p-4 rounded-lg shadow flex items-center w-full px-6 py-3 my-2"
        >
          <FaSignOutAlt className="text-2xl mr-4" />
          <p>로그아웃</p>
        </button>

        <button
          onClick={() => setShowDeleteModal(true)}
          className="bg-white p-4 rounded-lg shadow flex items-center w-full px-6 py-3 my-2"
        >
          <FaUserTimes className="text-2xl mr-4" />
          <p>회원 탈퇴</p>
        </button>
      </div>

      {showDeleteModal && (
        <ModalPortal>
          <Modal onClose={() => setShowDeleteModal(false)}>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-4">
                정말 탈퇴하시겠습니까? <br /> 이 결정은 되돌릴 수 없습니다!
              </h2>
              <button
                className="w-full bg-red-500 text-white py-2 rounded-lg"
                onClick={handleDeleteAccount}
              >
                확인
              </button>
            </div>
          </Modal>
        </ModalPortal>
      )}
    </div>
  );
};

export default MyPageBaseForm;
