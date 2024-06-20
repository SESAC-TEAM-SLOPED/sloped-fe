import { useSearchParams } from "react-router-dom";
import { Facility } from "../../types/facility";
import Marker from "../Map/Marker";

type Props = {
  facilities: Facility[];
  map: any;
  clickedId: number;
  onClick: (id: number) => void;
};
const FacilityMarkers = ({ facilities, map, clickedId, onClick }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      {facilities.map((location) => (
        <Marker
          key={location.id}
          map={map}
          lat={location.latitude}
          lng={location.longitude}
          icon="pin"
          clickedId={clickedId}
          id={location.id}
          onClick={() => {
            onClick(location.id);
            setSearchParams({
              category: searchParams.get("category") || "",
              id: location.id.toString(),
            });
          }}
        />
      ))}
    </>
  );
};

export default FacilityMarkers;
