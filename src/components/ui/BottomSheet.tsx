import { ReactNode } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const BottomSheet = ({ isOpen, onClose, children }: Props) => {
  return (
    <div
      className={`min-w-96 max-w-screen-sm mx-auto mb-16 fixed inset-x-0 bottom-0 bg-white border rounded-t-lg p-4 transition-transform transform ${isOpen ? "translate-y-0 " : "translate-y-full"}`}
    >
      {children}
    </div>
  );
};

export default BottomSheet;
