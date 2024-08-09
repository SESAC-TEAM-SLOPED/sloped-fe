import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import IsConvenient from "../../components/IsConvenient/IsConvenient";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import UploadButton from "../../components/ui/UploadButton";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../../service/axiosInstance";
import { serverUrl } from "../../constant/url";

const UpdateReview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as {
    facilityReviewId: number;
    facilityName: string;
    facilityId: string;
    content: string;
    isConvenient: boolean;
  } | null;
  const {
    facilityReviewId,
    facilityName,
    facilityId,
    content: initialContent,
    isConvenient,
  } = state || {};
  const [clickedButton, setClickedButton] = useState(
    isConvenient ? "isConvenient" : "isntConvenient",
  );
  const [content, setContent] = useState(initialContent || "");
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!facilityId || !facilityName) {
      alert("잘못된 접근입니다.");
      navigate(-1); // 이전 페이지로 돌아가기
    }
  }, [facilityId, facilityName, navigate]);

  const submitForm = async () => {
    if (!clickedButton) {
      setError("키워드를 선택해주세요.");
      return;
    }

    if (content.trim() === "") {
      setError("리뷰 내용을 작성해주세요.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append(
        "isConvenient",
        (clickedButton === "isConvenient").toString(),
      );
      formData.append("content", content);
      uploadedFiles.forEach((file) => {
        formData.append("files", file);
      });

      const response = await axiosInstance.put(
        `${serverUrl}/api/reviews/${facilityReviewId}/update-review`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      if (response.status === 204) {
        navigate(-1);
      }
    } catch (error: any) {
      if (error.response) {
        alert("폼 제출에 실패했습니다. 다시 시도해주세요.");
      }
    }
  };

  return (
    <Container hasHeader={true} hasNav={true}>
      <Header text="리뷰 수정" closeButton={true} />
      <h3 className="text-xl mb-8">{facilityName}</h3>
      <form onSubmit={submitForm}>
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
            리뷰 수정
          </label>
          <textarea
            className="border border-[#757575] resize-none outline-none font-sm px-5 py-2 rounded-lg h-36"
            name="review"
            id="review"
            placeholder="리뷰를 작성해주세요."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-8">
          <UploadButton
            onUploadChange={(value: boolean) => {}}
            setUploadedFiles={setUploadedFiles}
          />
        </div>
        <p className="text-[#757575] text-sm mb-8">
          * 여러분의 솔직하고 구체적인 리뷰가 다른 이용자들에게 큰 도움이
          됩니다. 비속어나 모욕적인 언어 사용은 자제해 주세요. 사용자들에게
          도움이 되는 리뷰를 작성해주셔서 감사합니다.
        </p>
        <Button text="수정하기" onClick={submitForm} size="full" />
        {error && <p className="text-red-500 mb-4">{error}</p>}
      </form>
    </Container>
  );
};

export default UpdateReview;
