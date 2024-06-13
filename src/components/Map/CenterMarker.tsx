type Props = {
  map: any;
  lat: number;
  lng: number;
};

const getCenterMarker = ({ map, lat, lng }: Props) => {
  const { Tmapv2 } = window;
  const marker = new Tmapv2.Marker({
    position: new Tmapv2.LatLng(lat, lng),
    iconHTML:
      "<img src='https://res.cloudinary.com/dv6tzjgu4/image/upload/v1718265528/map-pin_peemfd.png'/>",
    iconSize: new Tmapv2.Size(70, 70),
    map: map,
  });

  return marker;
};

export default getCenterMarker;
