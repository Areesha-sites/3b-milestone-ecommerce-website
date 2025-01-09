"use client";
import React, { useState, useEffect } from "react";
import { testimonialsData } from "../../api/route";
import Image from "next/image";
import { IoStar } from "react-icons/io5";
const TestimonialCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="h-[550px] mx-auto md:w-[650px] xl:w-[1000px]">
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="lg:w-[868.47px] lg:h-[330px] md:w-[650px] md:h-[400px] xxl:h-[380px] w-[300px] ms:w-full sm:w-full xsm:w-full h-[300px] relative md:top-[300px] xl:left-0 lg:left-[-110px] top-[230px] left-[-10px] card-bg shadow-custom xl:mx-auto sm:left-0 "
      >
        <div className="lg:w-[696.57px] md:h-[475.89px] md:w-[598px] h-[200px] flex flex-col justify-center items-center w-full mx-auto relative md:top-[-110px] gap-y-[5px] top-[10px]">
          <Image
            src={testimonialsData[currentIndex].image}
            alt={testimonialsData[currentIndex].name}
            height={134}
            width={133}
            className="md:w-[110px] md:h-[110px] w-[60px] h-[60px] object-cover rounded-full "
          />
          <div className="flex justify-center items-center flex-col mx-auto w-full gap-y-[5px]">
            <Image
              src="/quote-mark-svgrepo-com.svg"
              alt="quotes-image"
              height={48}
              width={48}
              className="lg:w-[38px] lg:h-[38px] md:w-[36px] md:h-[36px] w-[25px] h-[25px]"
            />
            <p className=" w-full px-5 md:text-[14px] xxl:text-[16px] text-[10px] md:px-3 text-white/50 font-roboto text-center">
              {testimonialsData[currentIndex].desc}
            </p>
            <div className="flex justify-center items-center gap-[5px] text-center">
              <IoStar className="md:h-[14px] md:w-[14px] w-[10px] h-[10px] text-btnBackground" />
              <IoStar className="md:h-[14px] md:w-[14px] w-[10px] h-[10px] text-btnBackground" />
              <IoStar className="md:h-[14px] md:w-[14px] w-[10px] h-[10px] text-btnBackground" />
              <IoStar className="md:h-[14px] md:w-[14px] w-[10px] h-[10px] text-btnBackground" />
              <IoStar className="md:h-[14px] md:w-[14px] w-[10px] h-[10px] text-btnBackground" />
            </div>
            <h3 className=" font-roboto font-bold md:text-[26px] text-[16px] text-white whitespace-nowrap text-center ">
              {testimonialsData[currentIndex].name}
            </h3>
            <p className="font-normal md:text-[16px] xl:text-[14px] text-[10px] whitespace-nowrap text-white/50 font-roboto text-center ">
              &quot;{testimonialsData[currentIndex].profession}&quot;
            </p>
          </div>
        </div>
        <div className="flex justify-center space-x-2  relative md:top-[-70px] lg:top-[-130px] xxl:top-[-80px] top-[120px]">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              className={`md:w-[10px] md:h-[10px] w-[8px] h-[8px] rounded-full ${
                index === currentIndex
                  ? "bg-[#ff9f0d]"
                  : "bg-[#ff9f0d] opacity-[30%]"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TestimonialCards;
