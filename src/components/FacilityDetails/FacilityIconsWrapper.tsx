import {
  SlopeIcon,
  EntranceBarrierIcon,
  ElevatorIcon,
} from "../icons/FacilityBarrierIcon";

type Props = {
  hasSlope?: boolean;
  isEntranceBarrier?: boolean;
  hasElevator?: boolean;
};

const FacilityIconsWrapper = ({
  hasSlope,
  isEntranceBarrier,
  hasElevator,
}: Props) => {
  const size = 25;
  const color = "#3F51B5";

  return (
    <div className="flex space-x-6">
      {hasSlope && (
        <IconWithLabel
          icon={<SlopeIcon size={size} color={color} />}
          text="경사로 있음"
          color={color}
        />
      )}
      {isEntranceBarrier && (
        <IconWithLabel
          icon={<EntranceBarrierIcon size={size} color={color} />}
          text="입구턱 있음"
          color={color}
        />
      )}
      {hasElevator && (
        <IconWithLabel
          icon={<ElevatorIcon size={size} color={color} />}
          text="엘리베이터 있음"
          color={color}
        />
      )}
    </div>
  );
};

type IconWithLabelProps = {
  icon: JSX.Element;
  text: string;
  color: string;
};

const IconWithLabel = ({ icon, text, color }: IconWithLabelProps) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      {icon}
      <p className="text-sm" style={{ color }}>
        {text}
      </p>
    </div>
  );
};

export default FacilityIconsWrapper;
