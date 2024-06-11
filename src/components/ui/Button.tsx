type Props = {
  color?: "3F51B5"; // button 색
  size?: "full" | "content"; // button 사이즈 텍스트 크기에 맞게 or 화면에 너비가 꽉 차게
  text: string; // 버튼 텍스트
  onClick: () => void; // 버튼 이벤트
};

const sizeOption = {
  content: "px-[20px] py-[10px]",
  full: "py-[10px] w-full",
};

const Button = ({
  color = "3F51B5",
  size = "content",
  text,
  onClick,
}: Props) => {
  return (
    <button
      type="button"
      className={`rounded-md drop-shadow text-white bg-[#${color}] ${sizeOption[size]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
