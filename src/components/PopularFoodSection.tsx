"use client";
import React from "react";
// import CardsSlider from "./Slider";
const PopularFoodSection = () => {
  return (
    <section className="w-full xl:px-5 bg-black pb-16 text-white ">
      <p
        data-aos="fade-up"
        data-aos-delay="200"
        className="md:text-[17px] text-[12px] text-left text-btnBackground font-normal font-greatVibes px-5 "
      >
        Crispy, Every Bite Taste
      </p>
      <h1
        data-aos="fade-up"
        data-aos-delay="200"
        className="md:text-[35px] text-[25px] w-full text-white font-bold font-roboto uppercase px-5"
      >
        Popular Food Items
      </h1>
      {/* <CardsSlider /> */}
    </section>
  );
};
export default PopularFoodSection;
