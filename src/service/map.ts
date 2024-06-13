import axios from "axios";

export const getAddressFromCoord = async ({
  lat,
  lng,
}: {
  lat: number;
  lng: number;
}) => {
  const { data } = await axios.get(
    `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lng}&y=${lat}`,
    {
      headers: {
        Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY}`,
      },
    },
  );

  return data.documents[0].address.address_name;
};
