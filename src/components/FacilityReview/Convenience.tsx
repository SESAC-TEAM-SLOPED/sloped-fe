type Props = {
  comfortableCount: number;
  uncomfortableCount: number;
};

const Convenience = ({ comfortableCount, uncomfortableCount }: Props) => {
  return (
    <div className="flex items-center gap-10 mt-1">
      <div className="flex items-center gap-2">
        <div className="bg-[#F1F9F1] text-[#4caf50] flex justify-center items-center w-20 h-9 rounded-full text-center">
          <p>편해요</p>
        </div>
        <span>{comfortableCount}</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="bg-[#FFF0EF] text-[#F8837C] flex justify-center items-center w-20 h-9 rounded-full text-center">
          <p>불편해요</p>
        </div>
        <span>{uncomfortableCount}</span>
      </div>
    </div>
  );
};
export default Convenience;
