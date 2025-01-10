import React from "react";
import Image from "next/image";
import { BiCaretDown } from "react-icons/bi";
import { AiOutlineCaretLeft } from "react-icons/ai";
import { AiOutlineCaretRight } from "react-icons/ai";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";
const Checkout = () => {
  return (
    <>
      <section>
        <div className="w-full lg:px-9 px-3 md:h-[923px] md:px-5 h-[2200px] pt-32 md:py-36 py-56 bg-black text-white grid grid-cols-1 md:grid-cols-2 md:gap-x-[70px] lg:gap-x-[200px] xl:gap-x-[460px]">
          <div className=" h-[1100px] lg:h-[723px]">
            <h1 className="lg:text-[27px] text-[20px] font-bold font-roboto text-white mb-3">
              Shipping Address
            </h1>
            <div className="flex flex-col lg:gap-y-4 gap-y-2 ">
              <div className="flex xl:gap-x-[50px] gap-x-[20px] md:flex-row flex-col">
                <div className="flex flex-col justify-center gap-y-[10px]">
                  <label
                    htmlFor=""
                    className="lg:text-[16px] text-[14px] font-roboto font-normal text-white/50"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    className="xl:w-[370px] lg:w-[250px] w-full h-[40px] border-none card-bg outline-none px-4"
                  />
                </div>
                <div className="flex flex-col gap-y-[10px]">
                  <label
                    htmlFor=""
                    className="lg:text-[16px] text-[14px] font-roboto font-normal text-white/50 mt-3"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="xl:w-[370px] lg:w-[250px] w-full h-[40px] border-none card-bg outline-none px-4"
                  />
                </div>
              </div>
              <div className="flex xl:gap-x-[50px] gap-x-[20px] md:flex-row flex-col">
                <div className="flex flex-col justify-center gap-y-[10px]">
                  <label
                    htmlFor=""
                    className="lg:text-[16px] text-[14px] font-roboto font-normal text-white/50 mt-3"
                  >
                    Email address
                  </label>
                  <input
                    type="text"
                    className="xl:w-[370px] lg:w-[250px] w-full h-[40px] border-none card-bg outline-none px-4"
                  />
                </div>
                <div className="flex flex-col justify-center gap-y-[10px]">
                  <label
                    htmlFor=""
                    className="lg:text-[16px] text-[14px] font-roboto font-normal text-white/50 mt-3"
                  >
                    Phone number
                  </label>
                  <input
                    type="text"
                    className="xl:w-[370px] lg:w-[250px] w-full h-[40px] border-none card-bg outline-none px-4"
                  />
                </div>
              </div>
              <div className="flex xl:gap-x-[50px] gap-x-[20px] md:flex-row flex-col">
                <div className="flex flex-col justify-center gap-y-[10px]">
                  <label
                    htmlFor=""
                    className="lg:text-[16px] text-[14px] font-roboto font-normal text-white/50 mt-3"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    className="xl:w-[370px] lg:w-[250px] w-full h-[40px] border-none card-bg outline-none px-4"
                  />
                </div>

                <div className="flex flex-col justify-center gap-y-[10px] relative">
                  <label
                    htmlFor=""
                    className="lg:text-[16px] text-[14px] font-roboto font-normal text-white/50 mt-3"
                  >
                    Country
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      className="xl:w-[370px] lg:w-[250px] w-full h-[40px] border-none card-bg outline-none px-4 pr-10 font-helvetica lg:text-[16px] text-[14px] text-white font-normal"
                      placeholder="Choose country"
                    />
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                      <BiCaretDown className="h-[24px] w-[24px] text-white/50 " />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex xl:gap-x-[50px] gap-x-[20px] md:flex-row flex-col">
                <div className="flex flex-col justify-center gap-y-[10px] relative">
                  <label
                    htmlFor=""
                    className="lg:text-[16px] text-[14px] font-roboto font-normal text-white/50 mt-3"
                  >
                    City
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      className="xl:w-[370px] lg:w-[250px] w-full h-[40px] border-none card-bg outline-none px-4 pr-10 font-helvetica lg:text-[16px] text-[14px] text-white font-normal"
                      placeholder="Choose city"
                    />
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                      <BiCaretDown className="h-[24px] w-[24px] text-white/50" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-y-[10px]">
                  <label
                    htmlFor=""
                    className="lg:text-[16px] text-[14px] font-roboto font-normal text-white/50 mt-3"
                  >
                    Zip code
                  </label>
                  <input
                    type="text"
                    className="xl:w-[370px] lg:w-[250px] w-full h-[40px] border-none card-bg outline-none px-4"
                  />
                </div>
              </div>
              <div className="flex xl:gap-x-[50px] gap-x-[20px] md:flex-row flex-col">
                <div className="flex flex-col justify-center gap-y-[10px]">
                  <label
                    htmlFor=""
                    className="text-[16px] font-roboto font-normal text-white/50 mt-3"
                  >
                    Address 1
                  </label>
                  <input
                    type="text"
                    className="xl:w-[370px] lg:w-[250px] w-full h-[40px] border-none card-bg outline-none px-4"
                  />
                </div>
                <div className="flex flex-col justify-center gap-y-[10px]">
                  <label
                    htmlFor=""
                    className="lg:text-[16px] text-[14px] font-roboto font-normal text-white/50 mt-3"
                  >
                    Address 2
                  </label>
                  <input
                    type="text"
                    className="xl:w-[370px] lg:w-[250px] w-full h-[40px] border-none card-bg outline-none px-4"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="lg:text-[20px] text-[18px] font-roboto text-white font-bold mt-[20px]">
                Billing Address
              </h1>
              <div className="flex items-center gap-[6px] mt-1">
                <input
                  type="checkbox"
                  id="sameAsShipping"
                  className="lg:w-[20px] lg:h-[20px] h-[15px] w-[15px] appearance-none border-[1px] border-[#BDBDBD] checked:bg-yellow-400 cursor-pointer transition duration-200"
                />
                <label
                  htmlFor="sameAsShipping"
                  className="font-normal text-[12px] lg:text-[14px] text-white/50 font-helvetica cursor-pointer"
                >
                  Same as shipping address
                </label>
              </div>
            </div>
            <div className="flex justify-start lg:flex-row flex-col gap-[20px] relative top-[30px] ">
              <Link href="/cart">
                <button className="xl:w-[370px] lg:w-[250px] w-full h-[40px] lg:h-[50px] border-none card-bg outline-none ">
                  <div className="flex justify-center items-center gap-[8px]">
                    <AiOutlineCaretLeft className="lg:h-[24px] lg:w-[24px] h-[18px] w-[18px] text-white/50" />

                    <p className="text-white/70 lg:text-[16px] text-[14px] font-helvetica font-normal">
                      Back to cart
                    </p>
                  </div>
                </button>
              </Link>
              <Link href="/menu">
                <button className="xl:w-[370px] lg:w-[250px] w-full h-[40px] lg:h-[50px] bg-btnBackground hover:bg-hoverBtnBackground">
                  <div className="flex justify-center items-center gap-[8px]">
                    <p className="text-white lg:text-[16px] text-[14px] font-helvetica font-normal">
                      Proceed to shipping
                    </p>
                    <AiOutlineCaretRight className="lg:h-[24px] lg:w-[24px] h-[18px] w-[18px] text-white" />
                  </div>
                </button>
              </Link>
            </div>
          </div>
          <div className=" lg:w-[324px] w-full h-[700px] md:w-[300px] border-[1px] border-white/30 lg:px-8 px-3 py-3 mt-16">
            <div className="flex flex-col">
              <div className="lg:w-[376px] w-full h-[104px] flex flex-col justify-center gap-[10px]">
                <div className="flex gap-[10px]">
                  <Image
                    src="/gallery_08.jpg"
                    alt="food-image"
                    height={88}
                    width={82.72}
                    className="lg:h-[88px] lg:w-[82.72] w-[60px] h-[60px] object-cover"
                  />
                  <div className="flex flex-col lg:justify-center gap-[5px]">
                    <h1 className="lg:text-[16px] text-[14px] font-bold text-white font-roboto">
                      Chicken Tikka Kabab
                    </h1>
                    <p className="lg:text-[14px] text-[14px] font-normal text-white/50 font-roboto">
                      150 gm net
                    </p>
                    <p className="lg:text-[14px] text-[14px] font-normal text-white/50 font-roboto">
                      50$
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-[273.44px] w-full border-b-[1px] border-white/25 mx-auto  mt-3 mb-3"></div>
            </div>
            <div className="flex flex-col gap-[10px] mt-2 ">
              <div className="lg:w-[376px] w-full h-[104px] flex flex-col justify-between">
                <div className="flex gap-[10px]">
                  <Image
                    src="/gallery_08.jpg"
                    alt="food-image"
                    height={88}
                    width={82.72}
                    className="lg:h-[88px] lg:w-[82.72] w-[60px] h-[60px] object-cover"
                  />
                  <div className="flex flex-col justify-center gap-[5px]">
                    <h1 className="lg:text-[16px] text-[14px] font-bold text-white font-roboto">
                      Chicken Tikka Kabab
                    </h1>
                    <p className="lg:text-[14px] text-[14px] font-normal text-white/50 font-roboto">
                      150 gm net
                    </p>
                    <p className="lg:text-[14px] text-[14px] font-normal text-white/50 font-roboto">
                      50$
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-[273.44px] w-full border-b-[1px] border-white/25 mx-auto mb-5"></div>
            </div>
            <div className="flex flex-col gap-[10px] ">
              <div className="lg:w-[376px]  w-full h-[104px] flex flex-col justify-between">
                <div className="flex gap-[10px]">
                  <Image
                    src="/gallery_08.jpg"
                    alt="food-image"
                    height={88}
                    width={82.72}
                    className="lg:h-[88px] lg:w-[82.72] w-[60px] h-[60px] object-cover"
                  />
                  <div className="flex flex-col justify-center  gap-[5px]">
                    <h1 className="lg:text-[16px] text-[14px] font-bold text-white font-roboto">
                      Chicken Tikka Kabab
                    </h1>
                    <p className="lg:text-[14px] text-[14px] font-normal text-white/50 font-roboto">
                      150 gm net
                    </p>
                    <p className="lg:text-[14px] text-[14px] font-normal text-white/50 font-roboto">
                      50$
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-[273.44px] w-full border-b-[1px] border-white/25 mx-auto mb-5"></div>
            </div>

            <div className="lg:w-[276px] w-full h-[264px] mx-auto flex flex-col justify-between ">
              <div className="flex flex-col justify-center gap-[10px]">
                <div className="flex justify-between items-center lg:w-[276px] w-full h-[24px]">
                  <p className="font-normal font-roboto text-[16px] text-white">
                    Sub-total
                  </p>
                  <p className="text-white/50 font-normal font-roboto text-[16px] ">
                    130$
                  </p>
                </div>
                <div className="flex justify-between items-center lg:w-[276px] w-full h-[24px]">
                  <p className="font-normal font-roboto text-[16px] text-white">
                    Shipping
                  </p>
                  <p className="text-white/50 font-normal font-roboto text-[16px]">
                    Free
                  </p>
                </div>
                <div className="flex justify-between items-center lg:w-[276px] w-full h-[24px]">
                  <p className="font-normal  text-white text-[16px] font-roboto">
                    Discount
                  </p>
                  <p className="text-white/50 font-normal font-roboto text-[16px] ">
                    25%
                  </p>
                </div>
                <div className="flex justify-between items-center lg:w-[276px] w-full h-[24px]">
                  <p className="font-normal  text-white text-[16px] font-roboto">
                    Tax
                  </p>
                  <p className="text-white/50 font-normal font-roboto text-[16px] ">
                    54.76$
                  </p>
                </div>
                <div className="lg:w-[273.44px] w-full border-b-[1px] border-white/25 mx-auto mb-5"></div>

                <div className="flex justify-between items-center lg:w-[276px] w-full h-[24px]">
                  <p className="font-normal font-roboto text-[18px] text-white">
                    Total
                  </p>
                  <p className="font-bold font-roboto text-[18px] text-white/70 ">
                    432.65$
                  </p>
                </div>
              </div>
              <Link href="/trackMyOrder">
                <button className="lg:w-[276px] w-full h-[35px] lg:h-[48px] lg:py-[10px] px-[48px] rounded-[6px] bg-btnBackground hover:bg-hoverBtnBackground">
                  <div className="flex justify-center items-center gap-[12px]">
                    <p className="lg:text-[18px] text-[14px] font-normal text-white font-roboto">
                      Place an order
                    </p>
                    <GoArrowRight className="text-white lg:h-[20px] lg:w-[20px] h-[15px] w-[15px]" />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
