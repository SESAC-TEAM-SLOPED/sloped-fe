import { RoadReportImage } from "./roadReportImage";

export interface RoadReportDetail {
  id: number;
  reportImageList: RoadReportImage[];
  content: string;
}
