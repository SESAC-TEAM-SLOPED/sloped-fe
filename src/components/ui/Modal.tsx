import { ReactNode } from "react";
import CloseIcon from "../icons/CloseIcon";

type Props = {
  children?: ReactNode;
  onClose: () => void;
  width?: string;
  height?: string;
  isModalOpen?: boolean;
};

const Modal = ({ onClose, children, width, height, isModalOpen }: Props) => {
  return (
    <section
      className="fixed top-0 left-0 flex flex-col justify-center items-center w-full h-full z-50 bg-neutral-900/70"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="bg-white w-96 h-48 max-w-7xl rounded-md flex items-center justify-center relative"
        style={{ width, height }}
      >
        <button
          className="absolute top-3 right-3 p-1 text-white"
          onClick={() => onClose()}
        >
          <CloseIcon color="#8d8d8d" />
        </button>
        {children}
      </div>
    </section>
  );
};

export default Modal;
