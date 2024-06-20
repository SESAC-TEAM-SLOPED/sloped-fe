import { FaStar } from "react-icons/fa";

type Props = {
  active: boolean;
};

const StarIcon = ({ active }: Props) => {
  return <FaStar size="25px" color={active ? "white" : "#FFF500"} />;
};

export default StarIcon;
