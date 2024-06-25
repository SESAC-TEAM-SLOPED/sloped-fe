import React from "react";
import AdminManageUserForm from "../../components/AdminPageForm/AdminManageUserForm";

// 임시 데이터
const tempMembers = [
  {
    id: "id1",
    nickname: "User1",
    email: "user1@example.com",
    loginType: "Email",
    role: "Admin",
    isBlocked: false,
    createdAt: "2023-01-01T12:00:00Z",
  },
  {
    id: "id2",
    nickname: "User2",
    email: "user2@example.com",
    loginType: "Email",
    role: "User",
    isBlocked: false,
    createdAt: "2023-01-02T12:00:00Z",
  },
  {
    id: "id3",
    nickname: "User3",
    email: "user3@example.com",
    loginType: "Email",
    role: "User",
    isBlocked: true,
    createdAt: "2023-01-03T12:00:00Z",
  },
  {
    id: "id4",
    nickname: "User4",
    email: "user4@example.com",
    loginType: "Email",
    role: "User",
    isBlocked: false,
    createdAt: "2023-01-04T12:00:00Z",
  },
  {
    id: "id5",
    nickname: "User5",
    email: "user5@example.com",
    loginType: "Email",
    role: "User",
    isBlocked: false,
    createdAt: "2023-01-05T12:00:00Z",
  },
  {
    id: "id6",
    nickname: "User6",
    email: "user6@example.com",
    loginType: "Email",
    role: "User",
    isBlocked: false,
    createdAt: "2023-01-06T12:00:00Z",
  },
  {
    id: "id7",
    nickname: "User7",
    email: "user7@example.com",
    loginType: "Email",
    role: "User",
    isBlocked: true,
    createdAt: "2023-01-07T12:00:00Z",
  },
  {
    id: "id8",
    nickname: "User8",
    email: "user8@example.com",
    loginType: "Email",
    role: "User",
    isBlocked: false,
    createdAt: "2023-01-08T12:00:00Z",
  },
  {
    id: "id9",
    nickname: "User9",
    email: "user9@example.com",
    loginType: "Email",
    role: "User",
    isBlocked: false,
    createdAt: "2023-01-09T12:00:00Z",
  },
  {
    id: "id10",
    nickname: "User10",
    email: "user10@example.com",
    loginType: "Email",
    role: "User",
    isBlocked: false,
    createdAt: "2023-01-10T12:00:00Z",
  },
];

const AdminManageUser = () => {
  return (
    <div>
      <AdminManageUserForm data={tempMembers} />
    </div>
  );
};

export default AdminManageUser;
