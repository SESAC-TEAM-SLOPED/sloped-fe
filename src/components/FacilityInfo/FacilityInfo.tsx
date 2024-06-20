import IsConvenient from "../IsConvenient/IsConvenient";

type Props = {
  id: number;
};

const FacilityInfo = ({ id }: Props) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <div className="mb-5">
          <h2 className="text-lg font-bold">청년취업사관학교</h2>
          <p className="text-sm text-gray-600">
            서울특별시 영등포구 선유로9길 30 106동
          </p>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center space-x-2">
            <IsConvenient isConvenient={true} />
            <span className="text-gray-600 text-xs">7</span>
          </div>
          <div className="flex items-center space-x-2">
            <IsConvenient isConvenient={false} />
            <span className="text-gray-600 text-xs">7</span>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://via.placeholder.com/100"
          alt="School"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default FacilityInfo;
