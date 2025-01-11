"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsTruck } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AnimatedGrid from "@/components/AnimatedGrid";
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <>
      <section className="w-full bg-black text-white h-auto px-2 py-36 lg:pt-40 xl:pt-40">
        <div className="grid xl:grid-cols-2 grid-cols-1 md:grid-cols-2 xxl:grid-cols-2 xxl:gap-x-[70px] xxl:px-4 gap-7 mx-auto px-4 sm:px-6 xl:px-24 max-w-[1200px] xxl:w-full">
          <div className="relative flex flex-col items-center">
            <Image
              data-aos="fade-up"
              data-aos-delay="200"
              src="/burger-text.png"
              alt="burger-text"
              width={1000}
              height={1000}
              quality={100}
              priority
              className="h-[100px] w-[100px] xl:h-[200px] xl:w-[200px] mx-auto absolute top-[10px] left-[30px] z-30 lg:top-[10px] lg:left-[70px] lg:w-[150px] lg:h-[150px] xl:top-0 xl:left-0 floating"
            />
            <Image
              data-aos="fade-up"
              data-aos-delay="200"
              src="/burgur.png"
              alt="burger"
              width={1000}
              height={1000}
              quality={100}
              priority
              className="h-[250px] w-[250px] xl:h-[400px] xl:w-[450px] mx-auto mt-4 xl:top-0 relative md:w-[300px] md:h-[300px] lg:h-[300px] lg:w-[350px]"
            />
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="about-tag bg-btnBackground w-[130px] h-[50px] xl:w-[180px] xl:h-[80px] lg:w-[150px] lg:h-[60px] text-[12px] xl:text-[23px] font-roboto text-white font-bold uppercase rounded-[10px] flex justify-center items-center mt-4 relative xl:top-[-130px] xl:left-[100px] left-[60px] top-[-80px] md:text-[18px]"
              style={{ transform: "rotate(-22deg)" }}
            >
              since /1985
            </div>
          </div>

          <div className="">
            <span
              data-aos="fade-up"
              data-aos-delay="200"
              className="xl:text-[18px] text-[14px] xxl:text-[18px] mt-2 font-greatVibes text-btnBackground font-normal"
            >
              About Our Food
            </span>
            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-white xl:text-[43px] text-[28px] leading-[30px] xl:leading-[50px] mt-3 font-extrabold uppercase  font-roboto lg:text-[35px] lg:leading-[35px]  xxl:text-[54px] "
            >
              The <span className="text-btnBackground">Heart</span> of Chow
              Champs
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className=" text-[12px] xl:text-[14px] xxl:text-[16px] text-white/65 font-normal mt-5 font-roboto"
            >
              At Chow Champs, we are passionate about providing the finest food
              with exceptional service. Our journey started with a vision to
              bring delicious and fresh meals to your doorstep, creating moments
              of joy with every bite.
            </p>
            <div className="flex gap-[5px] flex-col">
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="flex xl:items-center items-start md:flex-row flex-col justify-start gap-[20px] mt-4"
              >
                <div>
                  <Image
                    src="/food-1-svgrepo-com.svg"
                    alt="food"
                    width={1000}
                    height={1000}
                    quality={100}
                    priority
                    className="h-[55px] w-[55px]"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-semibold whitespace-normal text-[15px] xl:text-[18px] font-sans text-white uppercase">
                    super quality food
                  </h3>
                  <p className=" text-[12px] xxl:text-[16px] xl:text-[14px] text-white/65 font-sans font-normal">
                    A team of dreamers and doers build unique interactive music
                    and art
                  </p>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="flex xl:items-center items-start md:flex-row flex-col justify-start gap-[20px] mt-4"
              >
                <div>
                  <Image
                    src="/medal-reward-svgrepo-com.svg"
                    alt="medal"
                    width={1000}
                    height={1000}
                    quality={100}
                    priority
                    className="h-[50px] w-[50px]"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-semibold text-[15px] xl:text-[18px] font-sans text-white uppercase">
                    well reputation
                  </h3>
                  <p className="text-[12px] xxl:text-[16px] xl:text-[14px] text-white/65 font-sans font-normal">
                    A team of dreamers and doers build unique interactive music
                    and art
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <AnimatedGrid />
        </div>
        <div className="relative w-full xl:h-[56vh] xl:py-40 md:h-[50vh] lg:py-36 h-auto py-7 mt-16 top-[100px]">
          <div className="absolute inset-0">
            <Image
              src="/085fb90b4c54d2abed9de37bfa96ef6c.jpg"
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
              className="z-0"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-80 z-10"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
            <div className="flex justify-between items-center md:flex-row flex-col gap-[20px] md:px-6">
              <div className="">
                <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="text-[16px] xxl:text-[20px] text-btnBackground font-normal font-greatVibes z-30"
                >
                  Crispy, Every Bite Taste
                </p>
                <h1
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="xl:text-[40px] text-[25px] leading-[30px] font-extrabold font-roboto uppercase xl:leading-[40px] md:w-[323px] md:text-[31px] lg:text-[40px] xl:w-[450px] lg:w-[450px] lg:leading-[40px] z-50"
                >
                  30 minutes fast <br />
                  <span className="text-btnBackground">delivery </span>{" "}
                  challenge
                </h1>
                <Image
                  data-aos="fade-up"
                  data-aos-delay="200"
                  src="/tomato (1).png"
                  alt=""
                  width={1000}
                  height={1000}
                  quality={100}
                  priority
                  className="xl:w-[100px] animate-upDown xl:h-[130px] h-[50px] w-[30px] absolute left-0 rop-[30%] md:top-[70%] xl:top-[60%] lg:top-[90%] "
                />
              </div>
              <div className="">
                <Image
                  data-aos="fade-up"
                  data-aos-delay="200"
                  src="/delivery-man.png"
                  alt="delivery man"
                  width={1000}
                  height={1000}
                  quality={100}
                  priority
                  className="xl:h-[300px] xl:w-[400px] h-[180px] w-[230px] md:w-[300px] md:h-[200px] lg:h-[250px] lg:w-[360px]"
                />
              </div>
              <div className="">
                <Image
                  data-aos="fade-up"
                  data-aos-delay="200"
                  src="/chilli.png"
                  alt=""
                  width={1000}
                  height={1000}
                  quality={100}
                  priority
                  className="xl:w-[70px] xl:h-[70px] h-[50px] w-[50px] absolute right-0 top-[30%] md:top-[10%] xl:top-[30%] lg:top-[10%] animate-upDown"
                />
              </div>
              <button
                data-aos="fade-up"
                data-aos-delay="200"
                className="xl:h-[50px] xl:w-[160px] xl:py-3 h-[40px] w-[130px] py-2 px-5 rounded-[5px] bg-btnBackground outline-none text-white font-roboto text-[14px] whitespace-nowrap xl:text-[16px] font-semibold flex justify-center gap-[7px] items-center hover:bg-hoverBtnBackground"
              >
                <BsTruck className="h-6 w-6 text-white" />
                <Link href="/menu">Order Now</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
