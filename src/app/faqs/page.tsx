"use client";
import React from "react";
import Link from "next/link";
import { RiQuestionMark } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Faqs = () => {
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
      <section className="bg-black w-full h-auto py-44 md:pt-52 lg:pt-48 pt-40 md:px-14 px-5 text-white  ">
        <div className="flex justify-center items-center flex-col gap-y-5 relative  left-0 ">
          <span
            data-aos="fade-up"
            data-aos-delay="200"
            className="xl:text-[18px] md:text-[15px] text-[14px] mb-[-20px] lg:mb-[-10px] md:mb-[-10px] font-greatVibes text-btnBackground font-normal text-center"
          >
            Your Question, Answered
          </span>
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="uppercase xl:text-[48px] xxl:text-[54px] md:text-[38px] text-[28px] leading-[30px] font-bold font-poppins lg:text-[43px] text-center"
          >
            Your questions,{" "}
            <span className="text-btnBackground">answered.</span>
          </h1>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="border-b-[4px] w-[100px] border-btnBackground"
          ></div>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white/70 xxl:text-[16px] xl:text-[14px] text-[12px] lg:text-[14px] font-roboto font-normal xl:w-[800px] lg:w-[800px] md:w-[600px] text-center w-full "
          >
            Have a question about Chow Champs? Check out our most frequently
            asked questions below. Can not find what you are looking for? Feel
            free to reach out through our Contact page!
          </p>
        </div>
        <div className="relative top-[-30px] xl:left-[50px] md:left-[30px] xl:top-0 mx-auto xl:w-[1000px]">
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="px-3 sm:px-1 xsm:px-1 sm:flex xxl:px-14 flex-col md:flex-row items-start mt-20 mb-10 "
          >
            <h3 className="py-3 font-bold text-lg xxl:text-[23px] text-btnBackground xl:w-[10%] md:w-[20%] xxl:w-[20%] font-roboto">
              Orders
            </h3>
            <div className="md:w-9/12 overflow-hidden">
              <div className="flex items-start mb-8">
                <div className="flex items-center justify-center p-3 mr-3 rounded-full bg-btnBackground text-white border-4 md:h-12 md:w-12 h-10 w-10 border-white text-xl font-semibold">
                  <RiQuestionMark className="md:h-7 md:w-7 h-6 w-6 text-white" />
                </div>
                <div className="text-md xxl:text-[20px]">
                  <h1 className="text-white font-semibold mb-2 font-roboto">
                    How do I place an order?
                  </h1>
                  <p className="text-white/50 text-[12px] xxl:text-[16px] lg:text-[14px] font-roboto xl:w-[600px]">
                    You can place an order directly from our website by browsing
                    the menu, adding items to your cart, and proceeding to
                    checkout.
                  </p>
                </div>
              </div>
              <div className="flex items-start mb-8">
                <div className="flex items-center justify-center p-3 mr-3 rounded-full bg-btnBackground text-white border-4 md:h-12 md:w-12 h-10 w-10 border-white text-xl font-semibold">
                  <RiQuestionMark className="md:h-7 md:w-7 h-10 w-10 text-white" />
                </div>
                <div className="text-md xxl:text-[20px]">
                  <h1 className="text-white font-semibold font-roboto mb-2">
                    Can I modify my order after placing it?
                  </h1>
                  <p className="text-white/50  xxl:text-[16px]  text-[12px] lg:text-[14px] font-roboto">
                    Yes, you can modify your order within 10 minutes of placing
                    it by contacting our support team.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="px-3 sm:px-1 xsm:px-1 flex-col xxl:px-14 md:flex-row sm:flex items-start mb-10"
          >
            <h3 className="py-3 font-bold text-lg xxl:text-[23px] text-btnBackground xl:w-[10%] xxl:w-[20%] md:w-[20%] font-roboto">
              Delivery
            </h3>
            <div className="md:w-9/12">
              <div className="flex items-start mb-8">
                <div className="flex items-center justify-center p-3 mr-3 rounded-full bg-btnBackground text-white border-4 md:h-12 md:w-12 h-10 w-10 border-white text-xl font-semibold">
                  <RiQuestionMark className="md:h-7 md:w-7 h-10 w-10 text-white" />
                </div>
                <div className="text-md xxl:text-[20px]">
                  <h1 className="text-white font-semibold font-roboto mb-2">
                    What are your delivery hours?
                  </h1>
                  <p className="text-white/50  xxl:text-[16px]  text-[12px] lg:text-[14px]  font-roboto">
                    We deliver from 10 AM to 11 PM, Monday to Sunday.
                  </p>
                </div>
              </div>
              <div className="flex items-start mb-8">
                <div className="flex items-center justify-center p-3 mr-3 rounded-full bg-btnBackground text-white border-4 md:h-12 md:w-12 h-10 w-10 border-white text-xl font-semibold">
                  <RiQuestionMark className="md:h-7 md:w-7 h-10 w-10 text-white" />
                </div>
                <div className="text-md xxl:text-[20px]">
                  <h1 className="text-white font-semibold font-roboto mb-2">
                    Do you offer free delivery?
                  </h1>
                  <p className="text-white/50  xxl:text-[16px]  text-[12px] lg:text-[14px] font-roboto">
                    {" "}
                    Free delivery is available for orders above $50.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="px-3 sm:px-1 xsm:px-1 xxl:px-14 sm:flex flex-col md:flex-row items-start mb-10"
          >
            <h3 className="py-3 font-bold text-lg xxl:text-[23px] text-btnBackground xl:w-[10%] md:w-[20%] font-roboto whitespace-nowrap md:whitespace-normal xxl:w-[20%]">
              Menu and Ingredients
            </h3>
            <div className="md:w-9/12">
              <div className="flex items-start mb-8">
                <div className="flex items-center justify-center p-3 mr-3 rounded-full bg-btnBackground text-white border-4 md:h-12 md:w-12 h-10 w-10 border-white text-xl font-semibold">
                  <RiQuestionMark className="md:h-7 md:w-7 h-10 w-10 text-white" />
                </div>
                <div className="text-md xxl:text-[20px]">
                  <h1 className="text-white font-semibold font-roboto mb-2">
                    Are your dishes customizable?
                  </h1>
                  <p className="text-white/50  xxl:text-[16px]  text-[12px] lg:text-[14px] font-roboto">
                    Yes, many of our dishes can be customized. Simply mention
                    your preferences while placing the order.
                  </p>
                </div>
              </div>
              <div className="flex items-start mb-8">
                <div className="flex items-center justify-center p-3 mr-3 rounded-full bg-btnBackground text-white border-4 md:h-12 md:w-12 h-10 w-10 border-white text-xl font-semibold">
                  <RiQuestionMark className="md:h-7 md:w-7 h-10 w-10 text-white" />
                </div>
                <div className="text-md xxl:text-[20px]">
                  <h1 className="text-white font-semibold font-roboto mb-2">
                    Do you offer vegan or gluten-free options?
                  </h1>
                  <p className="text-white/50  xxl:text-[16px]  text-[12px] lg:text-[14px] font-roboto">
                    {" "}
                    Yes, we have a range of vegan and gluten-free dishes
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="px-3 sm:px-1 sm:flex xsm:px-1 flex-col xxl:px-14 md:flex-row items-start mb-10"
          >
            <h3 className="py-3 font-bold text-lg xxl:text-[23px] xxl:w-[20%] text-btnBackground xl:w-[10%] md:w-[20%] font-roboto">
              Payments
            </h3>
            <div className="md:w-9/12">
              <div className="flex items-start mb-8">
                <div className="flex items-center justify-center p-3 mr-3 rounded-full bg-btnBackground text-white border-4 md:h-12 md:w-12 h-10 w-10 border-white text-xl font-semibold">
                  <RiQuestionMark className="md:h-7 md:w-7 h-10 w-10 text-white" />
                </div>
                <div className="text-md xxl:text-[20px]">
                  <h1 className="text-white font-semibold font-roboto mb-2">
                    What payment methods do you accept?
                  </h1>
                  <p className="text-white/50  xxl:text-[16px] text-[12px] lg:text-[14px] font-roboto">
                    We accept all major credit cards, debit cards, and digital
                    wallets like PayPal.
                  </p>
                </div>
              </div>
              <div className="flex items-start mb-8">
                <div className="flex items-center justify-center p-3 mr-3 rounded-full bg-btnBackground text-white border-4 md:h-12 md:w-12 h-10 w-10 border-white text-xl font-semibold">
                  <RiQuestionMark className="md:h-7 md:w-7 h-10 w-10 text-white" />
                </div>
                <div className="text-md xxl:text-[20px]">
                  <h1 className="text-white font-semibold font-roboto mb-2">
                    Is my payment information secure?
                  </h1>
                  <p className="text-white/50  xxl:text-[16px]  text-[12px] lg:text-[14px] font-roboto">
                    {" "}
                    Yes, we use secure encryption to ensure your payment details
                    are safe
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="px-3 sm:px-1 sm:flex xsm:px-1 xxl:px-14 flex-col md:flex-row items-start mb-10"
          >
            <h3 className="py-3 font-bold text-lg xxl:text-[23px] xxl:w-[20%] text-btnBackground xl:w-[10%] md:w-[20%] font-roboto whitespace-nowrap xl:whitespace-normal md:whitespace-normal">
              General Questions
            </h3>
            <div className="md:w-9/12">
              <div className="flex items-start mb-8">
                <div className="flex items-center justify-center p-3 mr-3 rounded-full bg-btnBackground text-white border-4 md:h-12 md:w-12 h-10 w-10 border-white text-xl font-semibold">
                  <RiQuestionMark className="md:h-7 md:w-7 h-10 w-10 text-white" />
                </div>
                <div className="text-md xxl:text-[20px]">
                  <h1 className="text-white font-semibold font-roboto mb-2">
                    Can I book a table through the website?
                  </h1>
                  <p className="text-white/50  xxl:text-[16px]  text-[12px] lg:text-[14px] font-roboto">
                    Yes, you can book a table using the Reservations section on
                    our website.
                  </p>
                </div>
              </div>
              <div className="flex items-start mb-8">
                <div className="flex items-center justify-center p-3 mr-3 rounded-full bg-btnBackground text-white border-4 md:h-12 md:w-12 h-10 w-10 border-white text-xl font-semibold">
                  <RiQuestionMark className="md:h-7 md:w-7 h-10 w-10 text-white" />
                </div>
                <div className="text-md xxl:text-[20px]">
                  <h1 className="text-white  font-semibold font-roboto mb-2">
                    How can I contact customer support?
                  </h1>
                  <p className="text-white/50  xxl:text-[16px]  text-[12px] lg:text-[14px] font-roboto">
                    {" "}
                    You can contact us via the Contact page or call our helpline
                    at [+62831-2864-3491].
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex justify-center items-center gap-[10px] relative top-[-40px]"
        >
          <p className="text-[14px]  xxl:text-[16px]  text-white/50 font-roboto font-normal">
            Still have questions?
          </p>
          <Link
            href="/contact"
            className="text-blue-600  xxl:text-[16px]  underline text-[13px] font-normal font-roboto"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
};

export default Faqs;
