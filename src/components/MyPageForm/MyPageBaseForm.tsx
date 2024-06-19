import React, { useState } from "react";
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

type MyPageBaseFormProps = {
  nickname: string;
};

const MyPageBaseForm = ({ nickname }: MyPageBaseFormProps) => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleVerifyPassword = () => {
    if (password === "123456" && password === confirmPassword) {
      navigate("/mypage/edit-info");
      setShowModal(false);
    } else {
      setError("비밀번호가 일치하지 않거나 잘못되었습니다.");
    }
  };

  const handleDeleteAccount = () => {
    // 여기에서 회원 탈퇴 로직을 추가하세요.
    console.log("회원 탈퇴 처리");
    setShowDeleteModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">{nickname}님, 안녕하세요!</h1>
      <div className="w-full max-w-md space-y-6">
        <div className="flex justify-around bg-white p-4 rounded-lg shadow">
          <button
            onClick={() => setShowModal(true)}
            className="flex flex-col items-center"
          >
            <FaUserEdit className="text-3xl mb-2" />
            <p>정보 수정</p>
          </button>
          <Link to="/mypage/my-reviews" className="flex flex-col items-center">
            <FaCommentDots className="text-3xl mb-2" />
            <p>내가 남긴 리뷰</p>
          </Link>
          <Link to="/mypage/my-reports" className="flex flex-col items-center">
            <FaBell className="text-3xl mb-2" />
            <p>내가 남긴 제보</p>
          </Link>
        </div>
        <Link
          to="/mypage/favorites"
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
        <button
          onClick={() => setShowDeleteModal(true)}
          className="bg-white p-4 rounded-lg shadow flex items-center w-full"
        >
          <FaUserTimes className="text-2xl mr-4" />
          <p>회원 탈퇴</p>
        </button>
      </div>

      {showModal && (
        <ModalPortal>
          <Modal onClose={() => setShowModal(false)}>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-4">비밀번호 확인</h2>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm text-gray-700 mb-2"
                >
                  비밀번호
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full border-b border-gray-400 py-2 outline-none"
                  placeholder="비밀번호 입력"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm text-gray-700 mb-2"
                >
                  비밀번호 확인
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="w-full border-b border-gray-400 py-2 outline-none"
                  placeholder="비밀번호 확인 입력"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              {error && <div className="text-red-500 mb-4">{error}</div>}
              <button
                className="w-full bg-signiture text-white py-2 rounded-lg"
                onClick={handleVerifyPassword}
              >
                확인
              </button>
            </div>
          </Modal>
        </ModalPortal>
      )}

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
