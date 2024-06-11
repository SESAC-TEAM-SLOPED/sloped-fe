type Props = {
  labelText: string;
  width: number;
};

const Input = ({ labelText, width }: Props) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="input" className="text-[#666666] text-sm">
        {labelText}
      </label>
      <input
        id="input"
        type="text"
        className={`border-b h-7 border-[#949494] outline-none text-[#404040] w-[${width}px]`}
      />
    </div>
  );
};

export default Input;
