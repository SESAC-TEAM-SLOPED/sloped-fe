import React from "react";

type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const TabSwitcher = ({ activeTab, setActiveTab }: Props) => {
  return (
    <div className="flex justify-around border-b-2 mb-4 w-full">
      <button
        className={`flex-1 py-2 text-center ${activeTab === "id" ? "border-b-2 border-blue-500 text-blue-500 font-bold" : "text-gray-500"}`}
        onClick={() => setActiveTab("id")}
      >
        아이디 찾기
      </button>
      <button
        className={`flex-1 py-2 text-center ${activeTab === "password" ? "border-b-2 border-blue-500 text-blue-500 font-bold" : "text-gray-500"}`}
        onClick={() => setActiveTab("password")}
      >
        비밀번호 찾기
      </button>
    </div>
  );
};

export default TabSwitcher;
