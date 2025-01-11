"use client";
import React from "react";
import { GoSearch } from "react-icons/go";
import Image from "next/image";
import { SlCalender } from "react-icons/sl";
import { BlogSideBarDataTypes } from "../../types/componentsTypes";
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import { VscSettings } from "react-icons/vsc";
const BlogDetailSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const sidebarData: BlogSideBarDataTypes[] = [
    {
      image: "/burger-svgrepo-com (1).svg",
      name: "Burger",
      blogNum: "23",
    },
    {
      image: "/fried-chicken-lunch-svgrepo-com.svg",
      name: "Fried Chicken",
      blogNum: "24",
    },
    {
      image: "/fries-svgrepo-com.svg",
      name: "french fries",
      blogNum: "11",
    },
    {
      image: "/pizza-illustration-6-svgrepo-com.svg",
      name: "Hot Pizzas",
      blogNum: "05",
    },
    {
      image: "/sandwich-svgrepo-com.svg",
      name: "Sandwich",
      blogNum: "06",
    },
    {
      image: "/bread-svgrepo-com.svg",
      name: "Bread",
      blogNum: "10",
    },
    {
      image: "/rice-chopsticks-svgrepo-com.svg",
      name: "Fried Rice",
      blogNum: "13",
    },
    {
      image: "/hot-dog-2-svgrepo-com.svg",
      name: "Hot Dog",
      blogNum: "07",
    },
  ];
  return (
    <>
      <button
        className="block lg:hidden fixed top-[350px] ms:top-[320px] md:top-[-20px] right-6 md:right-11 hover:bg-btnBackground bg-gray-800 p-2 rounded-full "
        onClick={toggleSidebar}
      >
        <VscSettings className="h-5 w-5 text-white" />
      </button>
      <aside
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:static top-0 left-0 z-40 h-[100vh] lg:h-auto bg-black lg:bg-transparent text-white w-full p-5 md:p-0 transform transition-transform duration-300  md:w-[400px] ${
          isSidebarOpen ? "xs:overflow-y-auto" : "lg:overflow-visible"
        } lg:w-[330px]`}
      >
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex flex-col gap-[30px]"
        >
          <button
            className="lg:hidden mb-4 self-end text-white md:mt-4 md:mr-4"
            onClick={toggleSidebar}
          >
            <FiX className="text-[20px]" />
          </button>
          <div className="lg:w-[330px] h-[140px] w-full text-white border-[1px] border-white/15 py-4 px-7 flex flex-col gap-[25px] md:mx-auto md:w-[330px] xxl:w-[390px] xxl:px-12">
            <div className="flex gap-[10px] justify-start items-center">
              <span className="border-l-[2px] border-btnBackground h-[20px]"></span>
              <span className="text-white font-medium font-roboto text-[18px] uppercase">
                Search
              </span>
            </div>
            <div className="flex justify-start xl:w-[320px] w-[271px] mx-auto">
              <input
                type="text"
                className="py-2 px-4 h-[45px] md:w-[200px] w-[180px] border-none outline-none text-black/55 font-normal font-roboto text-[12px]"
                placeholder="Search Your Keyword"
              />
              <button className="flex justify-center items-center bg-btnBackground w-[50px] h-[45px] hover:bg-hoverBtnBackground">
                <GoSearch className="h-[20px] w-[20px] text-white" />
              </button>
            </div>
          </div>
          <div className="lg:w-[330px] md:mx-auto md:w-[360px] w-full h-[340px] text-white border-[1px] border-white/15 py-4 px-7 flex flex-col gap-[25px] xxl:w-[390px] xxl:px-12">
            <div className="flex gap-[10px] justify-start items-center">
              <span className="border-l-[2px] border-btnBackground h-[20px]"></span>
              <span className="text-white font-medium font-roboto text-[18px] uppercase">
                Trending Products
              </span>
            </div>
            <div className="flex justify-start gap-[15px]">
              <Image
                src="/sidebar1.jpg"
                alt="product 1"
                width={1000}
                height={1000}
                quality={100}
                priority
                className="h-[60px] w-[80px] rounded-[5px] object-cover"
              />
              <div className="flex flex-col gap-[5px]">
                <p className="text-[15px] font-medium leading-[20px] text-white font-roboto hover:text-btnBackground transition-all ease-in-out duration-300 cursor-pointer w-[150px]">
                  Discover the Latest in Electronics
                </p>
                <div className="flex gap-[10px] items-center">
                  <SlCalender className="h-[12px] w-[12px] text-btnBackground" />
                  <p className="text-[12px] text-btnBackground font-roboto font-normal">
                    10th January 2024
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-start gap-[15px]">
              <Image
                src="/sidebar2.jpg"
                alt="product 2"
                width={1000}
                height={1000}
                quality={100}
                priority
                className="h-[60px] w-[80px] rounded-[5px] object-cover"
              />
              <div className="flex flex-col gap-[5px]">
                <p className="text-[15px] font-medium leading-[20px] text-white font-roboto hover:text-btnBackground transition-all ease-in-out duration-300 cursor-pointer w-[150px]">
                  Style Trends: Top Picks for You
                </p>
                <div className="flex gap-[10px] items-center">
                  <SlCalender className="h-[12px] w-[12px] text-btnBackground" />
                  <p className="text-[12px] text-btnBackground font-roboto font-normal">
                    22nd February 2024
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-start gap-[15px]">
              <Image
                src="/sidebar3.jpg"
                alt="product 3"
                width={1000}
                height={1000}
                quality={100}
                priority
                className="h-[60px] w-[80px] rounded-[5px] object-cover"
              />
              <div className="flex flex-col gap-[5px]">
                <p className="text-[15px] font-medium leading-[20px] text-white font-roboto hover:text-btnBackground transition-all ease-in-out duration-300 cursor-pointer w-[150px]">
                  Must-Have Gadgets for 2024
                </p>
                <div className="flex gap-[10px] items-center">
                  <SlCalender className="h-[12px] w-[12px] text-btnBackground" />
                  <p className="text-[12px] text-btnBackground font-roboto font-normal">
                    5th March 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[330px] md:mx-auto md:w-[360px] w-full h-[570px] text-white border-[1px] border-white/15 py-4 px-7 flex flex-col gap-[25px] xxl:w-[390px] xxl:px-12">
            <div className="flex gap-[10px] justify-start items-center">
              <span className="border-l-[2px] border-btnBackground h-[20px]"></span>
              <span className="text-white font-medium font-roboto text-[18px] uppercase">
                Categories
              </span>
            </div>
            <div className="flex flex-col gap-[15px]">
              {sidebarData.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-start xl:w-[270px] w-[250px] mx-auto bg-white relative left-[-8px] lg:left-0"
                >
                  <div className="flex justify-start items-center gap-[7px] w-[230px] px-3">
                    <Image
                      src={item.image}
                      alt={item.name}
                      height={40}
                      width={40}
                      className="h-[30px] w-[30px]"
                    />
                    <p className="text-black/65 hover:text-btnBackground transition-all ease-in-out duration-300 cursor-pointer font-medium font-roboto text-[14px] uppercase">
                      {item.name}
                    </p>
                  </div>
                  <button className="flex justify-center items-center bg-btnBackground w-[50px] h-[45px] hover:bg-hoverBtnBackground text-[15px] text-white font-roboto font-semibold">
                    {item.blogNum}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-[330px] md:mx-auto md:w-[360px] w-full h-[130px] text-white border-[1px] border-white/15 py-4 px-7 flex flex-col gap-[25px] xxl:w-[390px] xxl:px-12">
            <div className="flex gap-[10px] justify-start items-center">
              <span className="border-l-[2px] border-btnBackground h-[20px]"></span>
              <span className="text-white font-medium font-roboto text-[18px] uppercase">
                Never Miss News
              </span>
            </div>
            <div className="flex gap-[10px] items-center ">
              <div className="flex justify-center items-center w-[40px] h-[40px] rounded-full bg-white hover:bg-btnBackground transition-all duration-700 cursor-pointer ease-in-out">
                <GrFacebookOption className="h-5 w-5 text-black" />
              </div>
              <div className="flex justify-center items-center w-[40px] h-[40px] rounded-full bg-white hover:bg-btnBackground transition-all duration-700 cursor-pointer ease-in-out">
                <FaTwitter className="h-5 w-5 text-black" />
              </div>
              <div className="flex justify-center items-center w-[40px] h-[40px] rounded-full bg-white hover:bg-btnBackground transition-all duration-700 cursor-pointer ease-in-out">
                <FaInstagram className="h-5 w-5 text-black" />
              </div>
              <div className="flex justify-center items-center w-[40px] h-[40px] rounded-full bg-white hover:bg-btnBackground transition-all duration-700 cursor-pointer ease-in-out">
                <FaLinkedinIn className="h-5 w-5 text-black" />
              </div>
              <div className="flex justify-center items-center w-[40px] h-[40px] rounded-full bg-white hover:bg-btnBackground transition-all duration-700 cursor-pointer ease-in-out">
                <FaYoutube className="h-5 w-5 text-black" />
              </div>
            </div>
          </div>
          <div className="lg:w-[330px] md:mx-auto md:w-[360px] w-full h-[270px] text-white border-[1px] border-white/15 py-4 px-7 flex flex-col gap-[10px] xxl:w-[390px] xxl:px-12">
            <div className="flex gap-[10px] justify-start items-center ">
              <span className="border-l-[2px] border-btnBackground h-[20px]"></span>
              <span className="text-white font-medium font-roboto text-[18px] uppercase">
                Popular Tags
              </span>
            </div>
            <div className="flex justify-start gap-[10px] mt-4">
              <span className="bg-white py-[6px] px-5 text-black font-semibold cursor-pointer hover:text-white hover:bg-btnBackground transition-all duration-700 ease-in-out text-[14px] font-roboto  ">
                Burger
              </span>
              <span className="bg-white py-[6px] px-5 text-black font-semibold cursor-pointer hover:text-white hover:bg-btnBackground transition-all duration-700 ease-in-out text-[14px] font-roboto  ">
                Hot Dog
              </span>
            </div>
            <div className="flex justify-start gap-[10px]">
              <span className="bg-white py-[6px] px-5 text-black font-semibold cursor-pointer hover:text-white hover:bg-btnBackground transition-all duration-700 ease-in-out text-[14px] font-roboto  ">
                French Fry
              </span>
              <span className="bg-white py-[6px] px-5 text-black font-semibold cursor-pointer hover:text-white hover:bg-btnBackground transition-all duration-700 ease-in-out text-[14px] font-roboto  ">
                Chicken
              </span>
            </div>
            <div className="flex justify-start gap-[10px]">
              <span className="bg-white py-[6px] px-5 text-black font-semibold cursor-pointer hover:text-white hover:bg-btnBackground transition-all duration-700 ease-in-out text-[14px] font-roboto  ">
                Pasta
              </span>
              <span className="bg-white py-[6px] px-5 text-black font-semibold cursor-pointer hover:text-white hover:bg-btnBackground transition-all duration-700 ease-in-out text-[14px] font-roboto  ">
                Sandwich
              </span>
            </div>
            <div className="flex justify-start gap-[10px]">
              <span className="bg-white py-[6px] px-5 text-black font-semibold cursor-pointer hover:text-white hover:bg-btnBackground transition-all duration-700 ease-in-out text-[14px] font-roboto  ">
                Landing
              </span>
              <span className="bg-white py-[6px] px-5 text-black font-semibold cursor-pointer hover:text-white hover:bg-btnBackground transition-all duration-700 ease-in-out text-[14px] font-roboto  ">
                Fast Food
              </span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default BlogDetailSidebar;
