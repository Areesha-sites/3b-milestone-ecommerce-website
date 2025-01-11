import React from "react";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { HiOutlineArrowRight } from "react-icons/hi";
import Link from "next/link";
import { BlogsCardsPropsTypes } from "../../types/componentsTypes";
const BlogCard = ({
  id,
  image,
  author,
  comments,
  date,
  title,
  des,
}: BlogsCardsPropsTypes) => {
  return (
    <>
      <div className="xl:w-[700px] xl:h-[700px] lg:w-[600px] lg:h-[600px] w-full  text-white flex flex-col gap-[15px] justify-center mx-auto ">
        <Image
          data-aos="fade-up"
          data-aos-delay="300"
          src={image}
          alt={title}
          width={1000}
          height={1000}
          quality={100}
          priority
          className="w-full h-[200px] lg:h-[400px] xxl:w-full xxl:h-[400px] rounded-[10px] md:h-[300px] object-cover mx-auto"
        />
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="grid lg:grid-cols-3 grid-cols-2 md:grid-cols-3 gap-[10px]"
        >
          <div className="flex items-center gap-[6px]">
            <FaUser className="text-btnBackground w-[14px] h-[14px]" />
            <p className="font-roboto text-[13px] xxl:text-[16px] text-white/50 font-normal">
              {author}
            </p>
          </div>
          <div className="flex items-center gap-[6px]">
            <FaComments className="text-btnBackground xl:w-4 xl:h-4 h-3 w-3" />
            <p className="font-roboto text-[13px] xxl:text-[16px] text-white/50 font-normal">
              {comments} Comments
            </p>
          </div>
          <div className="flex items-center gap-[6px]">
            <SlCalender className="text-btnBackground xl:w-4 xl:h-4 h-3 w-3" />
            <p className="font-roboto text-[13px] xxl:text-[16px] text-white/50 font-normal whitespace-nowrap">
              {date}
            </p>
          </div>
        </div>
        <h1
          data-aos="fade-up"
          data-aos-delay="300"
          className="xl:text-[32px] text-[22px] xxl:text-[36px] text-white font-roboto font-bold xl:leading-[35px] leading-[25px] mt-5"
        >
          <span
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-btnBackground"
          >
            QUICK CRAVINGS:{" "}
          </span>
          {title}
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-white/50 font-normal font-roboto text-[12px] xl:text-[14px] xxl:text-[16px]"
        >
          {des}
        </p>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex gap-[7px] items-center underline"
        >
          <Link
            href={`/blogDetails/${id}`}
            passHref
            className="text-btnBackground hover:text-white text-[12px] xxl:text-[16px] xl:text-[14px] font-roboto font-medium hover:text-btnBackground transition-all duration-200 ease-linear "
          >
            Read More
          </Link>
          <HiOutlineArrowRight className=" w-[15px] h-[15px] text-btnBackground hover:text-white cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default BlogCard;
