import React, { ReactNode } from "react";

interface BannerProps {
  children?: ReactNode;
  height?: string;
  bg: string;
  className?: string;
}

const Banner: React.FC<BannerProps> = ({ children, height, bg, className }) => {
  return (
    <div
      className={`flex flex-col justify-center w-full h-[731px] bg-cover bg-no-repeat bg-center mb-6 ${bg} ${height} ${className}`}
    >
      {children}
    </div>
  );
};

export default Banner;
