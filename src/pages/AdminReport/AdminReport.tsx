import { useLocation } from "react-router-dom";
import AdminReportsTable from "../../components/AdminReportsTable/AdminReportsTable";

const facilityData = [
  {
    id: 1,
    name: "청년취업사관학교",
    type: "기타",
    description: "계단은 있지만 옆에 전용 경사로가 있어서 이용하기 편해요",
    informerEmail: "123456@naver.com",
    status: "PENDING",
    createdAt: "2022-22-22",
    updatedAt: "3033-33-33",
  },
  {
    id: 2,
    name: "청년취업사관학교",
    type: "기타",
    description: "계단은 있지만 옆에 전용 경사로가 있어서 이용하기 편해요",
    informerEmail: "123456@naver.com",
    status: "PENDING",
    createdAt: "2022-22-22",
    updatedAt: "3033-33-33",
  },
  {
    id: 3,
    name: "청년취업사관학교",
    type: "기타",
    description: "계단은 있지만 옆에 전용 경사로가 있어서 이용하기 편해요",
    informerEmail: "123456@naver.com",
    status: "PENDING",
    createdAt: "2022-22-22",
    updatedAt: "3033-33-33",
  },
  {
    id: 4,
    name: "청년취업사관학교",
    type: "기타",
    description: "계단은 있지만 옆에 전용 경사로가 있어서 이용하기 편해요",
    informerEmail: "123456@naver.com",
    status: "PENDING",
    createdAt: "2022-22-22",
    updatedAt: "3033-33-33",
  },
  {
    id: 5,
    name: "청년취업사관학교",
    type: "기타",
    description: "계단은 있지만 옆에 전용 경사로가 있어서 이용하기 편해요",
    informerEmail: "123456@naver.com",
    status: "PENDING",
    createdAt: "2022-22-22",
    updatedAt: "3033-33-33",
  },
];

const roadData: any[] = [];

const AdminReport = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <AdminReportsTable
        data={pathname.includes("facility") ? facilityData : roadData}
      />
    </div>
  );
};

export default AdminReport;
