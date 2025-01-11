"use client";
import React, { useState, useEffect } from "react";
import { getWishlist, removeFromWishlist } from "@/app/utils/localStorageHelper";
import { PiSmileySadLight } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";
import { IoMdTrash } from "react-icons/io";
import { WishlistItem } from "../../types/componentsTypes";
const Wishlist = () => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  useEffect(() => {
    const savedWishlist = getWishlist() as WishlistItem[];
    setWishlist(savedWishlist);
  }, []);
  const handleDelete = (itemId: string) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== itemId);
    setWishlist(updatedWishlist);
    removeFromWishlist(itemId);
  };
  return (
    <div className="flex justify-center items-center flex-col relative top-[30px]">
      {wishlist.length === 0 ? (
        <>
          <h1 className="uppercase text-[48px] font-bold font-poppins">
            You <span className="text-btnBackground">Wishlist</span> is Hungry!
          </h1>
          <div className="flex flex-col justify-center items-center gap-[10px]">
            <div className="flex gap-[5px] w-[500px] justify-center items-center">
              <p className="text-white/70 text-[14px] font-roboto font-normal  text-center">
                It looks like you have not added any tasty dishes yet.
              </p>
              <PiSmileySadLight className="h-[20px] w-[20px] text-white/50" />
            </div>
            <p className="text-white/70 text-[14px] font-roboto font-normal  text-center">
              Explore our menu and start adding your favorite meals to your
              wishlist. The more you add, the easier it is to indulge later!
            </p>
            <Link href="/menu">
              <button className="h-[40px] w-[130px] text-[14px] font-roboto text-white font-medium outline-none px-5 py-2 rounded-[6px] bg-btnBackground whitespace-nowrap hover:bg-hoverBtnBackground">
                Browse Menu
              </button>
            </Link>
            <Image
              src="/sad.jpg"
              alt="illustration"
              height={300}
              width={300}
              quality={90}
              priority
              className="object-cover"
            />
          </div>
        </>
      ) : (
        <div>
          <div className="flex justify-center items-center flex-col gap-y-5">
            <span className="xl:text-[18px] md:text-[15px] text-[14px] mb-[-20px] lg:mb-[-10px] md:mb-[-10px] font-greatVibes text-btnBackground font-normal text-center">
              Save Your Favorite Flavors for Later.
            </span>
            <h1 className="uppercase xxl:text-[54px] xl:text-[48px] md:text-[38px] text-[28px] leading-[30px] font-bold font-poppins lg:text-[43px] text-center">
              Your Delicious{" "}
              <span className="text-btnBackground">Wishlist</span> Awaits!
            </h1>
            <div className="border-b-[4px] w-[100px] border-btnBackground"></div>
            <p className="text-white/70 xxl:text-[16px] text-[12px] lg:text-[14px] font-roboto font-normal xl:w-[800px] lg:w-[800px] md:w-[600px] text-center w-full">
              At ChowChamp, we know how hard it is to pick just one dish. Now,
              with our wishlist feature, you can save your favorite menu items
              and come back to them whenever you are ready to indulge.
            </p>
            <div className="">
              <div className="flex items-center md:justify-between justify-center gap-x-[10px] card-bg text-white xl:w-[1100px] md:w-[700px] lg:w-[900px] h-[70px] relative top-[20px] md:px-10 px-2 border-b-[1px] border-white/30 rounded-[4px] w-full ">
                <h2 className="text-white font-bold font-roboto text-[12px] md:text-[14px]">
                  Image
                </h2>
                <h2 className="text-white font-bold font-roboto text-[12px] md:text-[14px]">
                  Product
                </h2>
                <h2 className="text-white font-bold font-roboto text-[12px] md:text-[14px]">
                  Amount
                </h2>
                <h2 className="text-white font-bold font-roboto text-[12px] md:text-[14px]">
                  Status
                </h2>
                <h2 className="text-white font-bold font-roboto text-[12px] md:text-[14px]">
                  Action
                </h2>
                <h2 className="text-white font-bold font-roboto text-[12px] md:text-[14px]">
                  Remove
                </h2>
              </div>
            </div>
          </div>
          <div className="">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center xl:w-[1100px] lg:w-[900px] md:w-[700px] relative top-[10px] md:top-[40px] xl:px-9 lg:px-8 md:px-0 py-4 border-b-[1px] border-white/30"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  height={100}
                  width={100}
                  className="md:h-[60px] md:w-[60px] w-[30px] h-[30px] discountImage"
                />
                <div className="flex flex-col gap-[3px]">
                  <h2 className="md:w-[200px] w-[100px] text-white font-medium font-roboto text-[12px] md:text-[14px] ml-2">
                    {item.name}
                  </h2>
                  <span>{item.discount}</span>
                </div>
                <p className="md:w-[100px] w-[50px] relative md:left-[-25px] left-[-15px] md:text-[14px] text-[12px]">${item.price}</p>
                <p className="md:w-[100px] relative md:left-[-25px] left-[-5px]">
                  <span
                    className={`${
                      item.stock === "In Stock"
                        ? "text-green-500 p-1 rounded"
                        : " text-red-500 p-1 rounded md:text-[14px] text-[10px] whitespace-nowrap"
                    }`}
                  >
                    {item.stock === "In Stock" ? "Available" : "Sold Out"}
                  </span>
                </p>
                <button
                  className={`px-4 py-2 rounded text-white relative left-[-10px] ${
                    item.stock === "In Stock"
                      ? "bg-btnBackground md:text-[14px] text-[10px] whitespace-nowrap"
                      : " cursor-not-allowed md:text-[14px] text-[10px] whitespace-nowrap"
                  }`}
                  disabled={item.stock !== "In Stock"}
                >
                  {item.stock === "In Stock" ? "Add to Cart" : "Out of Stock"}
                </button>
                <IoMdTrash
                  className="h-6 w-6 text-btnBackground cursor-pointer relative left-[-15px]"
                  onClick={() => handleDelete(item.id)}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Wishlist;
