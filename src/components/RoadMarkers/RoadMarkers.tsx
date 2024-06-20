import Marker from "../Map/Marker";

type Props = {
  roads: any[];
  map: any;
  clickedId: number;
  onClick: (id: number) => void;
};

const RoadMarkers = ({ roads, map, clickedId, onClick }: Props) => {
  return (
    <>
      {roads.map((location) => (
        <Marker
          key={location.id}
          map={map}
          lat={location.latitude}
          lng={location.longitude}
          icon="warning"
          clickedId={clickedId}
          id={location.id}
          onClick={() => onClick(location.id)}
        />
      ))}
    </>
  );
};

export default RoadMarkers;
