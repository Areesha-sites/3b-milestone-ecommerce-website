import React from "react";
import TwoCards from "./TwoCards";
const TwoCardsSection = () => {
  return (
    <section className="w-full py-3 lg:px-10 px-4 bg-black flex justify-between xxl:justify-center lg:flex-row flex-col gap-y-8">
      <TwoCards
        image="/discount-image.png"
        heading="Get a 10% discount on payday week"
      />
      <TwoCards
        image="/discount-image1.png"
        heading="Buy 1 Coke Get More Free 1 Coke"
      />
    </section>
  );
};

export default TwoCardsSection;
