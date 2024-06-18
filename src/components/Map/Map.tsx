import { useEffect, useState } from "react";
import getCurrentMarker from "./CurrentMarker";
import getCenterMarker from "./CenterMarker";
import { getAddressFromCoord } from "../../service/map";
import { useLocation } from "react-router-dom";
import { Facility } from "../../types/facility";
import Marker from "./Marker";
import { Road } from "../../types/road";

declare global {
  interface Window {
    Tmapv2: any;
  }
}

type Props = {
  currentLocation?: { lat: number; lng: number };
  height: string;
  setAddress?: (addr: string) => void;
  canDrag?: boolean;
  canZoom?: boolean;
  location?: { lat: number; lng: number };
  facilities?: Facility[];
  roads?: Road[];
  bookmarks?: any[];
  openBottomSheet?: () => void;
  clickedId?: number;
  setClickedId?: (id: number) => void;
};

const Map = ({
  currentLocation,
  height,
  setAddress,
  canDrag = true,
  canZoom = true,
  location,
  facilities,
  roads,
  bookmarks,
  openBottomSheet,
  clickedId = 0,
  setClickedId,
}: Props) => {
  const { Tmapv2 } = window;
  const [map, setMap] = useState<any>();
  const { pathname } = useLocation();

  // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때 한 번만 실행됩니다.
  useEffect(() => {
    // 컴포넌트가 렌더링된 후에 실행될 코드
    const map = new Tmapv2.Map("map_div", {
      center: new Tmapv2.LatLng(37.566481622437934, 126.98502302169841),
      width: "100%",
      height,
      zoom: 15,
    });

    // 정적 지도 생성
    if (!canDrag) {
      map.setOptions({ draggable: false });
    }

    if (!canZoom) {
      map._data.options.scrollwheel = false;
      map.setOptions({ zoomControl: false });
    }

    setMap(map);
  }, [Tmapv2.LatLng, Tmapv2.Map, canDrag, canZoom, height]);

  // 사용자의 위치가 브라우저로 전달되면 실행됩니다.
  useEffect(() => {
    // 유저 위치 마커 생성
    if (currentLocation) {
      map.setCenter(
        new Tmapv2.LatLng(currentLocation.lat, currentLocation.lng),
      );

      const currentMarker = getCurrentMarker({
        map,
        lat: currentLocation.lat,
        lng: currentLocation.lng,
      });

      // 지도 중심 좌표 생성
      if (pathname.includes("positioning")) {
        const marker = getCenterMarker({
          map,
          lat: currentLocation.lat,
          lng: currentLocation.lng,
        });
        map.addListener("dragend", () => {
          const center = map.getCenter();
          marker.setPosition(new Tmapv2.LatLng(center._lat, center._lng));
          getAddressFromCoord({ lat: center._lat, lng: center._lng }).then(
            (addr) => setAddress && setAddress(addr),
          );
        });
      }
    }

    if (location) {
      map.setCenter(new Tmapv2.LatLng(location.lat, location.lng));

      const marker = getCenterMarker({
        map,
        lat: location.lat,
        lng: location.lng,
      });
    }
  }, [Tmapv2.LatLng, currentLocation, location, map, pathname, setAddress]);

  return (
    <div
      onClick={(e) => {
        if (e.target instanceof HTMLCanvasElement && setClickedId) {
          setClickedId(10);
        }
      }}
    >
      <div id="map_div" />
      {facilities &&
        setClickedId &&
        facilities.map((location) => (
          <Marker
            key={location.id}
            map={map}
            lat={location.latitude}
            lng={location.longitude}
            icon="pin"
            clickedId={clickedId}
            id={location.id}
            onClick={() => {
              setClickedId(location.id);
              openBottomSheet && openBottomSheet();
            }}
          />
        ))}
      {roads &&
        setClickedId &&
        roads.map((location) => (
          <Marker
            key={location.id}
            map={map}
            lat={location.latitude}
            lng={location.longitude}
            icon="warning"
            clickedId={clickedId}
            id={location.id}
            onClick={() => setClickedId(location.id)}
          />
        ))}
      {bookmarks &&
        setClickedId &&
        bookmarks.map((location) => (
          <Marker
            key={location.id}
            map={map}
            lat={location.latitude}
            lng={location.longitude}
            icon="star"
            clickedId={clickedId}
            id={location.id}
            onClick={() => {
              setClickedId(location.id);
              openBottomSheet && openBottomSheet();
            }}
          />
        ))}
    </div>
  );
};

export default Map;
