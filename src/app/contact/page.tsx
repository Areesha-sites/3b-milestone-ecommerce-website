"use client";
import React from "react";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Contact = () => {
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
      <section className="bg-black w-full h-auto py-44 md:pt-44 lg:pt-48 pt-40 md:px-14 px-5 text-white lg:w-[1440px] mx-auto relative">
        <div className="flex justify-center items-center flex-col gap-y-5">
          <span
            data-aos="fade-up"
            data-aos-delay="200"
            className="xl:text-[18px] md:text-[15px] text-[14px] mb-[-20px] lg:mb-[-10px] md:mb-[-20px] font-greatVibes text-btnBackground font-normal"
          >
            We are Just a Message Away!
          </span>
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="uppercase xl:text-[48px] xxl:text-[54px] md:text-[38px] text-[28px] text-center leading-[30px] font-bold font-poppins lg:text-[43px]"
          >
            Get in Touch with <span className="text-btnBackground">Us.</span>
          </h1>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="border-b-[4px] w-[100px] border-btnBackground"
          ></div>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white/70 text-[12px] xxl:text-[16px] lg:text-[14px] font-roboto font-normal xl:w-[800px] lg:w-[800px] md:w-[600px] text-center w-full"
          >
            Have questions, feedback, or need assistance? We would love to hear
            from you! At Chow Champs, your satisfaction is our priority. Use the
            form below to reach out, or connect with us directly through the
            provided contact details. Whether it is about your order, menu
            inquiries, or partnership opportunities, we are here to help!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-[100px] md:gap-[50px] lg:gap-[140px] xl:pt-40 md:pt-20 pt-12 md:px-0">
          <div className="">
            <div className="flex justify-center flex-col gap-y-5">
              <h1
                data-aos="fade-up"
                data-aos-delay="200"
                className="uppercase md:text-[20px] lg:text-[24px] xl:text-[35px] text-[19px] font-bold font-poppins"
              >
                Get Closer
              </h1>
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="border-b-[4px] w-[100px] border-btnBackground"
              ></div>
              <p className="text-white/70 md:text-[12px] lg:text-[14px] text-[12px] xl:text-[14px] md:w-[200px] font-roboto font-normal xl:w-[500px] lg:w-[350px] xxl:text-[16px]">
                For immediate assistance, call our support team at
                [+62831-2864-3491] available from 9 AM to 9 PM.
              </p>
            </div>
            <div className="grid grid-cols-2 md:gap-[15px] pt-11">
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="flex justify-start xl:gap-[20px] items-center  md:relative md:left-[-20px]"
              >
                <Image
                  src="/map-location-svgrepo-com.svg"
                  alt=""
                  height={30}
                  width={30}
                  className="xl:w-[70px] xl:h-[70px] md:h-[50px] md:w-[50px] transition-all duration-300 ease-linear hover:scale-110 cursor-pointer h-[40px] w-[40px]"
                />
                <div className="flex flex-col md:justify-start xl:justify-center gap-[5px] ">
                  <h2 className="xl:text-[22px] md:text-[18px] text-[14px] font-poppins font-bold uppercase text-white">
                    Location
                  </h2>
                  <p className=" md:text-[12px] xl:text-[14px] xxl:text-[16px] text-[10px] text-white/75 font-normal font-roboto xl:w-[150px]">
                    Jl. Pantai Kuta No.34, Badung, Bali
                  </p>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="flex justify-start md:gap-[15px] items-center md:relative md:left-[-20px]"
              >
                <Image
                  src="/send-email-svgrepo-com (1).svg"
                  alt=""
                  height={30}
                  width={30}
                  className="xl:w-[70px] xl:h-[70px] md:h-[50px] md:w-[50px] transition-all duration-300 ease-linear hover:scale-110 cursor-pointer h-[40px] w-[40px]"
                />
                <div className="flex flex-col justify-center gap-[5px] relative md:left-[-10px] left-[10px]">
                  <h2 className="xl:text-[22px] md:text-[18px] text-[14px]  font-poppins font-bold uppercase text-white">
                    Email
                  </h2>
                  <p className="xxl:text-[16px] md:text-[12px] xl:text-[14px] text-[10px] text-white/75 font-normal font-roboto xl:w-[150px]">
                    contact@burgry.com
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[15px] pt-11 md:relative md:left-[-20px] md:top-[-30px]">
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="flex justify-start gap-[20px] items-center"
              >
                <Image
                  src="/phone-call-svgrepo-com.svg"
                  alt=""
                  height={30}
                  width={30}
                  className="xl:w-[55px] xl:h-[55px] md:h-[35px] md:w-[35px] transition-all duration-300 ease-linear hover:scale-110 cursor-pointer"
                />
                <div className="flex flex-col justify-center gap-[5px]">
                  <h2 className=" md:text-[18px] xl:text-[22px] text-[14px] font-poppins font-bold uppercase text-white">
                    Phone
                  </h2>
                  <p className="xxl:text-[16px] md:text-[12px] xl:text-[14px] text-[12px] text-white/75 font-normal font-roboto w-[150px]">
                    +62831-2864-3491
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:w-[500px] w-[280px] md:h-auto sm:w-[340px] xsm:w-[350px] h-auto relative top-[50px] mx-auto md:top-0 xl:left-[-130px] md:left-[-25px] lg:left-[-120px]">
            <h3
              data-aos="fade-up"
              data-aos-delay="200"
              className="font-bold text-white uppercase font-poppins tracking-tight text-left text-[19px] md:text-[20px] lg:text-[24px] xl:text-[35px]"
            >
              Your Details
            </h3>

            <div className="flex flex-col md:flex-row md:gap-[20px] mt-4 ">
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="flex flex-col"
              >
                <label className="font-medium xxl:text-[16px] text-white text-[13px] md:text-[15px] font-roboto">
                  First Name <span className="text-btnBackground">*</span>
                </label>
                <input
                  type="text"
                  className="contactInput px-4 py-3 text-white/70 text-[12px] font-roboto border-none outline-none mt-1 w-full md:w-[170px] lg:w-[240px] xl:w-[320px] xxl:text-[16px]"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="flex flex-col mt-4 md:mt-0"
              >
                <label className="font-medium text-white xxl:text-[16px] text-[13px] md:text-[15px] font-roboto">
                  Email Address <span className="text-btnBackground">*</span>
                </label>
                <input
                  type="text"
                  className="contactInput px-4 py-3 text-white/70 text-[12px] font-roboto border-none outline-none mt-1 w-full md:w-[170px] lg:w-[240px] xl:w-[320px] xxl:text-[16px]"
                  placeholder="email@youremail.com"
                  required
                />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="flex flex-col mt-5"
            >
              <label className="font-medium text-white text-[13px] md:text-[15px] xxl:text-[16px] font-roboto">
                Subject <span className="text-btnBackground">*</span>
              </label>
              <input
                type="text"
                className="contactInput px-4 py-3 text-white/70 text-[12px] font-roboto border-none outline-none mt-1 w-full md:w-[355px] lg:w-[500px] xl:w-[660px] xxl:text-[16px]"
                placeholder="Subject"
                required
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="flex flex-col mt-5"
            >
              <label className="font-medium text-white text-[13px] xxl:text-[16px] md:text-[15px] font-roboto">
                Comments / Questions{" "}
                <span className="text-btnBackground">*</span>
              </label>
              <textarea
                rows={7}
                className="contactInput px-4 py-3 text-white/70 text-[12px] font-roboto border-none outline-none mt-1 w-full  md:w-[355px]  lg:w-[500px] xl:w-[660px] xxl:text-[16px]"
                placeholder="Your Message"
                required
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="flex justify-center lg:justify-start mt-5"
            >
              <button className="bg-btnBackground hover:bg-hoverBtnBackground px-5 py-2 text-white font-roboto font-semibold uppercase rounded-[5px] text-[12px] md:text-[14px] w-[150px] md:w-[140px] xl:w-[170px] h-[30px] md:h-[35px] xl:h-[45px] whitespace-nowrap flex justify-center items-center xxl:text-[16px]">
                Submit Message
              </button>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="border-b-[3px] border-white/20 w-[280px] xsm:w-[380px] sm:w-[330px] relative mx-auto top-[60px] my-5 md:w-[310px] md:top-[-130px] md:left-[-180px] lg:left-[-260px] lg:w-[400px] xl:w-[500px] xl:left-[-340px] xl:top-[-140px] xxl:left-[-410px] xxl:top-[-180px]"
        ></div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex justify-between items-center xl:w-[490px] md:w-[310px] lg:w-[400px] md:top-[-130px] relative top-[50px] xl:top-[-150px] xxl:top-[-180px]"
        >
          <h1 className="xl:text-[22px] lg:text-[20px] md:text-[15px] text-[17px] font-bold uppercase text-white font-poppins whitespace-nowrap">
            OUR SOCIAL MEDIA
          </h1>
          <div className="flex justify-center items-center md:gap-[20px] gap-[10px]">
            <FaFacebook className="md:w-[20px] md:h-[20px] w-[15px] h-[15px] xxl:w-[25px] xxl:h-[25px] cursor-pointer hover:scale-110 duration-200 transition-all ease-linear text-btnBackground" />
            <RiInstagramFill className="md:w-[20px] md:h-[20px] w-[15px] h-[15px] xxl:w-[25px] xxl:h-[25px] cursor-pointer hover:scale-110 duration-200 transition-all ease-linear text-btnBackground" />
            <FaTwitter className="md:w-[20px] md:h-[20px] w-[15px] h-[15px] xxl:w-[25px] xxl:h-[25px] cursor-pointer hover:scale-110 duration-200 transition-all ease-linear text-btnBackground" />
            <FaYoutube className="md:w-[20px] md:h-[20px] w-[15px] h-[15px] xxl:w-[25px] xxl:h-[25px] cursor-pointer hover:scale-110 duration-200 transition-all ease-linear text-btnBackground" />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="relative rounded-lg overflow-hidden shadow-md md:h-96 h-64 md:top-[70px] top-[80px] xl:top-[20px]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609996927!2d72.74109927919684!3d19.0825223080769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b78f71289ef1%3A0x1cfa0ec4cb2922b3!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1697028323456!5m2!1sen!2sus"
            className="absolute top-0 left-0 w-full md:h-full h-[50vh]"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
