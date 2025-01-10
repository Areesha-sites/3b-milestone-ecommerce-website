"use client";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import ThreeCardsSection from "@/components/ThreeCardsSection";
import TwoCardsSection from "@/components/TwoCardsSection";
import BestTestedFood from "@/components/BestTestedFood";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SliderItem from "@/components/SliderItems";
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
      <div>
        <Header />
        <div>
          <Banner />
          <ThreeCardsSection />
          <TwoCardsSection />
          <BestTestedFood />
          <SliderItem />
        </div>
      </div>
    </>
  );
}
