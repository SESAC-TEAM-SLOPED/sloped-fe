import { FaInfoCircle } from "react-icons/fa";

type Props = {
  color: "3F51B5";
};

const InformationIcon = ({ color }: Props) => {
  return <FaInfoCircle size="15" color={color} />;
};

export default InformationIcon;
