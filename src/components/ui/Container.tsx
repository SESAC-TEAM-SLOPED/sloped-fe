import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  hasHeader?: boolean; // 페이지에 header를 포함하는지 여부
  hasNav?: boolean; // 페이지에 nav를 포함하는지 여부
  full?: boolean;
};

const Container = ({
  children,
  hasHeader = false,
  hasNav = false,
  full = false,
}: Props) => {
  return (
    <div
      className={`${hasHeader && !full ? "mt-[70px] px-[30px] pt-[20px]" : ""} ${hasHeader && full ? "mt-[70px]" : ""} ${hasNav ? "mb-16" : ""} text-[#404040]`}
    >
      {children}
    </div>
  );
};

export default Container;
