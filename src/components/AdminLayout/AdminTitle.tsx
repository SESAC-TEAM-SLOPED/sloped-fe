import { useLocation } from "react-router-dom";
import Button from "../ui/Button";

const AdminTitle = () => {
  const location = useLocation();
  console.log(location);

  const getHeaderTitle = () => {
    if (
      location.pathname.startsWith("/admin/facility/") &&
      location.pathname.split("/").length === 4
    ) {
      return "시설 상세 정보";
    } // 상세 정보 페이지는 if문으로 분기 처리

    if (
      location.pathname.startsWith("/admin/review/") &&
      location.pathname.split("/").length === 4
    ) {
      return "리뷰 상세 정보";
    }

    if (
      location.pathname.startsWith("/admin/road/") &&
      location.pathname.split("/").length === 4
    ) {
      return "통행 불편 상세 정보";
    }

    switch (location.pathname) {
      case "/admin/user":
        return "회원 관리";
      case "/admin/facility":
        return "시설 관리";
      case "/admin/road":
        return "통행 불편 제보 관리";
      case "/admin/review":
        return "리뷰 관리";
      case "pendingReports":
        return "승인 대기 제보";
      case "/admin/reports/facility":
        return "승인 대기 시설";
      case "pendingRoads":
        return "승인 대기 도로";
      default:
        return "운영자 페이지";
    }
  };

  return (
    <header className="w-full bg-white shadow py-4 px-10 flex justify-between items-center">
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
        <h1 className="text-xl font-bold">{getHeaderTitle()}</h1>
        <Button text="로그아웃" onClick={() => {}} />
      </div>
    </header>
  );
};

export default AdminTitle;
