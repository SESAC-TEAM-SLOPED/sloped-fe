import Marker from "../Map/Marker";

type Props = {
  bookmarks: any[];
  map: any;
  clickedId: number;
  onClick: (id: number) => void;
};

const BookmarkMarkers = ({ bookmarks, map, clickedId, onClick }: Props) => {
  return (
    <>
      {bookmarks.map((location) => (
        <Marker
          key={location.id}
          map={map}
          lat={location.latitude}
          lng={location.longitude}
          icon="star"
          clickedId={clickedId}
          id={location.id}
          onClick={() => onClick(location.id)}
        />
      ))}
    </>
  );
};

export default BookmarkMarkers;
