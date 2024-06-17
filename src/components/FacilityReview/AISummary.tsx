type Props = {
  summary: string;
};

const AISummary = ({ summary }: Props) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full rounded-full border-2 border-[#BEC8FF] text-[#404040] bg-white px-4 py-1 text-center ">
        {summary}
      </div>
    </div>
  );
};

export default AISummary;
