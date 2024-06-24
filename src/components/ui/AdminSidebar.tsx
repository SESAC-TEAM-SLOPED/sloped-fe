import React, { useState } from "react";
import {
  BsPerson,
  BsBuilding,
  BsExclamationTriangle,
  BsStar,
  BsClipboard,
  BsChevronDown,
  BsChevronUp,
} from "react-icons/bs";

type SidebarProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  userId: string;
  pendingFacilityReports: number;
  pendingRoadReports: number;
};

const AdminSidebar = ({
  activeTab,
  setActiveTab,
  userId,
  pendingFacilityReports,
  pendingRoadReports,
}: SidebarProps) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <aside className="w-64 bg-gray-800 text-white">
      <div className="p-4 font-bold text-xl">함께가길</div>
      <div className="px-4 py-2">{userId}</div>
      <button
        className="block px-4 py-2 text-left text-blue-500"
        onClick={() => (window.location.href = "/")}
      >
        서비스 바로가기
      </button>
      <nav className="mt-10">
        <button
          className={`block px-4 py-2 w-full text-left ${activeTab === "members" ? "bg-gray-700" : ""}`}
          onClick={() => setActiveTab("members")}
        >
          <BsPerson className="inline-block mr-2" />
          회원 관리
        </button>
        <button
          className={`block px-4 py-2 w-full text-left ${activeTab === "facilities" ? "bg-gray-700" : ""}`}
          onClick={() => setActiveTab("facilities")}
        >
          <BsBuilding className="inline-block mr-2" />
          시설 관리
        </button>
        <button
          className={`block px-4 py-2 w-full text-left ${activeTab === "roads" ? "bg-gray-700" : ""}`}
          onClick={() => setActiveTab("roads")}
        >
          <BsExclamationTriangle className="inline-block mr-2" />
          위험 도로 관리
        </button>
        <button
          className={`block px-4 py-2 w-full text-left ${activeTab === "reviews" ? "bg-gray-700" : ""}`}
          onClick={() => setActiveTab("reviews")}
        >
          <BsStar className="inline-block mr-2" />
          리뷰 관리
        </button>
        <button
          className={`block px-4 py-2 w-full text-left ${activeTab === "pendingReports" ? "bg-gray-700" : ""}`}
          onClick={() => {
            setActiveTab("pendingReports");
            setIsSubMenuOpen(!isSubMenuOpen);
          }}
        >
          <BsClipboard className="inline-block mr-2" />
          승인 대기 제보
          {isSubMenuOpen ? (
            <BsChevronUp className="inline-block ml-2" />
          ) : (
            <BsChevronDown className="inline-block ml-2" />
          )}
        </button>
        {isSubMenuOpen && (
          <div className="ml-4">
            <button
              className={`block px-4 py-2 w-full text-left ${activeTab === "pendingFacilities" ? "bg-gray-700" : ""}`}
              onClick={() => setActiveTab("pendingFacilities")}
            >
              시설{" "}
              <span className="text-gray-400">({pendingFacilityReports})</span>
            </button>
            <button
              className={`block px-4 py-2 w-full text-left ${activeTab === "pendingRoads" ? "bg-gray-700" : ""}`}
              onClick={() => setActiveTab("pendingRoads")}
            >
              도로 <span className="text-gray-400">({pendingRoadReports})</span>
            </button>
          </div>
        )}
      </nav>
    </aside>
  );
};

export default AdminSidebar;
