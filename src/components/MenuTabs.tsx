"use client";
import React, { useState } from "react";
import MenuCard from "./MenuCard";
import { menuData } from "../../api/route";
const MenuTabs = () => {
  const [activeTab, setActiveTab] = useState("burgers");
  const tabs = [
    { id: "burgers", label: "Burgers" },
    { id: "fries", label: "Fries" },
    { id: "beverages", label: "Beverages" },
    { id: "desiFood", label: "Desi Food" },
    { id: "desserts", label: "Desserts" },
    { id: "deals", label: "Deals" },
  ];
  const filteredData = menuData.filter((item) => item.category === activeTab);
  
  return (
    <div className="flex flex-col items-center justify-center w-[300px] mx-auto md:w-[700px] md:max-w-[1280px]">
      <div className="mb-4">
        <ul
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex flex-wrap -mb-px text-sm xxl:text-[16px] font-medium text-center"
        >
          {tabs.map((tab) => (
            <li key={tab.id} className="me-2">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === tab.id
                    ? "text-btnBackground border-btnBackground"
                    : "hover:text-btnBackground hover:border-btnBackground"
                }`}
                onClick={() => setActiveTab(tab.id)}
                type="button"
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-[30px] gap-[10px] lg:gap-[20px] md:w-[700px] xl:w-[1100px] lg:w-[900px] relative top-[30px] mx-auto w-full lg:left-[-100px] md:left-[-20px] xl:left-[-200px] xl:gap-y-7 xs:ml-[-10px] ms:ml-0 xsm:ml-0 sm:ml-0">
      {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <MenuCard
              key={index}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              quantity={item.quantity || 1}  
              stock={typeof item.stock === "number" ? item.stock : "Out of Stock"}
            />
          ))
        ) : (
          <p className="text-gray-500">No items available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default MenuTabs;
