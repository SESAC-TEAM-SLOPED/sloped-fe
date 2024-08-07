import { useSearchParams } from "react-router-dom";

const BUTTON_STYLE = "px-3 py-1 text-sm rounded-full shadow-md";

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
        className={`${BUTTON_STYLE} ${searchParams.get("category") === "all" ? "bg-blue-600 text-white font-bold" : "bg-white"}`}
      >
        전체
      </button>
      <button
        onClick={() => {
          setSearchParams({ category: "CAFE" });
          onClick();
        }}
        className={`${BUTTON_STYLE} ${searchParams.get("category") === "CAFE" ? "bg-blue-600 text-white font-bold" : "bg-white"}`}
      >
        카페
      </button>
      <button
        onClick={() => {
          setSearchParams({ category: "RESTAURANT" });
          onClick();
        }}
        className={`${BUTTON_STYLE} ${searchParams.get("category") === "RESTAURANT" ? "bg-blue-600 text-white font-bold" : "bg-white"}`}
      >
        식당
      </button>
      <button
        onClick={() => {
          setSearchParams({ category: "PUBLIC_SPACE" });
          onClick();
        }}
        className={`${BUTTON_STYLE} ${searchParams.get("category") === "PUBLIC_SPACE" ? "bg-blue-600 text-white font-bold" : "bg-white"}`}
      >
        공공장소
      </button>
      <button
        onClick={() => {
          setSearchParams({ category: "ETC" });
          onClick();
        }}
        className={`${BUTTON_STYLE} ${searchParams.get("category") === "ETC" ? "bg-blue-600 text-white font-bold" : "bg-white"}`}
      >
        기타
      </button>
    </div>
  );
};

export default Categories;
