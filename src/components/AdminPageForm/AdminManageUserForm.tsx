import React, { useState, useEffect } from "react";

// 회원 데이터 타입 정의
interface Member {
  id: string;
  nickname: string;
  email: string;
  loginType: string;
  role: string;
  isBlocked: boolean;
  createdAt: string;
}

interface AdminManageUserFormProps {
  data: Member[];
}

const AdminManageUserForm: React.FC<AdminManageUserFormProps> = ({ data }) => {
  const [page, setPage] = useState(1);
  const [members, setMembers] = useState<Member[]>([]);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setMembers(data.slice(startIndex, endIndex));
  }, [page, data]);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="p-4">
      <table className="min-w-full bg-white">
        <thead className="bg-[#3F51B5] text-white">
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

export default AdminManageUserForm;
