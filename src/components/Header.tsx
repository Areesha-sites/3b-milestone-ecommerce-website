import React from "react";
import { MdCall } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";
const Header = () => {
  return (
    <header className="w-full bg-black text-white xl:px-7 lg:py-3 xl:py-3 md:py-3 py-4 px-4 fixed top-0 z-20">
      <div className="flex lg:justify-between justify-center gap-[10px] md:gap-x-[20px] flex-row items-center w-full mx-auto">
        <p className="flex lg:text-[14px] md:text-[12px] text-[8px] opacity-70">
          <MdCall className="mr-2 lg:mt-1 text-btnBackground h-3 w-3 md:h-4 md:w-4" />{" "}
          Customer Support: +1234 5678 90
        </p>
        <p className="flex lg:text-[14px] md:text-[12px] text-[8px] opacity-70">
          <BsFillSendFill className="mr-2 mt-1 text-btnBackground h-3 w-3 md:h-4 md:w-4" />{" "}
          support@shopnow.com
        </p>
        <p className="lg:text-[14px] md:text-[12px] text-[8px] opacity-70 md:block hidden">
          <span className="text-btnBackground">Free Shipping</span> on orders
          over $50!
        </p>
      </div>
    </header>
  );
};

export default Header;
