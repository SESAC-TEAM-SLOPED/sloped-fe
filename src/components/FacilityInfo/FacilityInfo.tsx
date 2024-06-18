const FacilityInfo = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-bold">청년취업사관학교</h2>
          <p className="text-sm text-gray-600">
            서울특별시 영등포구 선유로9길 30 106동
          </p>
        </div>
        <div className="w-16 h-16">
          <img
            src="https://via.placeholder.com/150"
            alt="School"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
            편해요
          </span>
          <span className="text-gray-600 text-xs">7</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">
            불편해요
          </span>
          <span className="text-gray-600 text-xs">7</span>
        </div>
      </div>
    </div>
  );
};

export default FacilityInfo;
