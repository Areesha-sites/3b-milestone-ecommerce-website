"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineStar } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { useEffect } from "react";
import CartSideMenu from "./CartSideMenu";
import Button from "@mui/material/Button";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import {
  addToWishlist,
  removeFromWishlist,
} from "@/app/utils/localStorageHelper";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  discount?: number;
  stock?: number;
  quantity: number;
}
const PopularCard = ({
  id,
  image,
  name,
  price,
  discount,
  stock,
  quantity,
}: Product) => {
  const [isAddedToWishlist, setIsAddedToWishlist] = useState<boolean>(false);
  // const [showPopup, setShowPopup] = useState<boolean>(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [sheetOpen, setSheetOpen] = useState(false);

  const handleOpenSheet = () => {
    setSheetOpen(true);
  };
  // const handleNavigateToWishlist = () => {
  //   console.log("Navigating to Wishlist...");
  //   setShowPopup(false);
  // };
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
  const handleAddToCart = (product: Product) => {
    const updatedCart = [...cartItems];
    const existingProductIndex = updatedCart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex >= 0) {
      updatedCart[existingProductIndex].quantity =
        (updatedCart[existingProductIndex].quantity || 0) + 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    // setIsSideMenuOpen(true);
  };
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
  const handleAddToWishlist = () => {
    const item = { id, name, image, price, discount, stock };
    addToWishlist(item);
    setIsAddedToWishlist(true);
    // setShowPopup(true);
    // setTimeout(() => setShowPopup(false), 2000);
  };
  const handleRemoveFromWishlist = () => {
    removeFromWishlist(id);
    setIsAddedToWishlist(false);
  };
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      <div className="w-full ">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="relative w-full md:max-w-xs max-w-[270px] mx-auto overflow-hidden rounded-[20px] shadow-md card-bg"
        >
          <div
            className="w-[35px] h-[35px] wishlist-bg rounded-full flex justify-center items-center absolute right-[10px] top-[10px]"
            onClick={
              isAddedToWishlist ? handleRemoveFromWishlist : handleAddToWishlist
            }
          >
            <Button onClick={handleClick}>
              <GoHeart
                className={`h-5 w-5 text-white cursor-pointer ${
                  isAddedToWishlist ? "text-red-500" : "text-white"
                } heart-icon`}
              />
            </Button>
          </div>
          <div className="flex justify-center items-center h-48 hover:bg-yellow-500 transition duration-300 rounded-[20px] ">
            <Image
              height={170}
              width={170}
              className="rounded-t-lg object-cover cursor-pointer hover:scale-110 transition-all duration-500 ease-in-out"
              src={image}
              alt={name}
            />
          </div>
          <div className="mt-4 px-5 pb-5">
            <h5 className="text-[23px] font-semibold font-roboto text-white">
              {name}
            </h5>
            <div className="mt-2.5 mb-5 flex items-center justify-between">
              <div className="flex justify-start">
                <span className="mr-2 rounded bg-btnBackground text-white px-2.5 py-0.5 text-xs font-semibold">
                  5.0
                </span>
                <div className="flex justify-center items-center">
                  <MdOutlineStar className="h-4 w-4 text-btnBackground" />
                  <MdOutlineStar className="h-4 w-4 text-btnBackground" />
                  <MdOutlineStar className="h-4 w-4 text-btnBackground" />
                  <MdOutlineStar className="h-4 w-4 text-btnBackground" />
                  <MdOutlineStar className="h-4 w-4 text-btnBackground" />
                </div>
              </div>
              <p>
                <span className="text-3xl font-bold text-white/50">
                  ${price}
                </span>
                <span className="text-sm text-btnBackground line-through">
                  {discount}
                </span>
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={() => {
                  handleAddToCart({
                    id,
                    image,
                    name,
                    price,
                    discount,
                    stock,
                    quantity,
                  });
                  handleOpenSheet();
                }}
                className="flex items-center rounded-md bg-btnBackground px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-hoverBtnBackground font-roboto"
              >
                <BsCart3 className="h-5 w-5 text-white mr-2 font-bold" />
                Add to cart
              </button>
              <Link
                href={`/menuDetails/${id}`}
                passHref
                className="text-white/50 font-roboto text-[15px] underline hover:text-btnBackground font-normal transition-all duration-300 ease-linear "
              >
                See More
              </Link>
            </div>
          </div>
        </div>
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <div style={{ display: "none" }} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Cart</SheetTitle>
            </SheetHeader>
            <div className="p-4">
              <CartSideMenu
                products={cartItems}
                isOpen={true}
                onClose={() => setSheetOpen(false)}
                onAddToCart={goToCart}
                onDelete={handleDeleteFromCart}
                onIncreaseQuantity={handleIncreaseQuantity}
                onDecreaseQuantity={handleDecreaseQuantity}
                totalPrice={calculateTotalPrice()}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" variant="filled">
          Added to wishlist successfully!
        </Alert>
      </Snackbar>
    </>
  );
};

export default PopularCard;
