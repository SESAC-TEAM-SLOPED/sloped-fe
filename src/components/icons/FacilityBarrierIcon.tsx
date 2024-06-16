import { FaWheelchair, FaDoorClosed } from "react-icons/fa";
import { MdElevator } from "react-icons/md";

type Props = {
  color: string;
  size: number;
};

export const SlopeIcon = ({ color, size }: Props) => (
  <FaWheelchair size={size} color={color} />
);

export const EntranceBarrierIcon = ({ color, size }: Props) => (
  <FaDoorClosed size={size} color={color} />
);

export const ElevatorIcon = ({ color, size }: Props) => (
  <MdElevator size={size} color={color} />
);
