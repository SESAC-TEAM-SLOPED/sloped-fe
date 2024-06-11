import { useEffect, useState } from "react";
import useGeoLocation from "../../hooks/geoLocation";
import getCurrentMarker from "./CurrentMarker";

declare global {
  interface Window {
    Tmapv2: any;
  }
}

type Props = {
  location?: { lat: number; lng: number };
};

const Map = ({ location }: Props) => {
  const { Tmapv2 } = window;
  const [map, setMap] = useState<any>();

  // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때 한 번만 실행됩니다.
  useEffect(() => {
    // 컴포넌트가 렌더링된 후에 실행될 코드
    const map = new Tmapv2.Map("map_div", {
      center: new Tmapv2.LatLng(37.566481622437934, 126.98502302169841),
      width: "full",
      height: "calc(100vh - 64px)",
      zoom: 15,
    });

    setMap(map);
  }, [Tmapv2.LatLng, Tmapv2.Map]);

  // 사용자의 위치가 브라우저로 전달되면 실행됩니다.
  useEffect(() => {
    if (location) {
      map.setCenter(new Tmapv2.LatLng(location.lat, location.lng));

      const currentMarker = getCurrentMarker({
        map,
        lat: location?.lat,
        lng: location?.lng,
      });
    }
  }, [Tmapv2.LatLng, location, map]);

  return <div id="map_div" />;
};

export default Map;
