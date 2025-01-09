import React from "react";
import { ImSpoonKnife } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";
import NewsLetter from "./NewsLetter";
const Footer = () => {
  return (
    <>
      <NewsLetter />
      <footer className="font-sans tracking-wide bg-black px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-6">
          <div data-aos="fade-up" data-aos-delay="200">
            <span className="text-[16px] md:text-[1.4rem] font-extrabold italic text-btnBackground flex items-center font-roboto">
              <ImSpoonKnife className="md:h-7 md:w-7 h-5 w-5 text-btnBackground mr-2" />
              ChowChamps
            </span>
            <ul className="mt-10 flex space-x-5 ">
              <li>
                <FaFacebookSquare className="h-[24px] w-[24px] text-gray-300 hover:text-btnBackground cursor-pointer" />
              </li>

              <li>
                <FaLinkedin className="h-[24px] w-[24px] text-gray-300 hover:text-btnBackground cursor-pointer" />
              </li>
              <li>
                <LuInstagram className="h-[25px] w-[25px] text-gray-300 hover:text-btnBackground cursor-pointer" />
              </li>
              <li>
                <FaTwitter className="h-[25px] w-[25px] text-gray-300 hover:text-btnBackground cursor-pointer" />
              </li>
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-white font-semibold font-roboto text-lg relative max-sm:cursor-pointer">
              Services
            </h4>
            <ul className="mt-6 space-y-3 text-gray-400  ">
              {[
                "Web Development",
                "Pricing",
                "Support",
                "Client Portal",
                "Resources",
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    className="text-[14px] hover:text-white font-roboto"
                    href="#"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-white font-semibold font-roboto text-lg relative max-sm:cursor-pointer">
              Platforms
            </h4>
            <ul className="mt-6 space-y-3 text-gray-400 ">
              {[
                "Hubspot",
                "Integration Services",
                "Marketing Glossar",
                "UIPath",
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    className="text-[14px] hover:text-white font-roboto"
                    href="#"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-white font-semibold font-roboto text-lg relative max-sm:cursor-pointer">
              Company
            </h4>
            <ul className="mt-6 space-y-3 text-gray-400 ">
              {["About us", "Careers", "Blog", "Portfolio", "  Events"].map(
                (link, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="text-[14px] hover:text-white font-roboto"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-white font-semibold font-roboto text-lg relative max-sm:cursor-pointer">
              Additional
            </h4>
            <ul className="mt-6 space-y-3 text-gray-400 ">
              {["FAQ", "Partners", "Sitemap", "Contact", "News"].map(
                (link, index) => (
                  <li  key={index}>
                    <Link
                      href="#"
                      className="text-[14px] hover:text-white font-roboto"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <hr
          data-aos="fade-up"
          data-aos-delay="200"
          className="my-10 border-gray-400 "
        />
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex flex-wrap max-md:flex-col gap-4"
        >
          <ul className="md:flex md:space-x-6 max-md:space-y-2">
            <li>
              <Link
                href="#"
                className="hover:text-white font-roboto text-gray-400 text-sm"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white font-roboto text-gray-400 text-sm"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white font-roboto text-gray-400 text-sm"
              >
                Security
              </Link>
            </li>
          </ul>
          <p className="text-gray-400 text-sm md:ml-auto font-roboto">
            © ChowChamps. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
