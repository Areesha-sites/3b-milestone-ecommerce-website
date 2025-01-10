import React from "react";
import MenuCardsList from "./MenuCardsList";
const MenuSection = () => {
  return (
    <>
      <div className=" relative top-[10px]">
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-[20px] text-white font-roboto font-bold text-center">
            Juicy Burgers You Can not Resist.
          </h3>
          <p className="text-center font-roboto text-[12px] text-white/50 font-normal">
            Savor the perfect blend of flavors with our handcrafted burgers.
            Made with fresh ingredients and grilled to perfection, every bite is
            a treat to remember.
          </p>
        </div>
        <div className="">
          <MenuCardsList />
        </div>
      </div>
    </>
  );
};

export default MenuSection;
