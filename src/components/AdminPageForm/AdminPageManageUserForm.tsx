import React, { useState, useEffect } from "react";

// 회원 데이터 타입 정의
interface Member {
  id: number;
  nickname: string;
  email: string;
  loginType: string;
  role: string;
  isBlocked: boolean;
  createdAt: string;
}

// 임시 데이터
const tempMembers: Member[] = [
  {
    id: 1,
    nickname: "User1",
    email: "user1@example.com",
    loginType: "Email",
    role: "Admin",
    isBlocked: false,
    createdAt: "2023-01-01T12:00:00Z",
  },
  {
    id: 2,
    nickname: "User2",
    email: "user2@example.com",
    loginType: "Email",
    role: "User",
    isBlocked: false,
    createdAt: "2023-01-02T12:00:00Z",
  },
  {
    id: 3,
    nickname: "User3",
    email: "user3@example.com",
    loginType: "Email",
    role: "User",
    isBlocked: true,
    createdAt: "2023-01-03T12:00:00Z",
  },
  {
    id: 4,
    nickname: "User4",
    email: "user4@example.com",
    loginType: "Email",
    role: "User",
    isBlocked: false,
    createdAt: "2023-01-04T12:00:00Z",
  },
  {
    id: 5,
    nickname: "User5",
    email: "user5@example.com",
    loginType: "Email",
    role: "User",
    isBlocked: false,
    createdAt: "2023-01-05T12:00:00Z",
  },
  {
    id: 6,
    nickname: "User6",
    email: "user6@example.com",
    loginType: "Email",
    role: "User",
    isBlocked: false,
    createdAt: "2023-01-06T12:00:00Z",
  },
  {
    id: 7,
    nickname: "User7",
    email: "user7@example.com",
    loginType: "Email",
    role: "User",
    isBlocked: true,
    createdAt: "2023-01-07T12:00:00Z",
  },
  {
    id: 8,
    nickname: "User8",
    email: "user8@example.com",
    loginType: "Email",
    role: "User",
    isBlocked: false,
    createdAt: "2023-01-08T12:00:00Z",
  },
  {
    id: 9,
    nickname: "User9",
    email: "user9@example.com",
    loginType: "Email",
    role: "User",
    isBlocked: false,
    createdAt: "2023-01-09T12:00:00Z",
  },
  {
    id: 10,
    nickname: "User10",
    email: "user10@example.com",
    loginType: "Email",
    role: "User",
    isBlocked: false,
    createdAt: "2023-01-10T12:00:00Z",
  },
];

const AdminPageManageUserForm = () => {
  const [page, setPage] = useState(1);
  const [members, setMembers] = useState<Member[]>([]); // 타입 지정

  const itemsPerPage = 10;
  const totalPages = Math.ceil(tempMembers.length / itemsPerPage);

  useEffect(() => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setMembers(tempMembers.slice(startIndex, endIndex));
  }, [page]);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="p-4">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">No.</th>
            <th className="py-2">아이디</th>
            <th className="py-2">닉네임</th>
            <th className="py-2">이메일</th>
            <th className="py-2">로그인 타입</th>
            <th className="py-2">유저 권한</th>
            <th className="py-2">블락</th>
            <th className="py-2">가입 일시</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={member.id} className="text-center">
              <td className="py-2">{(page - 1) * itemsPerPage + index + 1}</td>
              <td className="py-2">{member.id}</td>
              <td className="py-2">{member.nickname}</td>
              <td className="py-2">{member.email}</td>
              <td className="py-2">{member.loginType}</td>
              <td className="py-2">{member.role}</td>
              <td className="py-2">{member.isBlocked ? "Yes" : "No"}</td>
              <td className="py-2">
                {new Date(member.createdAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <button
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
          onClick={() => handlePageChange(page - 1)}
          disabled={page <= 1}
        >
          이전
        </button>
        <span>
          {page} / {totalPages}
        </span>
        <button
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
          onClick={() => handlePageChange(page + 1)}
          disabled={page >= totalPages}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default AdminPageManageUserForm;
