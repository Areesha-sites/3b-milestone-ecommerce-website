import React from "react";
import Image from "next/image";
const NewsLetter = () => {
  return (
    <>
      <div className="w-full lg:h-[230px] h-[170px] bg-btnBackground xl:px-20 px-6 lg:py-16 py-6">
        <div className="flex justify-between items-center lg:flex-row flex-col">
          <div className="flex flex-col gap-[10px]">
            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              className="xl:text-[38px] lg:text-[35px] md:text-[31px] text-[25px] leading-[20px] whitespace-nowrap text-black font-extrabold uppercase font-roboto"
            >
              Get Exclusive Update
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="lg:text-[15px] md:text-[14px] text-[12px] text-white text-center  font-normal font-roboto"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex justify-center gap-[10px] mt-6"
          >
            <input
              type="text"
              className="lg:w-[400px] lg:h-[60px] md:w-[250px] w-[180px] h-[40px] bg-white rounded-[7px] text-black/65 xl:text-[15px] text-[12px] font-normal px-6 outline-none border-none font-roboto"
              placeholder="Email"
            />
            <button className="xl:w-[200px]  lg:w-[140px] lg:h-[60px] xl:h-[60px] w-[110px] whitespace-nowrap h-[40px] bg-black px-5 py-3 rounded-[7px] text-white lg:text-[14px] xl:text-[17px] text-[10px] font-normal flex items-center justify-center gap-[5px] hover:bg-gray-900 transition-all duration-300 ease-linear font-roboto">
              <Image
                src="/send-email-svgrepo-com (2).svg"
                alt="send"
                height={20}
                width={20}
                className="h-[20px] w-[20px]"
              />
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
