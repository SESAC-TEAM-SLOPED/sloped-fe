import axios from "axios";
import { useEffect, useState } from "react";

type Props = {
  image: string;
};

const RoadImageCaptioning = ({ image }: Props) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const getImageCaptioning = async () => {
      const { data } = await axios.post("http://localhost:8080/api/v1/gpt", {
        image:
          "https://bsj-test-071124.s3.ap-northeast-1.amazonaws.com/road_report/entrance_test.jpg.png",
        message: "이 사진에 대해 설명해줘",
      });

      setContent(data.choices[0].message.content);
    };

    getImageCaptioning();
  }, [image]);

  return (
    <div className="bg-white border rounded-md absolute z-10 left-0 right-0 h-40 scroll-auto px-3 py-2">
      {content}
    </div>
  );
};

export default RoadImageCaptioning;
