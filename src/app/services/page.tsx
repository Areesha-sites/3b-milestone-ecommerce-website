"use client";
import React from "react";
import {
  FaUserTie,
  FaHamburger,
  FaTruck,
  FaConciergeBell,
} from "react-icons/fa";
import { ServicesCardsPropsTypes } from "../../../types/componentsTypes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const servicesData: ServicesCardsPropsTypes[] = [
  {
    id: "1",
    icon: (
      <FaTruck className="h-12 w-12 xxl:h-16 xxl:w-16 text-btnBackground group-hover:text-white" />
    ),
    title: "Fast Food Delivery",
    description:
      "Get your favorite meals delivered hot and fresh to your doorstep, right on time available in all major areas.",
  },
  {
    id: "2",
    icon: (
      <FaConciergeBell className="h-12 w-12 xxl:h-16 xxl:w-16 text-btnBackground group-hover:text-white" />
    ),
    title: "Events Catering",
    description:
      "Hosting an event? Let us take care of the food with our professional catering service for weddings, parties, and corporate events.",
  },
  {
    id: "3",
    icon: (
      <FaHamburger className="h-12 w-12 xxl:h-16 xxl:w-16 text-btnBackground group-hover:text-white" />
    ),
    title: "Customizable Meals",
    description:
      "Tailor your meal exactly how you like it. Perfect for vegetarians, spice lovers, or those with specific dietary needs.",
  },
  {
    id: "4",
    icon: (
      <FaUserTie className="h-12 w-12 xxl:h-16 xxl:w-16 text-btnBackground group-hover:text-white" />
    ),
    title: "Weekly Meal Plans",
    description:
      "Save time and money with our weekly meal subscription plans. Fresh and healthy meals delivered daily.",
  },
  {
    id: "5",
    icon: (
      <FaTruck className="h-12 w-12 xxl:h-16 xxl:w-16 text-btnBackground group-hover:text-white" />
    ),
    title: "Quick Takeaway",
    description:
      "Short on time? Order online and pick up your meal without waiting. Convenient and hassle-free.",
  },
  {
    id: "6",
    icon: (
      <FaConciergeBell className="h-12 w-12 xxl:h-16 xxl:w-16 text-btnBackground group-hover:text-white" />
    ),
    title: "Exclusive Deals",
    description:
      "Enjoy amazing discounts and combo offers. Check out our special deals available for a limited time!",
  },
];

const Services = () => {
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
      <section className="bg-black w-full h-auto py-44 md:pt-52 lg:pt-48 pt-40 md:px-14 px-5 text-white">
        <div className="flex justify-center items-center flex-col gap-y-5">
          <span
            data-aos="fade-up"
            data-aos-delay="200"
            className="xl:text-[18px] md:text-[15px] text-[14px] mb-[-20px] lg:mb-[-10px] md:mb-[-10px] font-greatVibes text-btnBackground font-normal text-center"
          >
            Delivering Taste, Crafting Smiles.
          </span>
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="uppercase xxl:text-[54px] xl:text-[48px] md:text-[38px] text-[28px] leading-[30px] font-bold font-poppins lg:text-[43px] text-center xl:leading-[45px] xl:w-[800px] md:leading-[38px] xxl:leading-[55px]"
          >
            <span className="text-btnBackground"> Our Services:</span> delicious
            Food, Delivered with Excellence
          </h1>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="border-b-[4px] w-[100px] border-btnBackground"
          ></div>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white/70 xxl:text-[16px] text-[12px] lg:text-[14px] font-roboto font-normal xl:w-[800px] lg:w-[800px] md:w-[600px] text-center w-full"
          >
            Explore the premium services we offer to make your food experience
            seamless, delightful, and memorable.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 lg:grid-cols-3 w-full mx-auto max-w-[320px] md:max-w-none px-5 mt-9">
          {servicesData.map((service) => (
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              key={service.id}
              className="w-full h-[230px] card-bg shadow-2xl px-4 py-7 flex flex-col xl:justify-start gap-[10px] group hover:bg-hoverBtnBackground transition-all duration-500 ease-linear cursor-pointer justify-center"
            >
              <div className="text-btnBackground transition duration-300">
                {service.icon}
              </div>
              <h1 className="font-semibold text-[20px] xxl:text-[24px] font-roboto text-white group-hover:text-white transition duration-300">
                {service.title}
              </h1>
              <p className="text-white/50 font-normal xxl:text-[16px] text-[13px] font-roboto group-hover:text-white transition duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
