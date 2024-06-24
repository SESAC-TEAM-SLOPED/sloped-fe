import React, { useState } from "react";
import styles from "./RoadTroubleImageSlide.module.css";

const images = [
  { source: process.env.PUBLIC_URL + "/img/road_trouble_bollard.png" },
  { source: process.env.PUBLIC_URL + "/img/road_trouble_damage.png" },
  { source: process.env.PUBLIC_URL + "/img/road_trouble_construct.png" },
];

const RoadTroubleImageSlide = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const onClickImage = (index: number) => {
    setSelectedImageIndex(index);
  };

  const onNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const onPrevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };
  return (
    <div className={styles.imageContentWrap}>
      <div className={styles.mainImageWrap}>
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
        <img
          src={images[selectedImageIndex].source}
          alt="Road Trouble Image"
          className={styles.mainImage}
        />
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
      </div>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.source}
          alt={`Image ${index}`}
          className={styles.previewImage}
          onClick={() => onClickImage(index)}
        />
      ))}
    </div>
  );
};

export default RoadTroubleImageSlide;
