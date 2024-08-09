import { ReactNode } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const BottomSheet = ({ isOpen, onClose, children }: Props) => {
  return (
    <div
      className={`bg-white border rounded-t-lg p-4 transition-transform transform ${isOpen ? "translate-y-0 " : "translate-y-full z-100"}`}
    >
      {children}
    </div>
  );
};

export default BottomSheet;
