import SearchIcon from "../icons/SearchIcon";

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        className="px-2 pr-[40px] w-96 h-10 bg-white border border-[#acacac] rounded-lg shadow-lg outline-none"
        placeholder="검색"
      />
      <button className="absolute top-1/2 right-3 transform translate-y-[-50%]">
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchBar;
