import axios from "axios";
import { useEffect, useState } from "react";
import { serverUrl } from "../../constant/url";
import CloseIcon from "../icons/CloseIcon";

type Props = {
  imageCaption: string;
  onClose: () => void;
};

const RoadImageCaptioning = ({ imageCaption, onClose }: Props) => {
  return (
    <div className="bg-white border rounded-md absolute z-10 left-0 right-0 h-40 scroll-auto px-5 py-7">
      <div className="absolute right-1 top-1">
        <button onClick={onClose}>
          <CloseIcon color="4d4d4d" />
        </button>
      </div>
      <div>{imageCaption}</div>
    </div>
  );
};

export default RoadImageCaptioning;
