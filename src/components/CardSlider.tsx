import React from "react";
import Image from "next/image";
import { FollowProps } from "../../types/componentsTypes";
const ContactCardSlider = ({ image }: FollowProps) => {
  return (
    <div className="relative group ">
      <Image
        src={image}
        alt="images"
        width={1000}
            height={1000}
            quality={100}
            priority
        className="object-cover h-[250px] w-[600px]"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center ">
        <p className="text-gray-200 text-base font-bold">
          #FoodDelivery <br />
          #OnlineFood <br />
          #Foodie <br />
          #FoodLover <br />
          #Delicious <br />
          #Yummy <br />
          #OrderNow <br />
        </p>
      </div>
    </div>
  );
};

export default ContactCardSlider;