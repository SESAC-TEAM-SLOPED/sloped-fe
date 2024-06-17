import { Review } from "../../types/Review";

type Props = {
  review: Review;
  nickname: string;
  isDisability: boolean;
  createdAt: Date;
  reviewText: string;
  reviewImages: string[];
};

const UserReview = ({
  review,
  nickname,
  isDisability,
  createdAt,
  reviewText,
  reviewImages,
}: Props) => {
  return (
    <div className="mt-6 border-t border-gray-200 pt-6">
      {/* 사용자 닉네임, 교통약자 여부 */}
      <div className="flex items-center">
        <p className="text-[#404040] font-semibold text-lg">
          {nickname}
          {isDisability && (
            <span className="text-sm text-[#3F51B5] ml-4">교통약자</span>
          )}
        </p>
      </div>
      {/* 편해요/불편해요, 날짜, 리뷰 내용 */}
      <div className="flex items-center mt-3">
        <div
          className={`flex justify-center items-center w-20 h-9 rounded-full text-center ${review.type === "comfortable" ? "bg-[#F1F9F1] text-[#4caf50]" : "bg-[#FFF0EF] text-[#F8837C]"}`}
        >
          <p>{review.type === "comfortable" ? "편해요" : "불편해요"}</p>
        </div>
        <p className="text-[#404040] text-sm ml-4">
          {createdAt.toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
      <p className="text-[#404040] mt-5">{reviewText}</p>
      {/* 리뷰 이미지 */}
      <div className="mt-5 grid grid-cols-3 gap-2">
        {reviewImages.slice(0, 3).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`리뷰 이미지 ${index + 1}`}
            className="w-40 h-40 rounded"
          />
        ))}
      </div>
    </div>
  );
};

export default UserReview;
