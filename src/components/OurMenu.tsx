import React from "react";
import MenuTabs from "./MenuTabs";

const OurMenu = () => {
  return (
    <>
      <section className="w-full py-6 px-14 bg-black text-white">
        <h1 className="text-5xl font-bold font-sans uppercase text-center">
          Our Best Menu
        </h1>
        <div className="my-5 border-b-[4px] border-btnBackground w-[150px] mx-auto"></div>
        <p className="text-[16px] text-white/70 font-sans w-[550px] text-center mx-auto">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </p>
        <div className="my-5 ">
          <MenuTabs />
        </div>
      </section>
    </>
  );
};

export default OurMenu;
