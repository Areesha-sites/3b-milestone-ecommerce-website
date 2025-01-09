"use client";
import React from "react";
import MenuTabs from "@/components/MenuTabs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Menu = () => {
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
      <section className="bg-black w-full h-auto md:py-44 md:pt-52 py-44 lg:pt-48 pt-40 md:px-14 px-5 text-white">
        <div className="flex justify-center items-center flex-col gap-y-5">
          <span
            data-aos="fade-up"
            data-aos-delay="200"
            className="xl:text-[18px] md:text-[15px] text-[14px] mb-[-20px] lg:mb-[-10px] md:mb-[-10px] font-greatVibes text-btnBackground font-normal text-center"
          >
            Savor Every Bite, Relish Every Flavor
          </span>
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="uppercase xxl:text-[54px] xl:text-[48px] md:text-[38px] text-[28px] leading-[30px] font-bold font-poppins lg:text-[43px] text-center"
          >
            Discover <span className="text-btnBackground">Flavors</span> You
            will Love
          </h1>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="border-b-[4px] w-[100px] border-btnBackground"
          ></div>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white/70 xxl:text-[16px] text-[12px] lg:text-[14px] font-roboto font-normal xl:w-[800px] lg:w-[800px] md:w-[600px] text-center w-full "
          >
            Explore our carefully curated menu that showcases a variety of
            dishes, crafted with the freshest ingredients and a passion for
            perfection. Whether you are in the mood for a quick bite or a hearty
            meal, we have got something for every craving.
          </p>
        </div>
        <div className="xxl:mt-8">
          <MenuTabs />
        </div>
      </section>
    </>
  );
};

export default Menu;
