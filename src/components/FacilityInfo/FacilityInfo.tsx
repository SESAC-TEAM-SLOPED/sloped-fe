import { useEffect, useState } from "react";
import IsConvenient from "../IsConvenient/IsConvenient";
import axios from "axios";
import { serverUrl } from "../../constant/url";
import { Facility } from "../../types/facility";
import { Link } from "react-router-dom";

type Props = {
  id: number;
};

const FacilityInfo = ({ id }: Props) => {
  const [info, setInfo] = useState<Facility>();

  useEffect(() => {
    const getFacilityInfo = async () => {
      const { data } = await axios.get(`${serverUrl}/api/facilities/${id}`);
      setInfo(data);
    };

    getFacilityInfo();
  }, [id]);

  return info ? (
    <div className="flex justify-between items-center">
      <div>
        <div className="mb-5">
          <Link to={`/facility/details/${info.id}`}>
            <h2 className="text-lg font-bold">{info.name}</h2>
          </Link>
          <p className="text-sm text-gray-600">{info.address}</p>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center space-x-2">
            <IsConvenient isConvenient={true} />
            <span className="text-gray-600 text-xs">
              {info.countOfConvenient}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <IsConvenient isConvenient={false} />
            <span className="text-gray-600 text-xs">
              {info.countOfInconvenient}
            </span>
          </div>
        </div>
      </div>
      <div>
        {info.imageUrl && (
          <img src={info.imageUrl} alt="School" className="rounded-lg" />
        )}
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default FacilityInfo;
