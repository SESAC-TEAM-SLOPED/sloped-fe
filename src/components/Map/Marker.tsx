type Props = {
  map: any;
  lat: number;
  lng: number;
};

const getMarker = ({ map, lat, lng }: Props) => {
  const { Tmapv2 } = window;
  const marker = new Tmapv2.Marker({
    position: new Tmapv2.LatLng(lat, lng),
    iconHTML:
      "<div style='background-color: #3705FF; width: 20px; height: 20px; border-radius: 9999px;box-shadow: 0 0 5px 5px #3705ff50'></div>",
    iconSize: new Tmapv2.Size(24, 38),
    map: map,
  });

  return marker;
};

export default getMarker;
