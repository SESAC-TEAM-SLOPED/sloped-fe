import { FaChevronRight } from "react-icons/fa";

type Props = {
  color?: string;
  size?: number;
};

const RightArrowIcon = ({ color = "#F8837C", size = 15 }: Props) => {
  return <FaChevronRight size={size} color={color} />;
};

export default RightArrowIcon;
