import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Map from "../../components/Map/Map";
import Container from "../../components/ui/Container";
import useGeoLocation from "../../hooks/geoLocation";
import FacilityCategory from "../../components/FacilityDetails/FacilityCategory";
import FacilityName from "../../components/FacilityDetails/FacilityName";
import FacilityIconsWrapper from "../../components/FacilityDetails/FacilityIconsWrapper";
import FacilityInformation from "../../components/FacilityDetails/FacilityInformation";
import ReportIcon from "../../components/icons/ReportIcon";
import { Link } from "react-router-dom";
import RightArrowIcon from "../../components/icons/RightArrowIcon";
import ReviewPhotos from "../../components/FacilityReview/ReviewPhotos";
import ReviewHeader from "../../components/FacilityReview/ReviewHeader";
import Convenience from "../../components/FacilityReview/Convenience";
import AISummary from "../../components/FacilityReview/AISummary";
import ReviewFilter from "../../components/FacilityReview/ReviewFilter";
import { Review } from "../../types/Review";
import UserReview from "../../components/FacilityReview/UserReview";
import Footer from "../../components/ui/Footer";

const ViewFacilityDetails = () => {
  const { location } = useGeoLocation();

  // 임의로 시설 데이터 지정
  const facility = {
    name: "컴포즈커피 문래skv1점",
    category: "카페",
    hasSlope: true,
    isEntranceBarrier: true,
    hasElevator: true,
    address: "서울특별시 영등포구 문래동 3가 55-20",
    contact: "02-123-4567",
    businessHours: {
      Monday: "08:00 - 22:00",
      Tuesday: "08:00 - 22:00",
      Wednesday: "08:00 - 22:00",
      Thursday: "08:00 - 22:00",
      Friday: "08:00 - 22:00",
      Saturday: "10:00 - 18:00",
      Sunday: "10:00 - 18:00",
    },
  };

  // 리뷰 개수(임의)
  const reviewCounts = {
    comfortableCount: 2,
    uncomfortableCount: 1,
  };

  // AI 한 줄 요약(임의)
  const aiSummary = "아이와 이용하기 편하지만 엘리베이터 공사가 아쉬웠습니다.";

  // 임의로 리뷰 데이터 지정
  const reviewData: Review[] = [
    {
      id: 1,
      nickname: "사용자1",
      isDisability: true,
      content: "아이와 이용하기 편했어요!",
      type: "comfortable",
      createdAt: new Date(),
      images: [
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/advices/168706489604934270.png?w=960&h=960&c=c",
        "https://t3.ftcdn.net/jpg/08/08/64/76/240_F_808647692_npvJI21i4mJGygx12yvm4IGU035oSC3K.jpg",
      ],
    },
    {
      id: 2,
      nickname: "사용자2",
      isDisability: false,
      content: "공사가 불편해요!",
      type: "uncomfortable",
      createdAt: new Date(),
      images: [
        "https://t3.ftcdn.net/jpg/07/02/60/46/240_F_702604626_9ojecqSF0MHmeV4St7PGi3mqcUWdygJh.jpg",
      ],
    },
    {
      id: 3,
      nickname: "사용자3",
      isDisability: false,
      content: "편했어요!",
      type: "comfortable",
      createdAt: new Date(),
      images: [
        "https://t4.ftcdn.net/jpg/07/59/26/79/240_F_759267971_s8RJaXgaZAjpzh9rSPO1VUXLonyx765D.jpg",
        "https://t3.ftcdn.net/jpg/07/29/56/12/240_F_729561297_8vLVkUUjfZ93LhuNpShkbTd1b5NjUFFU.jpg",
      ],
    },
  ];
  // 리뷰 필터링 상태 관리
  const [filteredReviews, setFilteredReviews] = useState(reviewData);
  const [map, setMap] = useState();

  return (
    <Container hasHeader={true}>
      <Header text="시설 정보" closeButton={true} />
      <div className="flex flex-col gap-6">
        <div className="h-80 w-[580px]">
          <Map
            map={map}
            setMap={setMap}
            height="100%"
            canDrag={false}
            canZoom={false}
            location={location}
          />
        </div>
        {/* 시설 이름, 카테고리 */}
        <div className="flex items-center gap-4 h-3">
          <FacilityName name={facility.name} />
          <FacilityCategory category={facility.category} />
        </div>
        {/* 경사로, 입구턱, 엘리베이터 유무 */}
        <FacilityIconsWrapper
          hasSlope={facility.hasSlope}
          isEntranceBarrier={facility.isEntranceBarrier}
          hasElevator={facility.hasElevator}
        />
        {/* 주소, 전화번호, 영업시간 */}
        <FacilityInformation
          address={facility.address}
          contact={facility.contact}
          businessHours={facility.businessHours}
        />
        {/* 틀린 정보 제보 하러 가기 */}
        <div className="flex justify-end items-center gap-1 mt-4">
          <Link
            to="/facility/new/report"
            className="flex items-center gap-1 cursor-pointer"
          >
            <ReportIcon />
            <p style={{ color: "#F8837C" }}>틀린 정보 제보</p>
            <RightArrowIcon />
          </Link>
        </div>
        {/* 리뷰 사진 이미지 총 나열 */}
        <p className="text-[#404040] text-xl font-semibold">방문자 사진</p>
        <ReviewPhotos photos={reviewData.flatMap((review) => review.images)} />
        {/* 리뷰 총 개수, 리뷰 작성하러가기 */}
        <ReviewHeader
          reviewCount={
            reviewCounts.comfortableCount + reviewCounts.uncomfortableCount
          }
        />
        {/* 편해요/불편해요 개수 */}
        <Convenience
          comfortableCount={reviewCounts.comfortableCount}
          uncomfortableCount={reviewCounts.uncomfortableCount}
        />
        {/* AI 한 줄 요약 */}
        <p className="text-[#404040] text-xl font-semibold">AI 한 줄 요약</p>
        <AISummary summary={aiSummary} />
        {/* 리뷰 필터링 및 정렬 */}
        <ReviewFilter
          reviewData={reviewData}
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
  );
};
export default ViewFacilityDetails;
