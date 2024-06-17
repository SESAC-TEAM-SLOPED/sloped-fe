export type ReviewType = "comfortable" | "uncomfortable";

export interface Review {
  id: number;
  nickname: string;
  isDisability: boolean;
  content: string;
  type: ReviewType;
  createdAt: Date;
}
