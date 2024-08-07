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
  const falseColor = "#909090";

  return (
    <div className="flex space-x-6">
      {hasSlope ? (
        <IconWithLabel
          icon={<SlopeIcon size={size} color={color} />}
          text="경사로 있음"
          color={color}
        />
      ) : (
        <IconWithLabel
          icon={<SlopeIcon size={size} color={falseColor} />}
          text="경사로 없음"
          color={falseColor}
        />
      )}
      {isEntranceBarrier ? (
        <IconWithLabel
          icon={<EntranceBarrierIcon size={size} color={color} />}
          text="입구턱 있음"
          color={color}
        />
      ) : (
        <IconWithLabel
          icon={<EntranceBarrierIcon size={size} color={falseColor} />}
          text="입구턱 없음"
          color={falseColor}
        />
      )}
      {hasElevator ? (
        <IconWithLabel
          icon={<ElevatorIcon size={size} color={color} />}
          text="엘리베이터 있음"
          color={color}
        />
      ) : (
        <IconWithLabel
          icon={<ElevatorIcon size={size} color={falseColor} />}
          text="엘리베이터 없음"
          color={falseColor}
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
