import React from "react";

type Props = {
  color?: "3F51B5";
  size?: "full" | "content"; // 텍스트 크기에 맞게 or 화면에 너비가 꽉 차게
  text: string; // 박스 안 텍스트
};

const RoundedBox: React.FC<Props> = ({
  color = "E4E8FF",
  size = "content",
  text,
}) => {
  const backgroundColor = `#${color}`;
  const widthClass = size === "full" ? "w-full" : "w-auto";

  return (
    <div
      className={`rounded-lg p-4 ${widthClass} flex justify-center items-center`}
      style={{ backgroundColor }}
    >
      {text}
    </div>
  );
};

export default RoundedBox;
