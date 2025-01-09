"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FaCartArrowDown } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { NavbarLinksType } from "../../types/componentsTypes";
import { NavbarPropsType } from "../../types/componentsTypes";
import { ImSpoonKnife } from "react-icons/im";
const Navbar = ({ openNav }: NavbarPropsType) => {
  const [wishlistCount, setWishlistCount] = useState(0);
  useEffect(() => {
    const wishlistString = localStorage.getItem("wishlist");
    const wishlist: any[] = wishlistString ? JSON.parse(wishlistString) : [];
    setWishlistCount(wishlist.length);
  }, []);
  const navLinks: NavbarLinksType[] = [
    { href: "/", name: "Home", dropdown: [] },
    { href: "/about", name: "About", dropdown: [] },
    { href: "/services", name: "Services", dropdown: [] },
    { href: "/menu", name: "Menu", dropdown: [] },
    { href: "/gallery", name: "Gallery", dropdown: [] },
    { href: "/blog", name: "Blog", dropdown: [] },
    {
      href: "/contact",
      name: "Contact",
      dropdown: [
        { href: "/faqs", name: "FAQs" },
        { href: "/trackMyOrder", name: "Track My Order" },
      ],
    },
  ];
  const [navBg, setNavBg] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  useEffect(() => {
    const handler = () => setNavBg(window.scrollY >= 90);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  const handleSearchToggle = () => setIsSearchActive(true);
  const closeSearchMode = () => setIsSearchActive(false);
  const toggleDropdown = (index: number) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };
  return (
    <nav
      className={`w-full fixed top-[2.5rem] z-10 transition-all duration-200 ${
        navBg ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between w-[95%] mx-auto h-[12vh]">
        {isSearchActive ? (
          <div className="flex w-full items-center justify-between bg-black text-white p-2">
            <div className="flex items-center justify-center">
              <FaSearch size={24} />
              <input
                type="text"
                className="w-full bg-transparent outline-none text-white placeholder-gray-400 text-lg"
                placeholder="Search..."
              />
            </div>
            <IoClose
              size={30}
              className="cursor-pointer"
              onClick={closeSearchMode}
            />
          </div>
        ) : (
          <>
            <div className="flex items-center text-white md:space-x-2">
              <ImSpoonKnife className="text-btnBackground h-7 w-7" />
              <span className="text-[17px] xl:text-[1.4rem] md:text-[20px] font-extrabold italic text-btnBackground">
                <Link href="/">ChowChamps</Link>
              </span>
            </div>
            <div className="flex items-center space-x-8">
              <div className="hidden lg:flex items-center xl:space-x-8 lg:space-x-6 text-white">
                {navLinks.map((link, index) => (
                  <div
                    key={index}
                    className="relative group flex items-center"
                    onMouseEnter={() => toggleDropdown(index)}
                    onMouseLeave={() => setDropdownOpen(null)}
                  >
                    <Link
                      href={link.href}
                      className="nav_link hover:text-btnBackground transition-all font-semibold duration-200 hover:scale-105 flex items-center"
                    >
                      {link.name}
                      {link.dropdown.length > 0 && (
                        <IoIosArrowDown
                          className={`ml-1 transform transition-transform ${
                            dropdownOpen === index ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      )}
                    </Link>
                    {link.dropdown.length > 0 && (
                      <div
                        className={`dropdownBg absolute left-0 mt-2 top-[25px] bg-white text-white rounded-md shadow-lg transition-all duration-300 ease-in-out overflow-hidden transform ${
                          dropdownOpen === index
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-95"
                        }`}
                      >
                        {link.dropdown.map((sublink, subIndex) => (
                          <Link
                            key={subIndex}
                            href={sublink.href}
                            className="block px-8 py-1 text-[14px] whitespace-nowrap hover:text-btnBackground"
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between space-x-4">
                <button
                  className="text-lg py-1 rounded flex items-center justify-center"
                  onClick={handleSearchToggle}
                >
                  <FaSearch className="text-white hover:scale-110 hover:text-btnBackground transition-all duration-300 ease-linear xl:h-[24px] xl:w-[24px] md:w-[22px] md:h-[22px] h-[19px] w-[19px]" />
                </button>

                <div className="relative flex items-center">
                  <Link
                    href="/cart"
                    className="relative flex items-center justify-center"
                  >
                    <FaCartArrowDown className="text-white hover:scale-110 hover:text-btnBackground transition-all duration-300 ease-linear md:h-[24px] md:w-[24px] xl:h-[27px] xl:w-[27px] h-[19px] w-[19px]" />
                  </Link>
                  <div className="absolute -top-[10px] -right-[10px] md:-top-[7px] xl:h-5 xl:w-5 h-4 w-4 rounded-full bg-red-500 flex items-center justify-center">
                    <span className="text-[10px] text-white">1</span>
                  </div>
                </div>

                <div className="relative flex items-center">
                  <Link
                    href="/wishlist"
                    className="relative flex items-center justify-center"
                  >
                    <FiHeart className="text-white hover:scale-110 hover:text-btnBackground transition-all duration-300 ease-linear md:h-[24px] md:w-[24px] xl:h-[27px] xl:w-[27px] h-[19px] w-[19px]" />
                  </Link>
                  <div className="absolute -top-[10px] -right-[10px] md:-top-[7px] xl:h-5 xl:w-5 h-4 w-4 rounded-full bg-red-500 flex items-center justify-center">
                    <span className="text-[10px] text-white">
                      {wishlistCount}
                    </span>
                  </div>
                </div>

                <HiBars3BottomRight
                  onClick={openNav}
                  className="md:w-8 md:h-8 h-6 w-6 cursor-pointer text-white hover:scale-110 hover:text-btnBackground transition-all duration-300 ease-linear lg:hidden"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
