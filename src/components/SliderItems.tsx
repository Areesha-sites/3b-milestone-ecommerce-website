import React from "react";
import { followData } from "../../api/route";
import CardSlider from "../components/CardSlider";
import { FollowProps } from "../../types/componentsTypes";
const SliderItem = () => {
  return (
    <div className="slider-container pb-12">
      <div className="slider-track">
        {followData.map((item: FollowProps) => (
          <div key={item.id} className="slider-item">
            <CardSlider image={item.image} id={item.id} />
          </div>
        ))}
        {followData.map((item: FollowProps) => (
          <div key={`duplicate-${item.id}`} className="slider-item">
            <CardSlider image={item.image} id={item.id} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default SliderItem;
