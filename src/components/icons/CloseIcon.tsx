import { IoMdClose } from "react-icons/io";

type Props = {
  color: string;
};

const CloseIcon = ({ color }: Props) => {
  return <IoMdClose size="25" color={color} />;
};

export default CloseIcon;
