import React, { useState } from "react";
import styles from "./RoadTroubleImageSlide.module.css";
import { RoadReportImage } from "../../types/roadReportImage";

type Props = {
  roadReportImage: RoadReportImage[];
};

const RoadTroubleImageSlide = ({ roadReportImage }: Props) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const onClickImage = (index: number) => {
    setSelectedImageIndex(index);
  };

  const onNextImage = () => {
    setSelectedImageIndex(
      (prevIndex) => (prevIndex + 1) % roadReportImage.length,
    );
  };

  const onPrevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? roadReportImage.length - 1 : prevIndex - 1,
    );
  };

  return (
    <>
      <div className={styles.imageContentWrap}>
        <div className={styles.mainImageWrap}>
          {roadReportImage.length > 1 && (
            <svg
              className={styles.buttonIcon}
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 40 40"
              fill="none"
              onClick={onPrevImage}
            >
              <path
                d="M25 30L15 20L25 10"
                stroke="#7b7b7b"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}

          {roadReportImage.length > 0 && (
            <img
              src={roadReportImage[selectedImageIndex].url}
              alt="Road Trouble Image"
              className={styles.mainImage}
            />
          )}
          {roadReportImage.length > 1 && (
            <svg
              className={styles.buttonIcon}
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 40 40"
              fill="none"
              onClick={onNextImage}
            >
              <path
                d="M15 30L25 20L15 10"
                stroke="#7b7b7b"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
        <div
          className={`${styles.previewImagesWrap} ${
            roadReportImage.length > 1 ? "" : styles.hidden
          }`}
        >
          {roadReportImage.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={`통행불편 제보 사진${index}`}
              className={styles.previewImage}
              onClick={() => onClickImage(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RoadTroubleImageSlide;
