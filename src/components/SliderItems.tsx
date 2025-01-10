import React from "react";
import { followData } from "../../api/route";
import CardSlider from "../components/CardSlider"
const SliderItem = () => {
  return (
    <div className="slider-container pb-12">
      <div className="slider-track">
        {followData.map((item:any) => (
          <div key={item.id} className="slider-item">
            <CardSlider  image={item.image} id={item.id}  />
          </div>
        ))}
        {followData.map((item:any) => (
          <div key={`duplicate-${item.id}`} className="slider-item">
            <CardSlider  image={item.image} id={item.id}  />
            </div>
        ))}
      </div>
    </div>
  );
};
export default SliderItem;
