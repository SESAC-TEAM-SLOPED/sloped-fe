import { FiUpload } from "react-icons/fi";

type Props = {
  color: string;
};

const UploadImage = ({ color }: Props) => {
  return <FiUpload size="35" color={color} />;
};

export default UploadImage;
