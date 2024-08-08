import { useSearchParams } from "react-router-dom";
import Marker from "../Map/Marker";
import { Bookmark } from "../../types/facility";

type Props = {
  bookmarks: Bookmark[];
  map: any;
  clickedId: number;
  onClick: (id: number) => void;
};

const BookmarkMarkers = ({ bookmarks, map, clickedId, onClick }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      {bookmarks.map((location) => (
        <Marker
          key={location.facilityId}
          map={map}
          lat={location.latitude}
          lng={location.longitude}
          icon="star"
          clickedId={clickedId}
          id={location.facilityId}
          onClick={() => {
            onClick(location.facilityId);
            setSearchParams({
              category: searchParams.get("category") || "",
              id: location.facilityId.toString(),
            });
          }}
        />
      ))}
    </>
  );
};

export default BookmarkMarkers;
