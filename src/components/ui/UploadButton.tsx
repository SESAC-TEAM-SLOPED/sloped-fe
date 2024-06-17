import React, { useRef, useState } from "react";
import Button from "./Button";
import { FaTimes } from "react-icons/fa";
import UploadImage from "../icons/UploadImage";

interface UploadButtonProps {
  onUploadChange: (value: boolean) => void;
  setUploadedFiles: (files: File[]) => void;
}

const UploadButton: React.FC<UploadButtonProps> = ({
  onUploadChange,
  setUploadedFiles,
}) => {
  const [images, setImages] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploaded, setUploaded] = useState(false);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      // setUploaded(true);
      onUploadChange(true);
      const newImages = Array.from(selectedFiles).map((file) =>
        URL.createObjectURL(file),
      );
      const newFilesArray = Array.from(selectedFiles);
      setImages((prevImages) => [...prevImages, ...newImages].slice(0, 3));

      const updatedFiles = [...files, ...newFilesArray].slice(0, 3);
      setFiles(updatedFiles);
      setUploadedFiles(updatedFiles);
    } else {
      // setUploaded(false);
      onUploadChange(false);
      setFiles([]);
      setUploadedFiles([]);
    }
  };

  const handleButtonClick = () => {
    if (images.length >= 3) {
      alert("최대 3장까지 업로드 가능합니다.");
      return;
    }
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    const updatedFiles = files.filter((_, i) => i !== index);
    setImages(updatedImages);
    setFiles(updatedFiles);
    setUploadedFiles(updatedFiles);
    if (updatedImages.length === 0) {
      onUploadChange(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-center mb-2 w-full h-32 rounded-lg border-2 border-blue-200 transition-colors duration-300">
        {images.length === 0 && (
          <div className="flex flex-col items-center">
            <UploadImage color="#888" />
            <p className="mt-2 text-gray-600 text-base text-center">
              사진을 업로드해주세요 (최대 3장)
            </p>
          </div>
        )}
        <div className="flex space-x-2">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image}
                alt={`uploaded ${index}`}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <button
                className="absolute top-1 right-1 bg-gray-800 text-white rounded-full p-1"
                onClick={() => handleRemoveImage(index)}
              >
                <FaTimes size={12} />
              </button>
            </div>
          ))}
        </div>
      </div>
      <input
        type="file"
        multiple
        accept="image/*"
        ref={fileInputRef}
        onChange={handleUpload}
        className="hidden"
      />
      <Button
        text="업로드"
        size="full"
        onClick={handleButtonClick}
        disabled={images.length >= 3}
      />
    </div>
  );
};

export default UploadButton;
