"use client";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import ThreeCardsSection from "@/components/ThreeCardsSection";
import TwoCardsSection from "@/components/TwoCardsSection";
import BestTestedFood from "@/components/BestTestedFood";
// import PopularFoodSection from "@/components/PopularFoodSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <>
      <div className="">
        <Header />
        <div className="">
          <Banner />
          <ThreeCardsSection />
          <TwoCardsSection />
          <BestTestedFood />
          {/* <PopularFoodSection /> */}
        </div>
      </div>
    </>
  );
}
