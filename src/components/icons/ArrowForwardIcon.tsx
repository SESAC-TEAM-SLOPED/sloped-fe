import { IoIosArrowForward } from "react-icons/io";

type RightArrowIconProps = {
  color: string;
  size: number;
};

const RightArrowIcon = ({ color, size = 18 }: RightArrowIconProps) => {
  return <IoIosArrowForward size={size} color={color} />;
};
export default RightArrowIcon;
