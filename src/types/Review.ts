export type ReviewType = "comfortable" | "uncomfortable";

export interface Review {
  id: number;
  username: string;
  content: string;
  type: ReviewType;
  createdAt: Date;
}
