import { useSearchParams } from "react-router-dom";

const BUTTON_STYLE = "px-3 py-1 text-sm bg-white rounded-full shadow-md";

type Props = {
  onClick: () => void;
};

const Categories = ({ onClick }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="flex gap-4">
      <button
        onClick={() => {
          setSearchParams({ category: "all" });
          onClick();
        }}
        className={`${BUTTON_STYLE} ${searchParams.get("category") === "all" && "bg-blue-600 text-white font-bold"}`}
      >
        전체
      </button>
      <button
        onClick={() => {
          setSearchParams({ category: "cafe" });
          onClick();
        }}
        className={`${BUTTON_STYLE} ${searchParams.get("category") === "cafe" && "bg-blue-600 text-white font-bold"}`}
      >
        카페
      </button>
      <button
        onClick={() => {
          setSearchParams({ category: "tour" });
          onClick();
        }}
        className={`${BUTTON_STYLE} ${searchParams.get("category") === "tour" && "bg-blue-600 text-white font-bold"}`}
      >
        관광지
      </button>
      <button
        onClick={() => {
          setSearchParams({ category: "hospital" });
          onClick();
        }}
        className={`${BUTTON_STYLE} ${searchParams.get("category") === "hospital" && "bg-blue-600 text-white font-bold"}`}
      >
        병원
      </button>
      <button
        onClick={() => {
          setSearchParams({ category: "etc" });
          onClick();
        }}
        className={`${BUTTON_STYLE} ${searchParams.get("category") === "etc" && "bg-blue-600 text-white font-bold"}`}
      >
        기타
      </button>
    </div>
  );
};

export default Categories;
