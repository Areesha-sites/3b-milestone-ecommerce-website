"use client";
import { useState, useEffect, useRef } from "react";
import { LiaMedalSolid } from "react-icons/lia";
import { FaStarOfLife } from "react-icons/fa";
import { GiHamburger } from "react-icons/gi";
import Image from "next/image";
export default function AnimatedGrid() {
  const [experienceCount, setExperienceCount] = useState<number | string>(0);
  const [menuCount, setMenuCount] = useState<number | string>(0);
  const [orderCount, setOrderCount] = useState<number | string>(0);
  const gridRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const gridElement = gridRef.current; 
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounting(setExperienceCount, 15);
          startCounting(setMenuCount, 90);
          startCounting(setOrderCount, 500000, true);
        }
      },
      { threshold: 0.5 }
    );
    if (gridElement) {
      observer.observe(gridElement);
    }
    return () => {
      if (gridElement) {
        observer.unobserve(gridElement);
      }
    };
  }, []);
  const startCounting = (
    setter: React.Dispatch<React.SetStateAction<number | string>>, 
    target: number,
    addK = false
  ) => {
    let count = 0;
    const interval = setInterval(() => {
      count += Math.ceil(target / 50);
      if (count >= target) {
        count = target;
        clearInterval(interval);
      }
      setter(addK ? `${count.toLocaleString()}K` : count);
    }, 50);
  };
  return (
    <div
      ref={gridRef}
      className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 gap-y-[20px] gap-x-4 relative top-[80px] px-4"
    >
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="col-span-1 w-full h-[170px] card-bg rounded-[10px] flex flex-col justify-center items-center"
      >
        <LiaMedalSolid className="xl:h-16 xl:w-16 h-12 w-12 text-btnBackground" />
        <div className="flex justify-center">
          <h1 className="text-[30px] text-white font-roboto font-bold">
            {experienceCount}
          </h1>
          <FaStarOfLife className="h-2 w-2 text-btnBackground" />
        </div>
        <p className="text-white/50  xxl:text-[18px] font-roboto text-[15px] font-normal">
          Year Experience
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="col-span-1 sm:col-span-1 w-full h-[170px] card-bg rounded-[10px] flex flex-col justify-center gap-[5px] items-center"
      >
        <GiHamburger className="xl:h-16 xl:w-16 h-12 w-12 text-btnBackground" />
        <div className="flex justify-center">
          <h1 className="text-[30px] text-white font-roboto font-bold">
            {menuCount}
          </h1>
          <FaStarOfLife className="h-2 w-2 text-btnBackground" />
        </div>
        <p className="text-white/50  xxl:text-[18px] font-roboto text-[15px] font-normal">
          Menu Variant
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-1 w-full h-[170px] card-bg rounded-[10px] flex flex-col justify-center items-center"
      >
        <Image
          src="/serve-svgrepo-com.svg"
          alt=""
          height={64}
          width={64}
          className="xl:h-20 xl:w-20 h-16 w-16"
        />
        <div className="flex justify-center">
          <h1 className="text-[30px] text-white font-roboto font-bold">
            {orderCount}
          </h1>
          <FaStarOfLife className="h-2 w-2 text-btnBackground" />
        </div>
        <p className="text-white/50  xxl:text-[18px] font-roboto text-[15px] font-normal">
          Order Served
        </p>
      </div>
    </div>
  );
}