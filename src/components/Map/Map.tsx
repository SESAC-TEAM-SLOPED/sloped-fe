import { useEffect, useState } from "react";
import useGeoLocation from "../../hooks/geoLocation";
import getCurrentMarker from "./CurrentMarker";
import getCenterMarker from "./CenterMarker";
import { getAddressFromCoord } from "../../service/map";

declare global {
  interface Window {
    Tmapv2: any;
  }
}

type Props = {
  location?: { lat: number; lng: number };
  height: string;
  setAddress?: (addr: string) => void;
};

const Map = ({ location, height, setAddress }: Props) => {
  const { Tmapv2 } = window;
  const [map, setMap] = useState<any>();
  const [centerMarker, setCenterMarker] = useState({ lat: 0, lng: 0 });

  // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때 한 번만 실행됩니다.
  useEffect(() => {
    // 컴포넌트가 렌더링된 후에 실행될 코드
    const map = new Tmapv2.Map("map_div", {
      center: new Tmapv2.LatLng(37.566481622437934, 126.98502302169841),
      width: "100%",
      height,
      zoom: 15,
    });

    setMap(map);
  }, [Tmapv2.LatLng, Tmapv2.Map, height]);

  // 사용자의 위치가 브라우저로 전달되면 실행됩니다.
  useEffect(() => {
    if (location) {
      map.setCenter(new Tmapv2.LatLng(location.lat, location.lng));

      const currentMarker = getCurrentMarker({
        map,
        lat: location.lat,
        lng: location.lng,
      });

      const marker = getCenterMarker({
        map,
        lat: location.lat,
        lng: location.lng,
      });

      // 지도가 드래그 될 때마다 중심 좌표에 마커를 그리는 함수
      map.addListener("dragend", () => {
        const center = map.getCenter();
        marker.setPosition(new Tmapv2.LatLng(center._lat, center._lng));
        getAddressFromCoord({ lat: center._lat, lng: center._lng }).then(
          (addr) => setAddress && setAddress(addr),
        );
      });
    }
  }, [Tmapv2.LatLng, location, map, setAddress]);

  return <div id="map_div" />;
};

export default Map;
