"use client";
import React, { useState } from "react";
import { NextArrowsProps } from "../../types/componentsTypes";
import { GoArrowRight } from "react-icons/go";
const NextArrow = ({ onClick }: NextArrowsProps) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className={`md:w-[46px] md:h-[46px] w-[38px] h-[38px] rounded-full ${
        isActive ? "bg-btnBackground" : "card-bg"
      } flex items-center justify-center cursor-pointer absolute top-[2%] right-[5%] xsm:right-[14%] xl:right-[5%] md:right-[0%] lg:top-[-10%]  transform -translate-y-1/2 transition-colors duration-300`}
    >
      <GoArrowRight className="md:h-[24px] md:w-[24px] h-[20px] w-[20px] text-white" />
    </div>
  );
};

export default NextArrow;
