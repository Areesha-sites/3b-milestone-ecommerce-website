"use client";
import Link from "next/link";
import { menuData } from "../../../../api/route";
import Image from "next/image";
import { MdOutlineStar } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa6";
import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { MenuDetailsPropsTypes } from "../../../../types/componentsTypes";
import { useEffect } from "react";
import CartSideMenu from "@/components/CartSideMenu";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import CardsSlider from "@/components/Slider";
import {
  addToWishlist,
  removeFromWishlist,
} from "@/app/utils/localStorageHelper";
interface Props {
  params: {
    id: string;
  };
}
interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  discount?: number;
  stock?: number;
  quantity: number;
}
const MenuDetails: React.FC<Props> = ({ params }) => {
  const [isAddedToWishlist, setIsAddedToWishlist] = useState<boolean>(false);
  const [count, setCount] = useState<number>(1);
  const handleAddToWishlist = () => {
    if (product) {
      const { id, name, image, price, discount } = product;
      const item: MenuDetailsPropsTypes = {
        id,
        name,
        image,
        price,
        discount,
        stock: product.stock,
      };
      addToWishlist(item);
      setIsAddedToWishlist(true);
      setTimeout(() => setIsAddedToWishlist(false), 2000);
    }
  };
  const handleRemoveFromWishlist = () => {
    removeFromWishlist(id);
    setIsAddedToWishlist(false);
  };
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  // const [showPopup, setShowPopup] = useState<boolean>(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      const parsedCart = savedCart ? JSON.parse(savedCart) : [];
      setCartItems(parsedCart);
    } catch (error) {
      console.error("Error parsing cart data from localStorage:", error);
      setCartItems([]);
    }
  }, []);
  // const handleAddToCart = (product: Product) => {
  //   const updatedCart = [...cartItems];
  //   const existingProductIndex = updatedCart.findIndex(
  //     (item) => item.id === product.id
  //   );

  //   if (existingProductIndex >= 0) {
  //     updatedCart[existingProductIndex].quantity =
  //       (updatedCart[existingProductIndex].quantity || 0) + 1;
  //   } else {
  //     updatedCart.push({ ...product, quantity: 1 });
  //   }

  //   localStorage.setItem("cart", JSON.stringify(updatedCart));
  //   setCartItems(updatedCart);
  //   setIsSideMenuOpen(true);
  // };
  const handleDeleteFromCart = (product: Product) => {
    const updatedCart = cartItems.filter(
      (item: Product) => item.name !== product.name
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };
  const handleIncreaseQuantity = (product: Product) => {
    const updatedCart = [...cartItems];
    const productIndex = updatedCart.findIndex(
      (item: Product) => item.name === product.name
    );
    if (productIndex >= 0) {
      updatedCart[productIndex].quantity! += 1;
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCartItems(updatedCart);
    }
  };
  const handleDecreaseQuantity = (product: Product) => {
    const updatedCart = [...cartItems];
    const productIndex = updatedCart.findIndex(
      (item: Product) => item.name === product.name
    );
    if (productIndex >= 0 && updatedCart[productIndex].quantity! > 1) {
      updatedCart[productIndex].quantity! -= 1;
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCartItems(updatedCart);
    }
  };
  const closeSideMenu = () => {
    setIsSideMenuOpen(false);
  };
  const goToCart = () => {
    setIsSideMenuOpen(false);
  };
  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity!,
      0
    );
  };
  const [open, setOpen] = React.useState(false);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const { id } = params;
  const product = menuData.find(
    (item: MenuDetailsPropsTypes) => item.id === id
  );
  if (!product) {
    return (
      <div className="bg-black w-full py-28 h-auto pt-52 px-14 text-white">
        <div className="flex justify-center items-center flex-col gap-y-5">
          <h1 className="uppercase text-[60px] font-bold font-poppins w-[600px] mx-auto text-center text-btnBackground ">
            404
          </h1>
          <h1 className="uppercase text-[38px] font-bold font-poppins w-[600px] mx-auto text-center leading-[50px]">
            This Page Does not Exist.
          </h1>
          <div className="border-b-[4px] w-[100px] border-btnBackground"></div>
          <p className="text-white/70 text-[14px] font-roboto font-normal w-[800px] text-center">
            It looks like nothing was found at this location.
          </p>
          <button className="py-2 px-5 bg-btnBackground rounded-[5px] hover:bg-hoverBtnBackground text-white text-[13px] font-roboto font-semibold">
            <Link href="/menu">Go to back</Link>
          </button>
        </div>
      </div>
    );
  }
  return (
    <>
      <section className="bg-black w-full h-auto md:py-60 md:pt-52 py-44 lg:pt-48 pt-40 md:px-14 px-5 text-white ">
        <div className="flex justify-center items-center flex-col gap-y-5">
          <span className="xl:text-[18px] md:text-[15px] text-[14px] mb-[-20px] lg:mb-[-10px] md:mb-[-10px] font-greatVibes text-btnBackground font-normal text-center">
            Satisfy Your Cravings with Every Bite.
          </span>
          <h1 className="uppercase xl:text-[48px] xxl:text-[54px] md:text-[38px] text-[28px] leading-[30px] font-bold font-poppins lg:text-[43px] text-center">
            Discover Our <span className="text-btnBackground">Menu</span>
          </h1>
          <div className="border-b-[4px] w-[100px] border-btnBackground"></div>
          <p className="text-white/70 text-[12px] xxl:text-[16px] lg:text-[14px] font-roboto font-normal xl:w-[800px] lg:w-[800px] md:w-[600px] text-center w-full ">
            Explore a world of delicious flavors crafted to perfection. From
            appetizers to desserts, find everything you need to indulge in your
            favorite meals. Every dish is made with high-quality ingredients to
            bring you an unforgettable dining experience.
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 w-full mx-auto gap-y-[30px] xxl:gap-[10px]">
          <div className="xl:w-[500px] xl:h-[350px] lg:w-[400px] lg:h-[300px] md:w-[300px] md:h-[260px] w-full h-[270px] px-5 py-9  rounded-[10px] card-bg relative top-[80px] xl:left-[40px] xxl:left-[80px] flex justify-center items-center hover:bg-yellow-500 transition duration-300 ease-linear cursor-pointer xxl:w-[600px] xxl:h-[500px]">
            <Image
              src={product.image}
              alt="menu-image"
              height={200}
              width={200}
              className="xl:h-[300px] xl:w-[360px] lg:h-[270px] lg:w-[340px] md:w-[230px] md:h-[200px] hover:scale-105 transition-all ease-linear duration-300 h-full w-full object-contain 2xl:w-[500px] 2xl:h-[500px] "
            />
          </div>
          <div className="flex flex-col justify-center relative top-[80px]">
            <span className="px-3 py-1 xl:text-[14px] md:text-[12px] text-[11px] text-white font-roboto font-medium bg-btnBackground rounded-[5px] w-[80px] xxl:w-[100px] xxl:text-[16px] text-center whitespace-nowrap">
              {product.stock}
            </span>
            <h1 className="xl:text-[45px] xxl:text-[50px] text-[30px] md:text-[35px] font-bold font-roboto text-white whitespace-nowrap">
              {product.name}
            </h1>
            <p className="text-white/50 xxl:text-[16px] text-[14px] font-roboto ">
              {product.des}
            </p>
            <div className="lg:w-[400px] md:w-[360px] xxl:w-[510px] border-b-[1px] border-white/10 xl:my-2 my-2"></div>
            <div className=" flex items-center justify-between lg:w-[360px] md:w-[330px] w-[290px]">
              <p>
                <span className="text-[33px] xxl:text-[38px] font-bold text-white/50">
                  ${product.price}
                </span>
                <span className="text-[16px] xxl:text-[18px] text-btnBackground line-through">
                  {product.discount}
                </span>
              </p>
              <div className="flex justify-start">
                <span className="mr-2 rounded bg-btnBackground text-white px-3 py-1 xxl:px-4 xxl:text-[14px] text-[12px] font-semibold">
                  5.0
                </span>
                <div className="flex justify-center items-center">
                  <MdOutlineStar className="h-[18px] w-[18px] xxl:h-[22px] xxl:w-[22px] text-btnBackground" />
                  <MdOutlineStar className="h-[18px] w-[18px] xxl:h-[22px] xxl:w-[22px]  text-btnBackground" />
                  <MdOutlineStar className="h-[18px] w-[18px] xxl:h-[22px] xxl:w-[22px]  text-btnBackground" />
                  <MdOutlineStar className="h-[18px] w-[18px] xxl:h-[22px] xxl:w-[22px]  text-btnBackground" />
                  <MdOutlineStar className="h-[18px] w-[18px] xxl:h-[22px] xxl:w-[22px]  text-btnBackground" />
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center gap-[30px] lg:mt-5 mt-3">
              <div className="flex justify-center items-center h-[38px] xxl:h-[43px] border-[1px] border-white/10 w-[130px] mt-0 rounded-[6px] cursor-pointer">
                <FaMinus
                  onClick={handleDecrease}
                  className="h-3 w-3 xxl:h-4 xxl:w-4 text-white"
                />
                <span className="border-b-[1px] border-white/10 w-[34px] rotate-90"></span>
                <p className="text-[14px] xxl:text-[16px] font-roboto text-white font-bold">
                  {count}
                </p>
                <span className="border-b-[1px] border-white/10 w-[34px] rotate-90"></span>
                <FaPlus
                  onClick={handleIncrease}
                  className="h-3 w-3 xxl:h-4 xxl:w-4 text-white"
                />
              </div>
              <button
                // onClick={() =>
                //   handleAddToCart({

                //   })
                // }
                className="h-[36px] w-[150px] xxl:w-[180px] xxl:h-[42px] xxl:px-5 xxl:py-2  bg-btnBackground px-4 py-2 flex justify-center items-center gap-[6px] rounded-[3px] hover:bg-hoverBtnBackground"
              >
                <IoCartOutline className="h-4 w-4 xxl:w-6 xxl:h-6 text-white" />
                <p className="text-white font-roboto font-medium text-[14px] xxl:text-[16px] whitespace-nowrap">
                  Add to cart
                </p>
              </button>
            </div>
            <div className="lg:w-[400px] md:w-[360px] xxl:w-[515px] border-b-[0.5px] border-white/15 md:my-2 lg:my-4 my-4"></div>
            <div
              onClick={
                isAddedToWishlist
                  ? handleRemoveFromWishlist
                  : handleAddToWishlist
              }
              className="flex justify-start gap-[5px] items-center lg:mt-5"
            >
              <IoMdHeartEmpty
                className={`h-5 w-5 xxl:h-6 xxl:w-6 text-white cursor-pointer

                  ${isAddedToWishlist ? "text-red-500" : "text-white"}

                `}
              />
              <p className="text-white/50 font-normal xxl:text-[16px] hover:text-white transition-all duration-300 ease-linear text-[14px] font-roboto">
                Add to Wishlist
              </p>
            </div>
            <div className="flex gap-[10px] mt-4">
              <p className="text-[15px] xxl:text-[17px] font-normal text-white font-roboto">
                Share :
              </p>
              <div className="flex justify-center items-center gap-[5px] mt-[-2px]">
                <div className="w-[25px] h-[25px] xxl:w-[32px] xxl:h-[32px] rounded-full card-bg flex justify-center items-center  duration-300 transition-all ease-in-out hover:bg-btnBackground cursor-pointer">
                  <RiFacebookFill className="h-4 w-4 xxl:h-5 xxl:w-5" />
                </div>
                <div className="w-[25px] h-[25px] xxl:w-[32px] xxl:h-[32px] rounded-full card-bg flex justify-center items-center hover:bg-btnBackground cursor-pointer duration-300 transition-all ease-in-out">
                  <FaInstagram className="h-3 w-3 xxl:h-5 xxl:w-5" />
                </div>
                <div className="w-[25px] h-[25px] xxl:w-[32px] xxl:h-[32px] rounded-full card-bg flex justify-center items-center hover:bg-btnBackground cursor-pointer duration-300 transition-all ease-in-out">
                  <FaTwitter className="h-3 w-3 xxl:h-5 xxl:w-5" />
                </div>
                <div className="w-[25px] h-[25px] xxl:w-[32px] xxl:h-[32px] rounded-full card-bg flex justify-center items-center hover:bg-btnBackground cursor-pointer duration-300 transition-all ease-in-out">
                  <FaYoutube className="h-3 w-3 xxl:h-5 xxl:w-5" />
                </div>
              </div>
            </div>
            <div className="lg:w-[400px] md:w-[360px] border-b-[1px] xxl:w-[515px] border-white/10 my-4 lg:my-4"></div>
          </div>
        </div>
        <div className="relative 2xl:top-[60px] ">
          <div className="flex justify-start gap-[20px] items-center relative lg:top-[100px] xl:left-[40px] md:top-[130px] top-[90px]">
            <button className="h-[40px] w-[120px] xxl:w-[140px] xxl:px-5 xxl:text-[16px] bg-btnBackground px-4 py-2 hover:bg-hoverBtnBackground text-[14px] font-roboto font-medium ">
              Description
            </button>
            <p className="text-white/50 xxl:text-[16px] font-roboto text-[14px] font-normal">
              Reviews ({product.reviews})
            </p>
          </div>
          <div className="flex flex-col gap-[20px] relative md:top-[170px] lg:top-[120px] xl:w-[980px] lg:w-[940px] xl:left-[40px] top-[130px]">
            <p className="text-white/50 xxl:text-[16px] font-roboto lg:text-[14px] text-[12px] font-normal">
              {product.des1}
            </p>
            <p className="text-white/50 font-roboto xxl:text-[16px] lg:text-[14px] text-[12px] font-normal">
              {product.des2}
            </p>
            <h1 className="text-[25px] xxl:text-[30px] text-white font-bold font-roboto">
              Key Benefits
            </h1>
            <ul className="ml-4 list-disc flex flex-col gap-y-[3px]">
              <li className="text-white/50 xxl:text-[16px] font-roboto lg:text-[14px] text-[12px] font-normal">
                {product.benefits1}
              </li>
              <li className="text-white/50 xxl:text-[16px] font-roboto lg:text-[14px] text-[12px] font-normal">
                {product.benefits2}
              </li>
              <li className="text-white/50 xxl:text-[16px] font-roboto lg:text-[14px] text-[12px] font-normal">
                {product.benefits3}
              </li>
              <li className="text-white/50 xxl:text-[16px] font-roboto lg:text-[14px] text-[12px] font-normal">
                {product.benefits4}
              </li>
              <li className="text-white/50 xxl:text-[16px] font-roboto lg:text-[14px] text-[12px] font-normal">
                {product.benefits5}
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-44">
          <div className="flex flex-col gap-y-[5px] ml-5">
            <p className="xl:text-[18px] md:text-[15px] text-[14px] mb-[-20px] lg:mb-[-10px] md:mb-[-10px] font-greatVibes text-btnBackground font-normal ">
              You might also like
            </p>
            <h1 className="text-[35px] font-poppins font-bold text-white ">
              You Might Also Like
            </h1>
          </div>
          <div className="relative">
            <CardsSlider />
          </div>
        </div>
        <CartSideMenu
          products={cartItems}
          isOpen={isSideMenuOpen}
          onClose={closeSideMenu}
          onAddToCart={goToCart}
          onDelete={handleDeleteFromCart}
          onIncreaseQuantity={handleIncreaseQuantity}
          onDecreaseQuantity={handleDecreaseQuantity}
          totalPrice={calculateTotalPrice()}
        />
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" variant="filled">
            Added to wishlist successfully!
          </Alert>
        </Snackbar>
      </section>
    </>
  );
};

export default MenuDetails;
