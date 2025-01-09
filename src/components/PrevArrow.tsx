"use client";
import React, { useState } from "react";
import { PrevArrowsProps } from "../../types/componentsTypes";
import { GoArrowLeft } from "react-icons/go";
const PrevArrow = ({ onClick }: PrevArrowsProps) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className={`md:w-[46px] md:h-[46px] w-[38px] h-[38px] rounded-full ${
        isActive ? "bg-btnBackground" : "card-bg"
      } flex items-center justify-center cursor-pointer absolute top-[2%] xsm:right-[25%] xl:right-[10%] right-[20%] lg:right-[6%] lg:top-[-10%] md:right-[8%] transform -translate-y-1/2 transition-colors duration-300`}
    >
      <GoArrowLeft className="md:h-[24px] md:w-[24px] h-[20px] w-[20px] text-white" />
    </div>
  );
};

export default PrevArrow;
