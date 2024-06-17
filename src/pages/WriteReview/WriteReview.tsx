import { useState } from "react";
import Header from "../../components/Header/Header";
import IsConvenient from "../../components/IsConvenient/IsConvenient";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import Input from "../../components/ui/Input";
import UploadButton from "../../components/ui/UploadButton";

const WriteReview = () => {
  const [clickedButton, setClickedButton] = useState("");

  return (
    <Container hasHeader={true} hasNav={true}>
      <Header text="리뷰 작성" closeButton={true} />
      <h3 className="text-xl mb-8">컴포즈 커피 문래</h3>
      <form>
        <p>키워드 선택</p>
        <p className="text-sm text-[#757575] mb-4">
          시설 이용에 불편함이 있으셨나요?
        </p>
        <div className="flex gap-10 mb-8">
          <input
            type="radio"
            id="isConvenient"
            name="isConvenient"
            className="hidden"
            onChange={(e) =>
              e.target.checked === true && setClickedButton("isConvenient")
            }
          />
          <label htmlFor="isConvenient">
            <IsConvenient
              isConvenient
              isClicked={clickedButton === "isConvenient"}
            />
          </label>
          <input
            type="radio"
            id="isntConvenient"
            name="isConvenient"
            className="hidden"
            onChange={(e) =>
              e.target.checked === true && setClickedButton("isntConvenient")
            }
          />
          <label htmlFor="isntConvenient">
            <IsConvenient
              isConvenient={false}
              isClicked={clickedButton === "isntConvenient"}
            />
          </label>
        </div>
        <div className="flex flex-col mb-8">
          <label htmlFor="review" className="mb-4">
            리뷰 작성
          </label>
          <textarea
            className="border border-[#757575] resize-none outline-none font-sm px-5 py-2 rounded-lg h-36"
            name="review"
            id="review"
            placeholder="리뷰를 작성해주세요."
          />
        </div>
        <div className="flex flex-col mb-8">
          <UploadButton
            onUploadChange={(value: boolean) => {}}
            setUploadedFiles={(files) => {}}
          />
        </div>
        <p className="text-[#757575] text-sm mb-8">
          * 여러분의 솔직하고 구체적인 리뷰가 다른 이용자들에게 큰 도움이
          됩니다. 비속어나 모욕적인 언어 사용은 자제해 주세요. 사용자들에게
          도움이 되는 리뷰를 작성해주셔서 감사합니다.
        </p>
        <Button text="작성하기" onClick={() => {}} size="full" />
      </form>
    </Container>
  );
};

export default WriteReview;
