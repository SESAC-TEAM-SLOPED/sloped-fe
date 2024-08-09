import { useEffect, useState } from "react";
import IsConvenient from "../IsConvenient/IsConvenient";
import { serverUrl } from "../../constant/url";
import { Facility } from "../../types/facility";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import axiosInstance from "../../service/axiosInstance";

type Props = {
  id: number;
};

const FacilityInfo = ({ id }: Props) => {
  const [info, setInfo] = useState<Facility>();
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const getFacilityInfo = async () => {
      const { data } = await axiosInstance.get(
        `${serverUrl}/api/facilities/${id}`,
      );
      setInfo(data);
      setIsBookmarked(data.isBookmarked);
    };

    getFacilityInfo();
  }, [id]);

  const onClickBookmark = async () => {
    setIsBookmarked(!isBookmarked);
    const addBookmark = async () => {
      await axiosInstance.post(`${serverUrl}/api/users/bookmark`, {
        facilityId: id,
      });
    };

    const removeBookmark = async () => {
      await axiosInstance.delete(
        `${serverUrl}/api/users/bookmark?facilityId=${id}`,
      );
    };

    !isBookmarked ? addBookmark() : removeBookmark();
  };

  return info ? (
    <div className="flex justify-between items-center">
      <div>
        <div className="mb-5">
          <div className="flex items-center gap-4">
            <Link to={`/facility/details/${info.id}`}>
              <h2 className="text-lg font-bold">{info.name}</h2>
            </Link>
            <button onClick={onClickBookmark}>
              <FaStar size={20} color={isBookmarked ? "#FFF500" : "#dfdfdf"} />
            </button>
          </div>
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
          <img
            src={info.imageUrl}
            alt="Facility"
            className="rounded-lg w-32 h-32 object-cover"
          />
        )}
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default FacilityInfo;
