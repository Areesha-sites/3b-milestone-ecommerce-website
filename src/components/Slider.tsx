"use client";
import Slider from "react-slick";
import MenuCard from "../components/MenuCard"
import { menuData } from "../../api/route";
function PopularCardSlider() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div className="slider-container text-white grid grid-cols-4 ">
      <Slider {...settings}>
        {menuData.map((el, index) => (
          <MenuCard
            key={index}
            id={el.id}
            name={el.name}
            image={el.image}
            // des={el.des}
            price={el.price}
            // discount={el.discount}
            // stock={el.stock}
            reviews={el.reviews}
            des1={el.des1}
            des2={el.des2}
            benefits1={el.benefits1}
            benefits2={el.benefits2}
            benefits3={el.benefits3}
            benefits4={el.benefits4}
            benefits5={el.benefits5}
          />
        ))}
      </Slider>
    </div>
  );
}

export default PopularCardSlider;
