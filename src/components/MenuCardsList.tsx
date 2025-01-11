import React from "react";
import { menuData } from "../../api/route";
import MenuCard from "./MenuCard";
const MenuCardsList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      {menuData.map((item) => (
        <MenuCard
          key={item.id}
          id={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
          discount={item.discount ? parseFloat(item.discount as string) : 0}
          des={item.des}
          reviews={item.reviews}
          des1={item.des1}
          des2={item.des2}
          benefits1={item.benefits1}
          benefits2={item.benefits2}
          benefits3={item.benefits3}
          benefits4={item.benefits4}
          benefits5={item.benefits5}
        />
      ))}
    </div>
  );
};

export default MenuCardsList;
