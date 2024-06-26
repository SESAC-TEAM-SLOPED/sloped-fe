import React from "react";
import AdminTrafficDisruptionForm from "../../components/AdminPageForm/AdminTrafficDisruptionForm";

// 임시 데이터
const tempTrafficDisruptionreports = [
  {
    id: "id1",
    address: "서울시 영등포구 문래동",
    trafficContext: "청년사관학교 앞 도로 공사로 인한 통행 불편",
    reporterId: "reporter1@example.com",
    imageUrl: "https://example.com/image1.jpg",
    createdAt: "2024-06-06T12:45:21Z",
    modifiedAt: "2024-06-07T10:41:21Z",
  },
  {
    id: "id2",
    address: "서울시 강남구 역삼동",
    trafficContext: "역삼역 인근 도로 파손",
    reporterId: "reporter2@example.com",
    imageUrl: "https://example.com/image2.jpg",
    createdAt: "2024-06-08T09:30:00Z",
    modifiedAt: "2024-06-09T11:20:00Z",
  },
  {
    id: "id3",
    address: "서울시 마포구 홍대입구",
    trafficContext: "홍대입구 교차로 신호등 고장",
    reporterId: "reporter3@example.com",
    imageUrl: "https://example.com/image3.jpg",
    createdAt: "2024-06-10T14:00:00Z",
    modifiedAt: "2024-06-11T15:00:00Z",
  },
  {
    id: "id4",
    address: "서울시 종로구 광화문",
    trafficContext: "광화문 광장 집회로 인한 차량 통제",
    reporterId: "reporter4@example.com",
    imageUrl: "https://example.com/image4.jpg",
    createdAt: "2024-06-12T16:30:00Z",
    modifiedAt: "2024-06-13T17:45:00Z",
  },
  {
    id: "id5",
    address: "서울시 송파구 잠실동",
    trafficContext: "롯데월드 인근 도로 침수",
    reporterId: "reporter5@example.com",
    imageUrl: "https://example.com/image5.jpg",
    createdAt: "2024-06-14T18:20:00Z",
    modifiedAt: "2024-06-15T19:30:00Z",
  },
  {
    id: "id6",
    address: "서울시 용산구 이태원",
    trafficContext: "이태원 메인 스트리트 행사로 인한 차량 우회",
    reporterId: "reporter6@example.com",
    imageUrl: "https://example.com/image6.jpg",
    createdAt: "2024-06-16T20:10:00Z",
    modifiedAt: "2024-06-17T21:25:00Z",
  },
  {
    id: "id7",
    address: "서울시 성동구 성수동",
    trafficContext: "성수대교 남단 사고로 인한 정체",
    reporterId: "reporter7@example.com",
    imageUrl: "https://example.com/image7.jpg",
    createdAt: "2024-06-18T22:05:00Z",
    modifiedAt: "2024-06-19T23:15:00Z",
  },
  {
    id: "id8",
    address: "서울시 동작구 사당동",
    trafficContext: "사당역 인근 도로 보수 작업",
    reporterId: "reporter8@example.com",
    imageUrl: "https://example.com/image8.jpg",
    createdAt: "2024-06-20T08:00:00Z",
    modifiedAt: "2024-06-21T09:10:00Z",
  },
  {
    id: "id9",
    address: "서울시 광진구 건대입구",
    trafficContext: "건대입구역 앞 택시 승강장 이전 작업",
    reporterId: "reporter9@example.com",
    imageUrl: "https://example.com/image9.jpg",
    createdAt: "2024-06-22T10:40:00Z",
    modifiedAt: "2024-06-23T11:50:00Z",
  },
  {
    id: "id10",
    address: "서울시 노원구 상계동",
    trafficContext: "상계동 로터리 교통 신호 시스템 업그레이드",
    reporterId: "reporter10@example.com",
    imageUrl: "https://example.com/image10.jpg",
    createdAt: "2024-06-24T12:30:00Z",
    modifiedAt: "2024-06-25T13:40:00Z",
  },
];

const AdminTrafficDisruption = () => {
  return (
    <div>
      <AdminTrafficDisruptionForm data={tempTrafficDisruptionreports} />
    </div>
  );
};

export default AdminTrafficDisruption;
