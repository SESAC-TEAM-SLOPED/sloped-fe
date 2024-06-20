import { useEffect, useState } from "react";

type Props = {
  map: any;
  lat: number;
  lng: number;
  icon: "star" | "warning" | "pin";
  clickedId: number;
  id: number;
  onClick: () => void;
};

const PIN_STYLE = `<img style="width: 40px;" src="https://res.cloudinary.com/dv6tzjgu4/image/upload/v1718685629/pin_.png" />`;

const CLICKED_PIN_STYLE =
  '<img style="width: 40px;" src="https://res.cloudinary.com/dv6tzjgu4/image/upload/v1718685629/pin_clicked.png" />';

const WARNING_STYLE = `<div style='background-color: white; width: 40px; height: 40px; border-radius: 9999px; border: 1px solid #d9d9d9; display: flex; align-items: center; justify-content: center;'>
      <img style='width: 26px' src="https://res.cloudinary.com/dv6tzjgu4/image/upload/v1718683881/warning_.png" />
    </div>`;

const CLICKED_WARNING_STYLE = `<div style='background-color: #F8837C; width: 40px; height: 40px; border-radius: 9999px; display: flex; align-items: center; justify-content: center;'>
      <img style='width: 26px' src="https://res.cloudinary.com/dv6tzjgu4/image/upload/v1718684938/warning_clicked.png" />
    </div>`;

const STAR_STYLE = `<div style='background-color: white; width: 40px; height: 40px; border-radius: 9999px; border: 1px solid #d9d9d9; display: flex; align-items: center; justify-content: center;'>
      <img style='width: 26px' src="https://res.cloudinary.com/dv6tzjgu4/image/upload/v1718684263/star_.png" />
    </div>`;

const CLICKED_STAR_STYLE = `<div style='background-color: #fff000; width: 40px; height: 40px; border-radius: 9999px; display: flex; align-items: center; justify-content: center;'>
      <img style='width: 26px' src="https://res.cloudinary.com/dv6tzjgu4/image/upload/v1718685023/star_clicked.png" />
    </div>`;
const Marker = ({ map, lat, lng, icon, clickedId, onClick, id }: Props) => {
  const { Tmapv2 } = window;
  const [marker, setMarker] = useState<any>();

  useEffect(() => {
    return () => {
      marker && marker.setMap(null);
    };
  }, [marker]);

  useEffect(() => {
    const newMarker = new Tmapv2.Marker({
      position: new Tmapv2.LatLng(lat, lng),
      iconHTML:
        icon === "warning"
          ? WARNING_STYLE
          : icon === "pin"
            ? PIN_STYLE
            : STAR_STYLE,
      iconSize: new Tmapv2.Size(40, 40),
      map: map,
    });

    setMarker(newMarker);
  }, [Tmapv2.LatLng, Tmapv2.Marker, Tmapv2.Size, icon, lat, lng, map]);

  useEffect(() => {
    marker && marker.addListener("click", () => onClick());
  }, [marker, onClick]);

  useEffect(() => {
    if (marker && clickedId) {
      if (icon === "pin" && clickedId === id) {
        marker.setIconHTML(CLICKED_PIN_STYLE);
      } else if (icon === "pin") {
        marker.setIconHTML(PIN_STYLE);
      }

      if (icon === "star" && clickedId === id) {
        marker.setIconHTML(CLICKED_STAR_STYLE);
      } else if (icon === "star") {
        marker.setIconHTML(STAR_STYLE);
      }

      if (icon === "warning" && clickedId === id) {
        marker.setIconHTML(CLICKED_WARNING_STYLE);
      } else if (icon === "warning") {
        marker.setIconHTML(WARNING_STYLE);
      }
    }
  }, [clickedId, icon, id, marker]);

  return <></>;
};

export default Marker;
