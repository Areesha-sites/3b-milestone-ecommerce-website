"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MdDone } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const TrackMyOrder = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  const [showPopup, setShowPopup] = useState(false);
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const orderDetails = {
    orderId: "#123456",
    item: "Pizza (Medium) - 1",
    status: "Shipped",
    deliveryDate: "20th December, 2024",
  };
  return (
    <>
      <section className="bg-black w-full h-auto py-44 md:pt-52 lg:pt-48 pt-40 md:px-14 px-5 text-white">
        <div className="flex justify-center items-center flex-col gap-y-5">
          <span
            data-aos="fade-up"
            data-aos-delay="200"
            className="xl:text-[18px] md:text-[15px] text-[14px] mb-[-20px] lg:mb-[-10px] md:mb-[-10px] font-greatVibes text-btnBackground font-normal text-center"
          >
            Track Your Delicious Journey!
          </span>
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="uppercase xl:text-[48px] md:text-[38px] xxl:text-[54px] text-[28px] leading-[30px] font-bold font-poppins lg:text-[43px] text-center"
          >
            track your <span className="text-btnBackground">order</span>
          </h1>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="border-b-[4px] w-[100px] border-btnBackground"
          ></div>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white/70 text-[12px] xxl:text-[16px] lg:text-[14px] font-roboto font-normal xl:w-[800px] lg:w-[800px] md:w-[600px] text-center w-full "
          >
            Enter your Order ID or Email below to check the real-time status of
            your order.
          </p>
        </div>
        <div className="bg-black text-btnBackground relative top-[40px] flex flex-col items-center justify-center md:px-6">
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-gray-800 p-6 rounded-md w-full md:max-w-[500px] shadow-lg"
          >
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setShowPopup(true);
              }}
            >
              <div data-aos="fade-up" data-aos-delay="200">
                <label
                  htmlFor="order-id"
                  className="block text-[15px] xxl:text-[18px] mb-1 font-semibold font-poppins text-btnBackground"
                >
                  Order ID
                </label>
                <input
                  type="text"
                  id="order-id"
                  placeholder="Enter your Order ID"
                  className="w-full p-3 rounded-md xxl:text-[14px] bg-gray-700 text-white outline-none border-none md:text-[13px] text-[11px]"
                />
              </div>
              <div data-aos="fade-up" data-aos-delay="200">
                <label
                  htmlFor="email"
                  className="block text-[15px] mb-1 xxl:text-[18px] font-semibold font-poppins text-btnBackground"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-md xxl:text-[14px]  bg-gray-700 text-white outline-none border-none md:text-[13px] text-[11px]"
                />
              </div>
              <button
                data-aos="fade-up"
                data-aos-delay="200"
                type="submit"
                className="w-full bg-btnBackground xxl:text-[14px] text-white font-roboto md:py-3 py-2 text-[12px] rounded-md font-semibold hover:bg-hoverBtnBackground uppercase md:text-[14px]"
              >
                Track My Order
              </button>
            </form>
          </div>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-4 md:text-[14px] xxl:text-[14px] text-[12px] text-white/50 font-roboto font-normal"
          >
            Having trouble?
            <Link
              href="/contact"
              className="ml-1 text-blue-600 xxl:text-[14px] underline text-[13px] font-normal font-roboto"
            >
              Contact Us
            </Link>
          </p>
        </div>

        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                  <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                <div className="inline-block align-bottom bg-black bg-opacity-50 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all my-20 sm:align-middle max-w-sm md:max-w-lg sm:w-full sm:p-6">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 sm:mx-0 sm:h-10 sm:w-10">
                      <MdDone className="h-6 w-6 text-btnBackground" />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-white font-poppins">
                        Order Confirmed!
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm leading-5 text-white/50 font-roboto">
                          Your order has been successfully placed.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                      <button
                        onClick={() => {
                          setShowPopup(false);
                          setShowOrderDetails(true);
                        }}
                        type="button"
                        className="inline-flex justify-center w-full rounded-md border border-transparent px-4 md:py-2 py-1 bg-btnBackground text-[12px] md:text-[13px] leading-6 font-medium text-white shadow-sm hover:bg-hoverBtnBackground transition ease-in-out duration-150 sm:text-sm sm:leading-5 font-poppins"
                      >
                        View Order Details
                      </button>
                    </span>
                    <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                      <button
                        onClick={() => setShowPopup(false)}
                        type="button"
                        className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4  md:py-2 py-1 bg-white text-[12px] md:text-[13px] leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5 font-poppins"
                      >
                        Cancel
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {showOrderDetails && (
          <div className="mt-14 bg-gray-800 p-6 rounded-md text-white w-full md:max-w-[500px] mx-auto relative">
            <button
              onClick={() => setShowOrderDetails(false)}
              className="absolute top-2 right-2 text-white hover:text-btnBackground rounded-full p-1"
              aria-label="Close"
            >
              ✕
            </button>
            <h2 className="md:text-xl text-[17px] font-semibold font-poppins text-btnBackground mb-4">
              Order Details
            </h2>
            <p className="text-[12px] md:text-[14px]">
              <span className="font-semibold text-white font-poppins mr-1 text-[12px] md:text-[14px]">
                Order ID:
              </span>{" "}
              {orderDetails.orderId}
            </p>
            <p className="text-[12px] md:text-[14px]">
              <span className="font-semibold font-poppins mr-1 text-[12px] md:text-[14px]">
                Item:
              </span>{" "}
              {orderDetails.item}
            </p>
            <p className="text-[12px] md:text-[14px]">
              <span className="font-semibold font-poppins mr-1 text-[12px] md:text-[14px]">
                Status:
              </span>{" "}
              {orderDetails.status}
            </p>
            <p className="text-[12px] md:text-[14px]">
              <span className="font-semibold font-poppins mr-1 text-[12px] md:text-[14px]">
                Delivery Date:
              </span>{" "}
              {orderDetails.deliveryDate}
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default TrackMyOrder;
