import React, { useState } from "react";
import api from "../../service/api";

type Props = {
  setIsIdVerified: (verified: boolean) => void;
  setActiveTab: (tab: string) => void;
  setMemberId: (id: string) => void;
};

const IdCheckBeforePasswordForm = ({
  setIsIdVerified,
  setActiveTab,
  setMemberId,
}: Props) => {
  const [id, setId] = useState("");
  const [error, setError] = useState("");

  const handleDuplicateCheck = async () => {
    try {
      const response = await api.post("/api/auth/duplicate-check/find-id", {
        memberId: id,
      });
      if (response.status === 200) {
        // 아이디가 존재
        setIsIdVerified(true);
        setMemberId(id); // 확인한 아이디 저장
        setActiveTab("password"); // 다음 단계로 이동
      } else {
        setError("없는 아이디입니다. 확인해주세요.");
      }
    } catch (error: any) {
      setError("없는 아이디입니다. 확인해주세요.");
    }
  };

  return (
    <div
      style={{ minHeight: "80vh" }}
      className="flex flex-col items-center justify-center min-h-screen space-y-6 bg-white"
    >
      <h1 className="text-xl font-bold mb-6">아이디 확인</h1>

      <div className="w-[300px] mb-4">
        <label htmlFor="id" className="text-sm text-gray-700 mb-2">
          아이디
        </label>
        <div className="flex items-center border-b border-gray-400 py-2">
          <input
            type="text"
            id="id"
            className="flex-grow outline-none"
            placeholder="아이디 입력"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
      </div>

      {error && <div className="w-[300px] mb-4 text-red-500">{error}</div>}

      <button
        className="w-[300px] h-[40px] rounded-lg mb-4 bg-signiture text-white"
        onClick={handleDuplicateCheck}
      >
        아이디 중복 확인
      </button>
    </div>
  );
};

export default IdCheckBeforePasswordForm;
