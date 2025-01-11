"use client";
import React from "react";
import Image from "next/image";
import { blogsData } from "../../../../api/route";
import { FaUser } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { MdDone } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { LuReplyAll } from "react-icons/lu";
import BlogSidebar from "@/components/BlogSidebar";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
interface Props {
  params: {
    id: string;
  };
}
const BlogDetails = ({ params }: Props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  const { id } = params;
  const product = blogsData.find((item) => item.id === id);
  if (!product) {
    return (
      <div className="bg-black w-full py-28 h-auto pt-52 px-14 text-white">
        <div className="flex justify-center items-center flex-col gap-y-5">
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="uppercase text-[60px] font-bold font-poppins w-[600px] mx-auto text-center text-btnBackground "
          >
            404
          </h1>
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="uppercase text-[38px] font-bold font-poppins w-[600px] mx-auto text-center leading-[50px]"
          >
            This Page Does not Exist.
          </h1>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="border-b-[4px] w-[100px] border-btnBackground"
          ></div>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white/70 text-[14px] font-roboto font-normal w-[800px] text-center"
          >
            It looks like nothing was found at this location.
          </p>
          <button
            data-aos="fade-up"
            data-aos-delay="200"
            className="py-2 px-5 bg-btnBackground rounded-[5px] hover:bg-hoverBtnBackground text-white text-[13px] font-roboto font-semibold"
          >
            <Link href="/blog">Go to back</Link>
          </button>
        </div>
      </div>
    );
  }
  return (
    <>
      <section className="bg-black w-full xl:h-auto py-60 md:pt-52 lg:pt-48 lg:py-40 xl:px-20 pt-40 md:px-14 px-5 text-white md:py-96 lg:px-10">
        <div className="flex justify-center items-center flex-col gap-y-5">
          <span
            data-aos="fade-up"
            data-aos-delay="200"
            className="xl:text-[18px] md:text-[15px] text-[14px] mb-[-20px] lg:mb-[-10px] md:mb-[-10px] font-greatVibes text-btnBackground font-normal text-center"
          >
            Discover the Flavors Behind the Stories.
          </span>
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="uppercase xl:text-[48px] md:text-[38px] text-[28px] leading-[30px] font-bold font-poppins lg:text-[43px] text-center md:leading-[35px] lg:leading-[40px] lg:px-11 xl:w-[800px] xl:leading-[48px] xxl:text-[54px]"
          >
            Fast & Flavorful:{" "}
            <span className="text-btnBackground"> 5-Minute</span> Meal Ideas You
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
            className="text-white/70 text-[12px] lg:text-[14px] xxl:text-[16px] font-roboto font-normal xl:w-[800px] lg:w-[800px] md:w-[600px] text-center w-full "
          >
            This blog dives into easy to follow recipes that are perfect for
            busy individuals. Learn how to prepare hearty breakfasts, fulfilling
            lunches, and simple dinners all in under 5 minutes. Whether you are
            a working professional, a student, or a parent, these time saving
            recipes will fit seamlessly into your schedule while delivering
            mouthwatering flavors
          </p>
        </div>
        <div className="flex flex-col-reverse lg:flex-row mt-8 gap-8 xxl:gap-[80px] 2xl:gap-[200px] xl:gap-[100px] xxl:mt-40 xl:mt-14 lg:mt-20 xxl:px-24 lg:gap-[20px]">
          <div className="xl:w-[700px] lg:w-[600px] h-auto text-white flex flex-col gap-[30px] md:gap-[25px] relative top-[80px] xxl:top-[-10px] xl:top-0 lg:top-0">
            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              className="lg:text-[32px] text-[25px] xxl:text-[35px] text-white font-roboto font-bold leading-[26px] lg:leading-[35px] uppercase md:text-[30px] md:leading-[35px]"
            >
              {" "}
              <span className="text-btnBackground">Quick Cravings:</span>{" "}
              {product.title}
            </h1>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="lg:w-[370px] h-[30px] w-[290px] md:w-[500px] grid md:grid-cols-4 lg:grid-cols-3 grid-cols-2  gap-[10px] xl:grid-cols-5 xl:w-[900px]"
            >
              <div className="flex items-center gap-[6px]">
                <FaUser className="text-btnBackground lg:w-[14px] lg:h-[14px] h-[12px] w-[12px]" />
                <p className="font-roboto text-[13px] xxl:text-[16px] text-white/50 font-normal">
                  {product.author}
                </p>
              </div>
              <div className="flex items-center gap-[6px]">
                <FaComments className="text-btnBackground w-4 h-4" />
                <p className="font-roboto text-[13px] xxl:text-[16px] text-white/50 font-normal">
                  {product.comments} Comments
                </p>
              </div>
              <div className="flex items-center gap-[6px] col-span-2">
                <SlCalender className="text-btnBackground lg:w-4 lg:h-4 h-[12px] w-[12px]" />
                <p className="font-roboto text-[13px] xxl:text-[16px] text-white/50 font-normal whitespace-nowrap">
                  {product.date}
                </p>
              </div>
            </div>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="font-roboto text-[12px] xxl:text-[16px] lg:text-[14px] text-white/50 font-normal"
            >
              {product.des}
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="font-roboto text-[12px] xxl:text-[16px] lg:text-[14px] text-white/50 font-normal"
            >
              {product.para1}
            </p>
            <Image
              data-aos="fade-up"
              data-aos-delay="200"
              src={product.image}
              alt={product.title}
              width={1000}
              height={1000}
              quality={100}
              priority
              className="lg:w-[700px] lg:h-[400px] w-full mx-auto h-[200px] md:h-[270px] md:px-20 lg:rounded-[10px] object-cover lg:px-0"
            />
            <h2
              data-aos="fade-up"
              data-aos-delay="200"
              className="lg:text-[20px] text-[18px] xxl:text-[24px] text-white font-semibold font-roboto uppercase"
            >
              The people who give you their food give you their heart
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="font-roboto text-[12px] xxl:text-[16px] lg:text-[14px] text-white/50 font-normal"
            >
              {product.para2}
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="xlg:w-[700px] bg-btnBackground lg:h-[270px] w-full mx-auto h-auto rounded-[10px]"
            >
              <p className="font-medium text-white lg:text-[25px] xxl:text-[28px] text-[20px]  flex items-center text-center xlg:px-11 lg:py-[90px] px-4 py-9 font-roboto">
                Your time is limited, so do not waste it living someone else is
                life. Do not be trapped by dogma which is living with the
                results
              </p>
            </div>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="font-roboto text-[12px] xxl:text-[16px] lg:text-[14px] text-white/50 font-normal"
            >
              {product.para3}
            </p>

            <div className="flex flex-col gap-[10px]">
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="flex gap-[10px] items-center"
              >
                <MdDone className="h-4 w-4 text-btnBackground" />
                <span className="font-roboto text-[12px] xxl:text-[16px] lg:text-[14px] text-white/50 font-normal">
                  {product.point1}
                </span>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="flex gap-[10px] items-center"
              >
                <MdDone className="h-4 w-4 text-btnBackground" />
                <span className="font-roboto text-[12px] xxl:text-[16px] lg:text-[14px] text-white/50 font-normal">
                  {product.point2}
                </span>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="flex gap-[10px] items-center"
              >
                <MdDone className="h-4 w-4 text-btnBackground" />
                <span className="font-roboto xxl:text-[16px] text-[12px] lg:text-[14px] text-white/50 font-normal">
                  {product.point3}
                </span>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="flex gap-[10px] items-center"
              >
                <MdDone className="h-4 w-4 text-btnBackground" />
                <span className="font-roboto xxl:text-[16px] text-[12px] lg:text-[14px] text-white/50 font-normal">
                  {product.point4}
                </span>
              </div>
            </div>
            <h2
              data-aos="fade-up"
              data-aos-delay="200"
              className="lg:text-[20px] xxl:text-[24px] text-[18px] text-white font-semibold font-roboto uppercase"
            >
              People who love to eat are always the best people
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="font-roboto text-[12px] xxl:text-[16px] lg:text-[14px] text-white/50 font-normal"
            >
              {product.para4}
            </p>
            <Image
              data-aos="fade-up"
              data-aos-delay="200"
              src={product.img1}
              alt={product.title}
              width={1000}
              height={1000}
              quality={100}
              priority
              className="lg:h-[250px] lg:w-[250px] w-full mx-auto h-[200px] md:h-[270px] md:px-20  object-cover rounded-[10px] lg:px-0 lg:mx-0"
            />
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="font-roboto text-[12px] lg:text-[14px] text-white/50 font-normal relative lg:left-[290px] lg:w-[300px] xl:w-[400px] w-full lg:top-[-275px] left-[5px] xxl:text-[16px]"
            >
              {product.para5}
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="font-roboto text-[12px] lg:text-[14px] text-white/50 font-normal relative lg:left-[290px] lg:w-[300px] xl:w-[400px] lg:top-[-270px] w-full left-[5px] xxl:text-[16px]"
            >
              {product.para6}
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="md:flex justify-between items-center md:flex-row flex-col absolute xl:top-[1930px] lg:top-[2050px] lg:w-[600px] xl:w-[680px] md:w-[680px] w-[280px] top-[2360px] left-[-10px] gap-y-[20px] ms:top-[1300px] hidden md:top-[1680px] mx-auto md:px-5 xxl:top-[2200px]"
            >
              <div className="flex flex-col gap-[10px]">
                <h4 className="text-[18px] font-semibold xxl:text-[21px] font-roboto text-white uppercase">
                  Related Tags
                </h4>

                <div className="flex gap-[15px]">
                  <button className="bg-gray-700 py-[6px] rounded-[3px] px-5 text-[13px] text-white hover:bg-btnBackground transition-all duration-300 ease-linear font-roboto xxl:px-7 xxl:py-[10px] xxl:text-[16px]">
                    Design
                  </button>
                  <button className="bg-gray-700 py-[6px] rounded-[3px] px-5 text-[13px] text-white hover:bg-btnBackground transition-all duration-300 ease-linear font-roboto xxl:px-7 xxl:py-[10px] xxl:text-[16px]">
                    App
                  </button>
                  <button className="bg-gray-700 py-[6px] rounded-[3px] px-5 text-[13px] text-white hover:bg-btnBackground transition-all duration-300 ease-linear font-roboto xxl:px-7 xxl:py-[10px] xxl:text-[16px]">
                    Data
                  </button>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-[20px] lg:gap-[10px]">
                <h4 className="text-[18px] font-semibold font-roboto xxl:text-[21px] text-white uppercase text-center">
                  Social Share
                </h4>
                <div className="flex md:gap-[15px] gap-[5px] items-center">
                  <FaFacebookF className="md:h-5 md:w-5 h-4 w-4 xxl:w-[25px] xxl:h-[25px] text-white hover:text-btnBackground transition-all duration-300 ease-in-out cursor-pointer hover:scale-110" />
                  <FaTwitter className="md:h-5 md:w-5 h-4 w-4 xxl:w-[25px] xxl:h-[25px] text-white hover:text-btnBackground transition-all duration-300 ease-in-out cursor-pointer hover:scale-110" />
                  <FaInstagram className="md:h-5 md:w-5 h-4 w-4 xxl:w-[25px] xxl:h-[25px] text-white hover:text-btnBackground transition-all duration-300 ease-in-out cursor-pointer hover:scale-110" />
                  <FaLinkedinIn className="md:h-5 md:w-5 h-4 w-4 xxl:w-[25px] xxl:h-[25px] text-white hover:text-btnBackground transition-all duration-300 ease-in-out cursor-pointer hover:scale-110" />
                </div>
              </div>
            </div>
            <div className="relative lg:top-[-100px] top-[50px] left-[10px] lg:left-0 md:top-[100px]">
              <h1
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-white font-bold text-[20px] xxl:text-[28px] lg:text-[25px] font-roboto uppercase"
              >
                03 Comments
              </h1>
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="flex lg:justify-between md:flex-row flex-col items-start justify-start lg:w-[700px] md:gap-[20px] lg:items-center relative top-[30px] lg:left-[20px] gap-y-[10px]"
              >
                <Image
                  src="/author_img2.jpg"
                  alt=""
                  width={100}
                  height={100}
                  className="lg:h-[90px] lg:w-[90px] h-[50px] w-[50px] rounded-full object-cover"
                />
                <div className="flex xl:justify-between justify-center  ">
                  <div className="flex flex-col gap-0">
                    <p className="text-white font-normal font-roboto text-[16px] lg:text-[18px]">
                      John Doe
                    </p>
                    <p className="text-btnBackground font-normal font-roboto text-[14px] lg:text-[15px]">
                      July 5th, 2024
                    </p>
                    <p className="font-roboto text-[12px] lg:text-[14px] xxl:text-[16px] text-white/50 font-normal">
                      Craving a delicious homemade pizza? Check out my latest
                      recipe for a classic Margherita pizza. I have included
                      tips on making your own dough and finding the freshest
                      ingredients.
                    </p>
                  </div>
                  <div className="flex gap-[5px]">
                    <LuReplyAll className="lg:h-[20px] xxl:h-[25px] xxl:w-[25px] lg:w-[20px] h-[14px] w-[14px] text-btnBackground" />
                    <span className="lg:text-[13px] xxl:text-[16px] text-[12px] text-btnBackground font-normal font-roboto">
                      Reply
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="lg:w-[500px] w-full px-10 mx-auto relative top-[80px] left-[4px] lg:top-[-80px] lg:left-[20px] border-b-[1px] text-white/5 md:top-[130px] "
            ></div>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="flex gap-[20px] lg:justify-between md:flex-row flex-col items-start justify-start lg:w-[700px] relative lg:top-[-60px] lg:left-[20px] md:top-[130px] gap-y-[10px] left-[10px] top-[80px]"
            >
              <Image
                src="/author_img3.jpg"
                alt="author"
                width={1000}
                height={1000}
                quality={100}
                priority
                className="lg:h-[90px] lg:w-[90px] h-[50px] w-[50px] rounded-full object-cover"
              />
              <div className="flex xl:justify-between justify-center ">
                <div className="flex flex-col gap-0">
                  <p className="text-white font-normal font-roboto text-[16px] lg:text-[18px]">
                    Chef David Lee
                  </p>
                  <p className="text-btnBackground font-normal font-roboto text-[14px] lg:text-[15px]">
                    June 15th, 2024
                  </p>
                  <p className="font-roboto text-[12px] lg:text-[14px] xxl:text-[16px] text-white/50 font-normal">
                    Just tried this amazing recipe for spicy Sichuan noodles!
                    The flavors were incredible and the method was surprisingly
                    easy. Highly recommend giving it a try!
                  </p>
                </div>
                <div className="flex gap-[5px]">
                  <LuReplyAll className="lg:h-[20px] xxl:h-[25px] xxl:w-[25px] lg:w-[20px] h-[14px] w-[14px] text-btnBackground" />
                  <span className=" text-[12px] xxl:text-[16px] lg:text-[13px] text-btnBackground font-normal font-roboto">
                    Reply
                  </span>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="lg:w-[500px] w-full px-10 mx-auto relative lg:top-[-70px] left-[4px] top-[80px] lg:left-[20px] border-b-[1px] text-white/5 md:top-[130px]"
            ></div>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="flex xl:justify-between md:flex-row flex-col items-start lg:w-[700px] gap-[20px] xl:items-center relative lg:top-[-60px] top-[80px] lg:left-[20px] left-[10px] md:top-[130px]"
            >
              <Image
                src="/author_img4.jpg"
                alt="author"
                width={1000}
                height={1000}
                quality={100}
                priority
                className="lg:h-[90px] lg:w-[90px] h-[50px] w-[50px] rounded-full object-cover"
              />
              <div className="flex xl:justify-between justify-center ">
                <div className="flex flex-col gap-0">
                  <p className="text-white font-normal font-roboto text-[16px] lg:text-[18px]">
                    Food Blogger - Sarah Jones
                  </p>
                  <p className="text-btnBackground font-normal font-roboto text-[14px] lg:text-[15px]">
                    March 12th, 2023
                  </p>
                  <p className="font-roboto text-[12px] lg:text-[14px] xxl:text-[16px] text-white/50 font-normal">
                    Just baked a batch of chocolate chip cookies using my
                    grandmas secret recipe. They turned out amazing! Sharing the
                    recipe soon. Stay tuned!
                  </p>
                </div>
                <div className="flex gap-[5px]">
                  <LuReplyAll className="lg:h-[20px] lg:w-[20px] xxl:h-[25px] xxl:w-[25px] h-[14px] w-[14px] text-btnBackground" />
                  <span className="xxl:text-[16px] text-[12px] lg:text-[13px] text-btnBackground font-normal font-roboto">
                    Reply
                  </span>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="lg:w-[500px] w-full px-10 mx-auto relative lg:top-[-70px] lg:left-[20px] top-[80px] left-[4px] border-b-[1px] text-white/5 md:top-[130px]"
            ></div>
            <div className="relative lg:top-[-60px] top-[80px] md:top-[130px]">
              <h1
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-white font-bold lg:text-[25px] xxl:text-[28px] text-[20px] font-roboto uppercase"
              >
                Post Comment
              </h1>
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="lg:w-[700px] lg:h-[600px] w-full px-7 mx-auto bg-gray-700/70 relative top-[30px] lg:top-[40px] p-10 flex flex-col gap-[15px] xl:px-10 "
              >
                <textarea
                  placeholder="Type Your Comment"
                  className="lg:w-[613px] w-full p-5 border-none outline-none bg-gray-700 text-[12px] lg:text-[14px] rounded-[5px] text-white/75 font-roboto font-normal xxl:text-[16px]"
                  rows={10}
                ></textarea>
                <input
                  type="text"
                  className="lg:w-[613px] lg:h-[55px] h-[40px] w-full border-none outline-none rounded-[5px] bg-gray-700 lg:text-[14px] text-[12px] text-white/75 font-roboto font-normal p-5"
                  placeholder="Type Your Name...."
                />
                <input
                  type="text"
                  className="lg:w-[613px] lg:h-[55px] h-[40px] w-full border-none outline-none rounded-[5px] bg-gray-700 text-[12px] xl:text-[14px] text-white/75 font-roboto font-normal p-5 xxl:text-[16px]"
                  placeholder="Type Your Email...."
                />
                <input
                  type="text"
                  className="lg:w-[613px] lg:h-[55px] h-[40px] w-full border-none outline-none rounded-[5px] bg-gray-700 text-[12px] xl:text-[14px] text-white/75 font-roboto font-normal p-5  xxl:text-[16px]"
                  placeholder="Type Your Website...."
                />
                <button className="bg-btnBackground whitespace-nowrap py-2 xl:py-3 px-4 text-white text-[12px] lg:text-[14px] font-roboto w-[140px] lg:w-[160px] font-medium hover:bg-hoverBtnBackground rounded-[5px] lg:rounded-[10px] ">
                  Post Your Comment
                </button>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="w-full lg:w-1/3 xxl:w-[20%] lg:sticky lg:top-20 "
          >
            <BlogSidebar />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
