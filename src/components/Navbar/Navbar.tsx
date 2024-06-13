import { Link } from "react-router-dom";
import CommentIcon from "../icons/CommentIcon";
import HouseIcon from "../icons/HouseIcon";
import UserIcon from "../icons/UserIcon";

const LINK_STYLE = "flex flex-col justify-center items-center h-16 w-1/3";
const TEXT_STYLE = "text-sm text-[#404040]";

const Navbar = () => {
  return (
    <nav className="min-w-96 max-w-screen-sm border h-16 fixed inset-x-0 bottom-0 mx-auto flex justify-between bg-white">
      <button className={LINK_STYLE}>
        <CommentIcon size="md" color="3F51B5" />
        <p className={TEXT_STYLE}>제보</p>
      </button>
      <Link to="/" className={LINK_STYLE}>
        <HouseIcon size="md" color="3F51B5" />
        <p className={TEXT_STYLE}>메인</p>
      </Link>
      <Link to="" className={LINK_STYLE}>
        <UserIcon size="md" color="3F51B5" />
        <p className={TEXT_STYLE}>마이페이지</p>
      </Link>
    </nav>
  );
};

export default Navbar;
