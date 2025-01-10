"use client";
import React, { useEffect } from "react";
import BlogCardsList from "@/components/BlogCardsList";
import BlogSidebar from "@/components/BlogSidebar";
import AOS from "aos";
import "aos/dist/aos.css";
const Blog = () => {
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
      <section className="bg-black w-full h-auto pt-40 px-5 md:px-14 lg:px-7 lg:pt-48 text-white">
        <div className="flex flex-col items-center gap-y-5">
          <span
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-[14px] md:text-[15px] xl:text-[18px] mb-[-20px] font-greatVibes text-btnBackground font-normal text-center"
          >
            Serving Stories, One Bite at a Time.
          </span>
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="uppercase text-[28px] md:text-[38px] lg:text-[43px] xl:text-[48px] xxl:text-[54px] font-bold font-poppins text-center leading-[30px] md:leading-[45px] lg:leading-[50px] xl:leading-[53px] xl:w-[700px] lg:w-[600px]"
          >
            5-Minute <span className="text-btnBackground">Recipes</span> for
            Busy Weekdays
          </h1>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="border-b-[4px] w-[100px] border-btnBackground"
          ></div>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white/70 text-[12px] lg:text-[14px] xl:text-[16px] font-roboto font-normal xl:w-[800px] text-center"
          >
            Discover delicious and quick meals that save your time and energy!
          </p>
        </div>
        <div className="flex flex-col-reverse lg:flex-row mt-8 gap-8 xxl:gap-[10px] xxl:mt-40 xl:mt-14 lg:mt-20 xxl:px-24">
          <div className="w-full lg:w-2/3 relative top-[-10px] xxl:top-[10px]">
            <BlogCardsList />
          </div>
          <div className="w-full lg:w-1/3 xxl:w-[20%] lg:sticky lg:top-20 ">
            <BlogSidebar />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
