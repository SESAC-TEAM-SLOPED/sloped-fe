import { useSearchParams } from "react-router-dom";

const Categories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className="flex absolute z-10 gap-4">
      <button
        onClick={() => setSearchParams({ category: "all" })}
        className="px-3 py-1 text-sm bg-white rounded-full shadow-md"
      >
        전체
      </button>
      <button
        onClick={() => setSearchParams({ category: "cafe" })}
        className="px-3 py-1 text-sm bg-white rounded-full shadow-md"
      >
        카페
      </button>
      <button
        onClick={() => setSearchParams({ category: "tour" })}
        className="px-3 py-1 text-sm bg-white rounded-full shadow-md"
      >
        관광지
      </button>
      <button
        onClick={() => setSearchParams({ category: "hospital" })}
        className="px-3 py-1 text-sm bg-white rounded-full shadow-md"
      >
        병원
      </button>
      <button
        onClick={() => setSearchParams({ category: "etc" })}
        className="px-3 py-1 text-sm bg-white rounded-full shadow-md"
      >
        기타
      </button>
    </div>
  );
};

export default Categories;
