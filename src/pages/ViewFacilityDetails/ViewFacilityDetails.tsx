import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Map from "../../components/Map/Map";
import Container from "../../components/ui/Container";
import useGeoLocation from "../../hooks/geoLocation";
import FacilityCategory from "../../components/FacilityDetails/FacilityCategory";
import FacilityName from "../../components/FacilityDetails/FacilityName";
import FacilityIconsWrapper from "../../components/FacilityDetails/FacilityIconsWrapper";
import FacilityInformation from "../../components/FacilityDetails/FacilityInformation";
import ReportIcon from "../../components/icons/ReportIcon";
import { Link, useNavigate, useParams } from "react-router-dom";
import RightArrowIcon from "../../components/icons/RightArrowIcon";
import ReviewPhotos from "../../components/FacilityReview/ReviewPhotos";
import ReviewHeader from "../../components/FacilityReview/ReviewHeader";
import Convenience from "../../components/FacilityReview/Convenience";
import AISummary from "../../components/FacilityReview/AISummary";
import ReviewFilter from "../../components/FacilityReview/ReviewFilter";
import { Review } from "../../types/Review";
import UserReview from "../../components/FacilityReview/UserReview";
import Footer from "../../components/ui/Footer";
import { serverUrl } from "../../constant/url";
import axios from "axios";
import { FacilityDetail } from "../../types/facility";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

interface FacilityReview {
  facilityReviewId: number;
  name: string;
  nickname: string;
  disability: boolean;
  isConvenient: boolean;
  content: string;
  urls: string[];
  updatedAt: string;
}

const ViewFacilityDetails = () => {
  const { id } = useParams() as { id: string };
  const [detail, setDetail] = useState<FacilityDetail>();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [reviewCounts, setReviewCounts] = useState({
    total: 0,
    comfortable: 0,
  });
  const [filteredReviews, setFilteredReviews] = useState<Review[]>([]);
  const { location } = useGeoLocation();
  const [map, setMap] = useState();
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getDetail = async () => {
      const { data } = await axios.get(
        `${serverUrl}/api/facilities/${id}/detail`,
      );
      setDetail(data);
    };

    const getReviews = async () => {
      try {
        const { data } = await axios.get(
          `${serverUrl}/api/facilities/${id}/get-facility-reviews`,
        );
        const formattedReviews = data.map((review: FacilityReview) => ({
          id: review.facilityReviewId,
          nickname: review.nickname,
          isDisability: review.disability,
          content: review.content,
          type: review.isConvenient ? "comfortable" : "uncomfortable",
          createdAt: new Date(review.updatedAt),
          images: review.urls,
        }));
        setReviews(formattedReviews);
        setFilteredReviews(formattedReviews);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
          // 리뷰가 없는 경우
          setError("");
        } else {
          setError("");
        }
      }
    };

    const getReviewCounts = async () => {
      try {
        const { data } = await axios.get(
          `${serverUrl}/api/facilities/${id}/get-facility-reviews-count`,
        );
        setReviewCounts({
          total: data[0],
          comfortable: data[1],
        });
      } catch (error) {
        console.error("Failed to fetch review counts:", error);
        setReviewCounts({ total: 0, comfortable: 0 });
      }
    };

    getDetail();
    getReviews();
    getReviewCounts();
  }, [id]);

  const handleUpdateClick = () => {
    if (detail) {
      navigate("/report/facility/update", {
        state: {
          id: detail.id,
          name: detail.name,
          contact: detail.contact,
          facilityType: detail.type,
          isEntranceBarrier: detail.isEntranceBarrier,
          hasSlope: detail.hasSlope,
          hasElevator: detail.hasElevator,
          content: detail.content,
          address: detail.address,
        },
      });
    }
  };

  return detail ? (
    <Container hasHeader={true}>
      <Header text="시설 정보" closeButton={true} />
      <div className="flex flex-col gap-6">
        <div className="h-80 w-full max-w-2xl mx-auto">
          <Map
            map={map}
            setMap={setMap}
            height="100%"
            canDrag={false}
            canZoom={false}
            currentLocation={location}
            location={{ lat: detail.latitude, lng: detail.longitude }}
          />
        </div>
        {/* 시설 이름, 카테고리 */}
        <div className="flex items-center gap-4 h-3">
          <FacilityName name={detail.name} />
          <FacilityCategory category={detail.type} />
        </div>
        {/* 경사로, 입구턱, 엘리베이터 유무 */}
        <FacilityIconsWrapper
          hasSlope={detail.hasSlope}
          isEntranceBarrier={detail.isEntranceBarrier}
          hasElevator={detail.hasElevator}
        />
        {/* 주소, 전화번호, 영업시간 */}
        <FacilityInformation
          address={detail.address}
          contact={detail.contact}
          businessHours={detail.businessHours}
        />
        <div>
          {detail.content && (
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm my-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                시설 제보자의 의견
              </h3>
              <div className="flex">
                <FaQuoteLeft className="text-blue-400 text-xl mr-2" />
                <p className="text-gray-600 italic flex-grow">
                  {detail.content}
                </p>
                <FaQuoteRight className="text-blue-400 text-xl ml-2 self-end" />
              </div>
            </div>
          )}
        </div>
        {/* 리뷰 사진 이미지 총 나열 */}
        <p className="text-[#404040] text-xl font-semibold">방문자 사진</p>
        <ReviewPhotos photos={reviews.flatMap((review) => review.images)} />
        {/* 리뷰 총 개수, 리뷰 작성하러가기 */}
        <ReviewHeader
          reviewCount={reviewCounts.total}
          facilityName={detail.name}
          facilityId={id}
        />
        {/* 편해요/불편해요 개수 */}
        <Convenience
          comfortableCount={reviewCounts.comfortable}
          uncomfortableCount={reviewCounts.total - reviewCounts.comfortable}
        />
        {/* AI 한 줄 요약 */}
        <AISummary
          summary={detail.accessibilityDescription || "아직 AI가 분석중입니다!"}
        />
        {/* 틀린 정보 제보 하러 가기 */}
        <div className="flex justify-end items-center gap-1 mt-4">
          <button
            onClick={handleUpdateClick}
            className="flex items-center gap-1 cursor-pointer text-blue-500"
          >
            <ReportIcon />
            <p style={{ color: "#F8837C" }}>틀린 정보 제보</p>
            <RightArrowIcon />
          </button>
        </div>
        {/* 리뷰 필터링 및 정렬 */}
        <ReviewFilter
          reviewData={reviews}
          setFilteredReviews={setFilteredReviews}
        />
        {/* 사용자 리뷰 */}
        {filteredReviews.map((review) => (
          <UserReview
            key={review.id}
            review={review}
            nickname={review.nickname}
            isDisability={review.isDisability}
            createdAt={review.createdAt}
            reviewText={review.content}
            reviewImages={review.images}
          />
        ))}
      </div>
      <Footer />
    </Container>
  ) : (
    <></>
  );
};
export default ViewFacilityDetails;
