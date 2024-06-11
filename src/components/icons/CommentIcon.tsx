import { FaCommentDots } from "react-icons/fa";

type Props = {
  color: "3F51B5";
  size: "sm" | "md";
};

const sizeOption = {
  sm: 20,
  md: 25,
};

const CommentIcon = ({ color, size }: Props) => {
  return <FaCommentDots size={sizeOption[size]} color={color} />;
};

export default CommentIcon;
