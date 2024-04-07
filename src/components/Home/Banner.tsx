import React, { ReactNode } from "react";

interface BannerProps {
  children?: ReactNode;
  height?: string;
  bg: string;
}

const Banner: React.FC<BannerProps> = ({ children, height, bg }) => {
  return (
    <div
      className={`flex flex-col justify-center w-full h-[731px] bg-cover bg-no-repeat mb-6 ${bg} ${height}`}
    >
      {children}
    </div>
  );
};

export default Banner;
