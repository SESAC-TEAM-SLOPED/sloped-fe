import { FaPencilAlt } from "react-icons/fa";

type Props = {
  color?: string;
  size?: number;
};

const ReportIcon = ({ color = "#F8837C", size = 18 }: Props) => {
  return <FaPencilAlt size={size} color={color} />;
};

export default ReportIcon;
