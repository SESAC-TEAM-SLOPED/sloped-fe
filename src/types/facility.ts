export interface Facility {
  id: number;
  latitude: number;
  longitude: number;
  address: string;
  type: string;
  countOfConvenient: number;
  countOfInconvenient: number;
  countOfReviews: number;
  isBookmarked: null | boolean;
  imageUrl: null | string;
  name: string;
}

export interface FacilitySearch {
  id: number;
  name: string;
  type: string;
  distance_meters: number;
  address: string;
}

export interface FacilityDetail {
  id: number;
  latitude: number;
  longitude: number;
  address: string;
  type: string;
  name: string;
  businessHours: null | string;
  contact: null | string;
  hasElevator: boolean;
  hasSlope: boolean;
  isEntranceBarrier: boolean;
  createdAt: string;
  updatedAt: string;
  content: string;
}

export interface Bookmark {
  facilityId: number;
  latitude: number;
  longitude: number;
  address: string;
  facilityType: string;
  countOfReviews: number;
  name: string;
}
