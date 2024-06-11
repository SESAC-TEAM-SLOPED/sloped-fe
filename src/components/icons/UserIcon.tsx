import { FaUser } from "react-icons/fa";

type Props = {
  color: "3F51B5";
  size: "sm" | "md";
};

const sizeOption = {
  sm: 20,
  md: 25,
};

const UserIcon = ({ color, size }: Props) => {
  return <FaUser color={color} size={sizeOption[size]} />;
};

export default UserIcon;
