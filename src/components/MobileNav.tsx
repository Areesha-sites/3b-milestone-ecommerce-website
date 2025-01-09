import React, { useState } from "react";
import Link from "next/link";
import { CgClose } from "react-icons/cg";
import { MobileNavPropsType } from "../../types/componentsTypes";
export const MobileNav = ({ showNav, closeNav }: MobileNavPropsType) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div>
      <div
        className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}
      ></div>
      <div
        className={`text-white ${navOpen} transform transition-all duration-500 delay-300 fixed flex flex-col h-full w-[80%] mx-auto sm:w-[60%] bg-black space-x-6 z-[10000]`}
      >
        <div className="flex items-center space-x-10 mt-20">
          <ul className="flex flex-col items-center justify-center gap-5 text-white md:ml-[9rem]">
            {["Home", "About", "Services", "Menu", "Gallery", "Blog"].map(
              (item, index) => (
                <li
                  key={index}
                  className="text-[18px] ml-24 sm:text-[20px] hover:text-btnBackground font-medium transition-all duration-200 hover:scale-105"
                >
                  <Link href={`/${item.toLowerCase().replace(/ & /g, "-")}`}>
                    {item}
                  </Link>
                </li>
              )
            )}
            <li className="relative text-[18px] ml-24 sm:text-[20px] hover:text-btnBackground font-medium transition-all duration-200 hover:scale-105">
              <div
                onClick={toggleDropdown}
                className="cursor-pointer flex items-center"
              >
                Contact
              </div>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 bg-black border border-gray-700 rounded-lg shadow-lg w-40">
                  {["Email Us", "Call Us", "Locate Us"].map((item, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 text-sm hover:bg-gray-800 hover:text-btnBackground"
                    >
                      <Link href={`/${item.toLowerCase().replace(/ /g, "-")}`}>
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
          <CgClose
            onClick={closeNav}
            className="absolute top-[0.7rem] right-[1.4rem] sm:w-4 w-5 h-5 text-white"
          />
        </div>
      </div>
    </div>
  );
};
