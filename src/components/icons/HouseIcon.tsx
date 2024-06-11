import { FaHouse } from "react-icons/fa6";

type Props = {
  color: "3F51B5";
  size: "sm" | "md";
};

const sizeOption = {
  sm: 20,
  md: 25,
};

const HouseIcon = ({ color, size }: Props) => {
  return <FaHouse color={color} size={sizeOption[size]} />;
};

export default HouseIcon;
