import { ReactNode } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const BottomSheet = ({ isOpen, onClose, children }: Props) => {
  return (
    <div
      className={`bg-white border rounded-t-lg p-4 ${isOpen ? "translate-y-0 " : "bottom-0 z-1"}`}
    >
      {children}
    </div>
  );
};

export default BottomSheet;
