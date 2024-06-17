type Props = {
  isConvenient: boolean;
  isClicked?: boolean;
};

const IsConvenient = ({ isConvenient, isClicked }: Props) => {
  const IS_CONVENIENT_STYLE = `bg-[#F1F9F1] text-[#4caf50] ${isClicked && "border-2 border-[#4caf50]"}`;
  const IS_NOT_CONVENIENT_STYLE = `bg-[#fff0ef] text-[#f8837c] ${isClicked && "border-2 border-[#f8837c]"}`;

  return (
    <div
      className={`${isConvenient ? IS_CONVENIENT_STYLE : IS_NOT_CONVENIENT_STYLE} flex justify-center items-center w-20 h-9 rounded-full`}
    >
      <p>{isConvenient ? "편해요" : "불편해요"}</p>
    </div>
  );
};

export default IsConvenient;
