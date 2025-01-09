import React from "react";
import ThreeCards from "./ThreeCards";

const ThreeCardsSection = () => {
  return (
    <div className=" h-auto overflow-hidden bg-black text-white py-24 px-4 md:px-10 flex gap-[30px] lg:flex-row flex-col mx-auto w-full ">
      <ThreeCards
        image="/cheeseburger.png"
        bgColor="#FFB200"
        buttonColor="red"
        title="Food"
        text="Delicious meals to satisfy hunger."
      />
      <ThreeCards
        image="/chips.png"
        bgColor="#116530"
        buttonColor="green"
        title="Snack"
        text="Quick bites for instant cravings."
      />
      <ThreeCards
        image="/beverage.jpg"
        bgColor="#CC3433"
        buttonColor="orange"
        title="Beverages"
        text="Refreshing drinks for every occasion."
      />
    </div>
  );
};

export default ThreeCardsSection;
