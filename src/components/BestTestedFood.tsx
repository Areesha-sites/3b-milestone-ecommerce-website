import React from "react";
import Image from "next/image";
import Link from "next/link";
const BestTestedFood = () => {
  return (
    <>
      <section className="w-full md:py-28 py-11 md:px-14 px-5 bg-black flex justify-between mx-auto lg:px-2">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-5 w-full mx-auto md:px-16 xl:gap-x-6 lg:gap-x-6 xxl:w-[1240px] xxl:gap-x-9">
          <Image
            data-aos="fade-up"
            data-aos-delay="200"
            src="/best-food-image.jpg"
            alt="burger"
            height={500}
            width={500}
            className="lg:h-[350px] lg:w-[530px] md:h-[300px] xxl:h-[400px] w-full object-cover h-[200px] rounded-[20px]"
          />
          <div className=" lg:w-[497px] xl:w-[579px] md:w-[497px] w-full h-[350px] flex justify-between flex-col">
            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              className="md:text-4xl text-2xl xxl:text-[42px] font-extrabold text-center md:text-left text-white font-roboto uppercase lg:text-[35px] lg:w-[500px]"
            >
              Experience the Finest Food & Drinks at Your Fingertips
            </h1>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="border-b-[4px] border-btnBackground w-[120px] md:mx-0 mx-auto"
            ></div>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-white/60 md:text-[14px] lg:w-[400px] xxl:text-[16px] text-[12px] md:text-left text-center font-roboto"
            >
              Explore a wide range of freshly prepared meals and premium drinks,
              crafted with care and delivered straight to your door. Enjoy the
              ultimate food shopping experience today.
            </p>
            <div className="flex md:flex-col md:gap-[15px] gap-[7px]">
              <div className="flex justify-between items-center md:flex-row flex-col gap-y-4 md:w-[400px] w-full">
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="w-[100px] h-[20px] flex items-center gap-[8px]"
                >
                  <Image
                    src="/correct-signal-svgrepo-com (3).svg"
                    alt="true-icon"
                    height={16}
                    width={16}
                    className="h-[14px] w-[14px] font-bold text-btnBackground"
                  />
                  <span className="font-roboto xxl:text-[16px]  text-white/60 md:text-[14px] text-[12px] whitespace-nowrap">
                    Affordable Prices
                  </span>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="w-[100px] h-[20px] flex items-center gap-[8px]"
                >
                  <Image
                    src="/correct-signal-svgrepo-com (3).svg"
                    alt="true-icon"
                    height={16}
                    width={16}
                    className="h-[14px] w-[14px] font-bold text-btnBackground"
                  />
                  <span className="font-roboto xxl:text-[16px] text-white/60 md:text-[14px] text-[12px] whitespace-nowrap">
                    Exceptional Service
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center md:flex-row flex-col md:w-[400px] w-full ">
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="w-[100px] h-[20px] flex items-center gap-[8px]"
                >
                  <Image
                    src="/correct-signal-svgrepo-com (3).svg"
                    alt="true-icon"
                    height={16}
                    width={16}
                    className="h-[14px] w-[14px] font-bold text-btnBackground"
                  />
                  <span className="font-roboto xxl:text-[16px] text-white/60  md:text-[14px] text-[12px] whitespace-nowrap">
                    Fresh Ingredients
                  </span>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="w-[100px] h-[20px] flex items-center gap-[8px]"
                >
                  <Image
                    src="/correct-signal-svgrepo-com (3).svg"
                    alt="true-icon"
                    height={16}
                    width={16}
                    className="h-[14px] w-[14px] font-bold text-btnBackground"
                  />
                  <span className="font-roboto xxl:text-[16px]  text-white/60 md:text-[14px] text-[12px] md:whitespace-nowrap whitespace-normal leading-[13px] ">
                    Strict Hygiene Standards
                  </span>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="flex lg:justify-start items-center justify-center"
            >
              <button className="px-6 py-2 text-white font-medium bg-btnBackground transition-all duration-200 ease-in-out hover:bg-hoverBtnBackground font-roboto md:w-[130px] md:h-[50px] h-[30px] w-[90px] rounded-[5px] uppercase whitespace-nowrap flex justify-center items-center md:text-[14px] text-[12px]">
                <Link href="/about"> Learn More</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BestTestedFood;
