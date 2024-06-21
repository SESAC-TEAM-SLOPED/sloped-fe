import React, { useState, ChangeEvent } from "react";

const MyReviewEditorForm = () => {
  const facility = {
    name: "컴포즈커피 문래skv1점",
  };

  const [reviewText, setReviewText] = useState("");
  const [reviewLength, setReviewLength] = useState(0);
  const [comfortLevel, setComfortLevel] = useState<string | null>(null);
  const [photos, setPhotos] = useState<string[]>([
    "https://t3.ftcdn.net/jpg/07/02/60/46/240_F_702604626_9ojecqSF0MHmeV4St7PGi3mqcUWdygJh.jpg",
    "https://t3.ftcdn.net/jpg/07/02/60/46/240_F_702604626_9ojecqSF0MHmeV4St7PGi3mqcUWdygJh.jpg",
    "https://t3.ftcdn.net/jpg/07/02/60/46/240_F_702604626_9ojecqSF0MHmeV4St7PGi3mqcUWdygJh.jpg",
  ]);

  const handleReviewTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(e.target.value);
    setReviewLength(e.target.value.length);
  };

  const handleComfortLevel = (level: string) => {
    setComfortLevel(level);
  };

  const handlePhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const uploadedPhotos = e.target.files
      ? Array.from(e.target.files).map((file) => URL.createObjectURL(file))
      : [];
    setPhotos([...photos, ...uploadedPhotos]);
  };

  const handleSubmit = () => {
    // 여기에 리뷰 제출 로직을 추가하세요.
    console.log("리뷰 제출", {
      reviewText,
      comfortLevel,
      photos,
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{facility.name}</h1>

      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">
          <span className="text-red-500">*</span> 키워드 선택
        </h2>
        <p>시설 이용에 불편함이 있으셨나요?</p>
        <div className="flex gap-2 mt-2">
          <div
            onClick={() => handleComfortLevel("comfortable")}
            className={`flex justify-center items-center w-20 h-9 rounded-full cursor-pointer ${
              comfortLevel === "comfortable"
                ? "bg-green-500 text-white"
                : "bg-[#F1F9F1] text-[#4caf50]"
            }`}
          >
            <p>편해요</p>
          </div>
          <div
            onClick={() => handleComfortLevel("uncomfortable")}
            className={`flex justify-center items-center w-20 h-9 rounded-full cursor-pointer ${
              comfortLevel === "uncomfortable"
                ? "bg-red-500 text-white"
                : "bg-[#FFF0EF] text-[#F8837C]"
            }`}
          >
            <p>불편해요</p>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">
          <span className="text-red-500">*</span> 리뷰 작성
        </h2>
        <textarea
          value={reviewText}
          onChange={handleReviewTextChange}
          className="w-full h-32 p-2 border rounded-lg"
          placeholder="리뷰를 작성해주세요."
        />
        <p className="text-right">{reviewLength}/100</p>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">사진 추가</h2>
        <input
          type="file"
          multiple
          onChange={handlePhotoUpload}
          className="mb-2"
        />
        <div className="grid grid-cols-3 gap-2">
          {photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt="uploaded"
              className="w-full h-24 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>

      <p className="text-xs text-gray-600 mb-4">
        * 여러분의 솔직하고 구체적인 리뷰가 다른 이용자들에게 큰 도움이 됩니다.
        불이익이 없도록 작성한 내용은 자제해주세요. 사용자들에게 큰 도움이 되는
        리뷰를 작성해주셔서 감사합니다.
      </p>

      <button
        onClick={handleSubmit}
        className="w-full py-2 bg-signiture text-white rounded-lg"
      >
        작성 완료
      </button>
    </div>
  );
};

export default MyReviewEditorForm;
