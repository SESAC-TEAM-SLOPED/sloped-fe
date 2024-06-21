import React from "react";

const facilityData = [
  {
    name: "스타벅스 사당로데오점",
    time: "8개월 전",
    slope: "있음",
    entranceBarrier: "없음",
    elevator: "없음",
    review:
      "기존 정보에는 경사로가 없고 엘리베이터가 있다고 써있었는데, 막상 가보니 엘리베이터는 없고 경사로는 있었습니다.",
    status: "대기중",
  },
  {
    name: "새싹 센터",
    time: "11개월 전",
    slope: "있음",
    entranceBarrier: "있음",
    // elevator: "없음",
    review: "경사로도 있고 입구 턱도 있고",
    status: "승인",
  },
];

const roadData = [
  {
    location: "37.3435, 127.34578",
    time: "8개월 전",
    review: "공사로 인한 통행 불가",
    images: [
      "https://t3.ftcdn.net/jpg/07/02/60/46/240_F_702604626_9ojecqSF0MHmeV4St7PGi3mqcUWdygJh.jpg",
    ],
    reason: "공사 종료됨",
    status: "반려",
  },
];

const MyReportForm = () => {
  return (
    <div className="py-4">
      {facilityData.map((facility, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow mb-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold">{facility.name}</h2>
            <span
              className={`text-${facility.status === "승인" ? "green" : "blue"}-500`}
            >
              {facility.status}
            </span>
          </div>
          <div className="text-gray-500 mb-2">{facility.time}</div>
          <div className="flex">
            <div className="flex flex-col w-1/2 bg-blue-50 p-2 rounded mb-4">
              {facility.slope && (
                <p className="mb-2">
                  경사로:{" "}
                  <span className="text-green-500">{facility.slope}</span>
                </p>
              )}
              {facility.entranceBarrier && (
                <p className="mb-2">
                  입구 턱:{" "}
                  <span className="text-red-500">
                    {facility.entranceBarrier}
                  </span>
                </p>
              )}
              {facility.elevator && (
                <p className="mb-2">
                  엘리베이터:{" "}
                  <span className="text-red-500">{facility.elevator}</span>
                </p>
              )}
            </div>
          </div>
          <p className="mb-4">{facility.review}</p>
        </div>
      ))}
      {roadData.map((road, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow mb-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold">도로</h2>
            <span
              className={`text-${road.status === "반려" ? "red" : "blue"}-500`}
            >
              {road.status}
            </span>
          </div>
          <div className="text-gray-500 mb-2">{road.time}</div>
          <div className="mb-4">
            <p className="mb-2">위치: {road.location}</p>
            <p className="mb-2">{road.review}</p>
            <div className="grid grid-cols-3 gap-2">
              {road.images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  src={image}
                  alt="도로 이미지"
                  className="w-full h-24 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
          <p className="text-gray-500 text-sm bg-gray-100 p-2 rounded">
            {road.reason}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MyReportForm;
