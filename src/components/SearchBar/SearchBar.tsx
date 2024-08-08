import { useState } from "react";
import SearchIcon from "../icons/SearchIcon";
import { useNavigate } from "react-router-dom";

type Props = {
  searchedKeyword?: string | null;
};

const SearchBar = ({ searchedKeyword }: Props) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const navigate = useNavigate();

  const onSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate(`/search?keyword=${searchKeyword}`);
  };

  return (
    <div className="relative w-full">
      <form onSubmit={(e) => onSearch(e)}>
        <input
          type="text"
          className="px-2 w-full pr-[40px] h-10 bg-white border border-[#acacac] rounded-lg shadow-lg outline-none"
          placeholder="검색"
          defaultValue={searchedKeyword || searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
        <button className="absolute top-1/2 right-3 transform translate-y-[-50%]">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
