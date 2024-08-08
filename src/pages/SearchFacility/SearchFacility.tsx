import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import Container from "../../components/ui/Container";
import { serverUrl } from "../../constant/url";
import useGeoLocation from "../../hooks/geoLocation";
import { Link, useSearchParams } from "react-router-dom";
import { TbGpsFilled } from "react-icons/tb";
import { useEffect, useState } from "react";
import { FacilitySearch } from "../../types/facility";
import CloseIcon from "../../components/icons/CloseIcon";

const SearchFacility = () => {
  const { location } = useGeoLocation();
  const [facilites, setFacilites] = useState<FacilitySearch[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const getFacility = async () => {
      const { data } = await axios.get(
        `${serverUrl}/api/facilities/search?name=${searchParams.get("keyword")}&latitude=${location?.lat}&longitude=${location?.lng}`,
      );
      setFacilites(data);
    };
    searchParams.get("keyword") && location && getFacility();
  }, [location, searchParams]);

  const lengthConversion = (length: number) => {
    let result = "";
    if (length >= 1000) {
      result = (length / 1000).toFixed(2) + "k";
    } else {
      result = length.toFixed(2);
    }

    return result + "m";
  };

  return (
    <Container hasHeader={false} hasNav={true}>
      <div className="px-3 pt-3 w-full select-none">
        <SearchBar searchedKeyword={searchParams.get("keyword")} />
      </div>
      <div className="flex justify-end p-2 pb-0">
        <Link to="/">
          <CloseIcon color="#8d8d8d" />
        </Link>
      </div>
      <div>
        <ul>
          {facilites.map((facility) => (
            <Link key={facility.id} to={`/facility/details/${facility.id}`}>
              <li
                key={facility.id}
                className="w-full border-b h-[100px] py-5 px-7 flex flex-col gap-3 hover:bg-[#F5F5F5]"
              >
                <div className="flex items-center gap-5">
                  <p className="text-[#404040]">{facility.name}</p>
                  <p className="text-sm text-[#8d8d8d]">{facility.type}</p>
                </div>
                <div className="flex gap-1 items-center text-sm text-[#8d8d8d]">
                  <p className="flex items-center gap-2">
                    <TbGpsFilled color="#8d8d8d" />
                    {lengthConversion(facility.distance_meters)}
                  </p>
                  <p>|</p>
                  <p>{facility.address}</p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default SearchFacility;
