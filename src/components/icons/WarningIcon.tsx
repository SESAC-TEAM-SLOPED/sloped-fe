import { IoWarning } from "react-icons/io5";

type Props = {
  active: boolean;
};

const WarningIcon = ({ active }: Props) => {
  return <IoWarning size="25px" color={active ? "white" : "#F8837C"} />;
};

export default WarningIcon;
