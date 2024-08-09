import React from "react";
import { FaRobot } from "react-icons/fa"; // react-icons 라이브러리 사용

type Props = {
  summary: string;
};

const AISummary = ({ summary }: Props) => {
  return (
    <div className="bg-blue-50 rounded-lg p-4 shadow-md">
      <div className="flex items-start">
        <FaRobot className="text-blue-500 text-2xl mr-3 mt-1" />
        <div>
          <h3 className="text-lg font-semibold text-blue-700 mb-2">
            AI 한 줄 요약
          </h3>
          <p className="text-gray-700 leading-relaxed">{summary}</p>
        </div>
      </div>
    </div>
  );
};

export default AISummary;
