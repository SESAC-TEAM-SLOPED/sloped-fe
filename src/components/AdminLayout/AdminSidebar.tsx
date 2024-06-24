import { useState } from "react";
import {
  BsBuilding,
  BsChevronDown,
  BsChevronUp,
  BsClipboard,
  BsExclamationTriangle,
  BsPerson,
  BsStar,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const userId = "운영자1";
  const [activeTab, setActiveTab] = useState("");
  const pendingFacilityReports = 1;
  const pendingRoadReports = 1;

  return (
    <aside className="w-80 min-h-screen bg-gray-800 text-white">
      <h1 className="px-10 py-6 font-bold text-2xl border-b border-b-[#757575]">
        함께가길
      </h1>
      <div className="px-10 py-5 border-b border-b-[#757575]">{userId}</div>
      <Link
        className="block px-10 py-5 text-left border-b border-b-[#757575]"
        to="/"
      >
        서비스 바로가기
      </Link>
      <nav>
        <p className="text-sm text-[#8D8D8D] px-10 pt-5">사이트 관리</p>
        <Link
          to="/admin/members"
          className={`block px-10 py-5 w-full text-left ${activeTab === "members" ? "bg-[#1A6CFF]" : ""}`}
          onClick={() => setActiveTab("members")}
        >
          <BsPerson className="inline-block mr-2" />
          회원 관리
        </Link>
        <Link
          to="/admin/facility"
          className={`block px-10 py-5 w-full text-left ${activeTab === "facilities" ? "bg-[#1A6CFF]" : ""}`}
          onClick={() => setActiveTab("facilities")}
        >
          <BsBuilding className="inline-block mr-2" />
          시설 관리
        </Link>
        <Link
          to="/admin/roads"
          className={`block px-10 py-5 w-full text-left ${activeTab === "roads" ? "bg-[#1A6CFF]" : ""}`}
          onClick={() => setActiveTab("roads")}
        >
          <BsExclamationTriangle className="inline-block mr-2" />
          위험 도로 관리
        </Link>
        <Link
          to="/admin/review"
          className={`block px-10 py-5 w-full text-left ${activeTab === "reviews" ? "bg-[#1A6CFF]" : ""}`}
          onClick={() => setActiveTab("reviews")}
        >
          <BsStar className="inline-block mr-2" />
          리뷰 관리
        </Link>
        <button
          className={`flex items-center px-10 py-5 w-full text-left ${activeTab === "pendingReports" ? "bg-[#1A6CFF]" : ""}`}
          onClick={() => {
            setActiveTab("pendingReports");
            setIsSubMenuOpen(!isSubMenuOpen);
          }}
        >
          <BsClipboard className="inline-block mr-2" />
          <p>승인 대기 제보</p>
          <p className="ml-2 text-xs bg-[#757575] px-2 py-1 rounded-full">
            {pendingFacilityReports + pendingRoadReports}
          </p>
          {isSubMenuOpen ? (
            <BsChevronUp className="inline-block ml-2" />
          ) : (
            <BsChevronDown className="inline-block ml-2" />
          )}
        </button>
        {isSubMenuOpen && (
          <div className="">
            <Link
              to="/admin/reports/facility"
              className={`flex items-center px-16 py-5 w-full text-left ${activeTab === "pendingFacilities" ? "bg-[#1A6CFF]" : ""}`}
              onClick={() => setActiveTab("pendingFacilities")}
            >
              시설
              <span className="ml-2 text-xs bg-[#757575] px-2 py-1 rounded-full">
                {pendingFacilityReports}
              </span>
            </Link>
            <Link
              to="/admin/reports/road"
              className={`flex items-center px-16 py-5 w-full text-left ${activeTab === "pendingRoads" ? "bg-[#1A6CFF]" : ""}`}
              onClick={() => setActiveTab("pendingRoads")}
            >
              도로
              <span className="ml-2 text-xs bg-[#757575] px-2 py-1 rounded-full">
                {pendingRoadReports}
              </span>
            </Link>
          </div>
        )}
      </nav>
    </aside>
  );
};

export default AdminSidebar;
