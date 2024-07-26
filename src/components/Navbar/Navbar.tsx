import { Link } from "react-router-dom";
import CommentIcon from "../icons/CommentIcon";
import HouseIcon from "../icons/HouseIcon";
import UserIcon from "../icons/UserIcon";
import { useState } from "react";
import ModalPortal from "../ui/ModalPortal";
import Modal from "../ui/Modal";
import FacilityOrRoadModal from "./FacilityOrRoadModal";
import axiosInstance from "../../service/axiosInstance";

const LINK_STYLE = "flex flex-col justify-center items-center h-16 w-1/3";
const TEXT_STYLE = "text-sm text-[#404040]";

const Navbar = () => {
  const [openReportModal, setOpenReportModal] = useState(false);

  const handleMypageClick = async () => {
    try {
      const response = await axiosInstance.get("/mypage-request");
      if (response.status === 200) {
        // API 응답이 성공적이면 페이지 이동
        console.log(response.data); // 필요한 동작 수행
        window.location.href = "/mypage"; // 원하는 페이지로 이동
      } else {
        console.error("Failed to access mypage");
      }
    } catch (error) {
      console.error("Failed to access mypage", error);
    }
  };

  return (
    <>
      <nav className="min-w-96 max-w-screen-sm border h-16 fixed inset-x-0 bottom-0 mx-auto flex justify-between bg-white">
        <button onClick={() => setOpenReportModal(true)} className={LINK_STYLE}>
          <CommentIcon size="md" color="3F51B5" />
          <p className={TEXT_STYLE}>제보</p>
        </button>
        <Link to="/" className={LINK_STYLE}>
          <HouseIcon size="md" color="3F51B5" />
          <p className={TEXT_STYLE}>메인</p>
        </Link>
        <button onClick={handleMypageClick} className={LINK_STYLE}>
          <UserIcon size="md" color="3F51B5" />
          <p className={TEXT_STYLE}>마이페이지</p>
        </button>
      </nav>
      {openReportModal && (
        <ModalPortal>
          <Modal onClose={() => setOpenReportModal(false)}>
            <FacilityOrRoadModal />
          </Modal>
        </ModalPortal>
      )}
    </>
  );
};

export default Navbar;
