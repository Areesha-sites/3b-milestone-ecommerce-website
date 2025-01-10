"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CartSideMenu from "@/components/CartSideMenu";
import Image from "next/image";
import { RiSubtractLine } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};
const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
const [subtotal, setSubtotal] = useState(0);
const [total, setTotal] = useState(0);
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart).map((item: CartItem) => ({
        ...item,
        price: parseFloat(item.price.toString()),
        quantity: item.quantity || 1,
      }));
      setCart(parsedCart);
    }
  }, []);
  useEffect(() => {
    const newSubtotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setSubtotal(newSubtotal);
    setTotal(newSubtotal);
  }, [cart]);
  const onIncreaseQuantity = (id: string) => {
    updateQuantity(id, "increase");
  };
  const onDecreaseQuantity = (id: string) => {
    updateQuantity(id, "decrease");
  };
  const updateQuantity = (id: string, operation: "increase" | "decrease") => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        const newQuantity =
          operation === "increase"
            ? item.quantity + 1
            : Math.max(item.quantity - 1, 1);
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const deleteFromCart = (product: {
    id: string;
    name: string;
    price: number;
    image: string;
  }) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  return (
    <>
      {/* <section className="w-full h-[765px] absolute top-[570px] flex flex-col justify-between"></section> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[20px] lg:gap-x-[40px] h-auto pt-36 md:pt-40 lg:px-4 px-3 md:px-16 w-full bg-black lg:pt-52 xl:px-24 lg:pl-11 xl:py-12 xl:pt-40">
        <div>
          <h1 className="md:text-3xl text-[25px] font-bold mb-4 font-roboto text-white/50">
            My Cart
          </h1>
          <div className="border-b-[1px] border-white/20 w-full mx-auto"></div>
          <CartSideMenu
            products={cart}
            isOpen={false}
            onClose={() => {}}
            onAddToCart={() => {}}
            onDelete={deleteFromCart}
            onIncreaseQuantity={(product) => onIncreaseQuantity(product.id)}
            onDecreaseQuantity={(product) => onDecreaseQuantity(product.id)}
            totalPrice={total}
          />{" "}
          <div className="space-y-4 lg:mt-5 mt-3 flex flex-col">
            {cart.length === 0 ? (
              <p className="text-center text-gray-500">
                No products in the cart
              </p>
            ) : (
              cart.map((product) => (
                <div key={product.id} className="flex flex-col">
                  <div className="flex items-center justify-between gap-[20px] py-4">
                    <div className="flex justify-center items-center border-[1px] border-white/30 md:h-[80px] md:w-[100px] h-[50px] w-[60px]">
                      <Image
                        src={product.image}
                        alt={product.name}
                        height={60}
                        width={60}
                        className="md:w-[70px] md:h-[70px] w-[50px] h-[50px] hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
                      />
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <div className="flex flex-col">
                        <h3 className="md:text-[20px] text-[14px] leading-[15px] font-roboto text-white font-semibold w-[70px] sm:w-[120px] md:w-[150px] md:leading-[23px] xl:w-[200px]">
                          {product.name}
                        </h3>
                        <p className=" text-[12px] md:text-[18px] font-roboto font-normal text-white/45">
                          ${product.price}
                        </p>
                      </div>
                      <div className="flex justify-between items-center border-[1px] border-white/25 md:px-3 px-1 md:w-[100px] w-[70px] md:h-[30px] h-[25px]">
                        <RiSubtractLine
                          onClick={() => onDecreaseQuantity(product.id)}
                          className="md:h-4 md:w-5 h-3 w-3  text-white cursor-pointer"
                        />
                        <p className="md:text-[18px] text-[12px] font-roboto text-white/80 font-medium">
                          {product.quantity}
                        </p>
                        <IoMdAdd
                          onClick={() => onIncreaseQuantity(product.id)}
                          className="md:h-4 md:w-5 h-3 w-3 text-white cursor-pointer"
                        />
                      </div>
                      <p className="text-white font-roboto md:text-[18px] text-[12px] font-medium">
                        ${(product.price * product.quantity).toFixed(2)}
                      </p>
                      <FaTrash
                        onClick={() => deleteFromCart(product)}
                        className="text-btnBackground md:h-4 md:w-4 w-3 h-3 cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="border-b-[1px] border-white/20 w-full"></div>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="flex flex-col md:mx-auto">
          <h3 className="md:text-3xl text-[25px] font-bold mb-4 font-roboto text-white/50">
            Order Summary
          </h3>
          <div className="border-b-[1px] border-white/20 w-full lg:w-[400px] md:w-[650px]"></div>
          <div className="flex justify-between items-center mt-6 w-full lg:w-[400px] md:w-[650px]">
            <p className="text-white/50 font-roboto text-[14px] md:text-[20px] font-normal">
              Subtotal
            </p>
            <p className="text-white/50 font-roboto text-[14px] md:text-[20px] font-normal">
              ${subtotal.toFixed(2)}
            </p>
          </div>
          <div className="border-b-[1px] border-white/20 w-full lg:w-[400px] md:w-[650px] mt-3"></div>
          <div className="flex justify-between items-center mt-6 w-full  lg:w-[400px] md:w-[650px]">
            <p className="text-white/50 font-roboto text-[14px] md:text-[20px] font-normal">
              Total
            </p>
            <p className="text-white/50 font-roboto text-[14px] md:text-[20px] font-normal">
              ${total.toFixed(2)}
            </p>
          </div>
          <button className=" lg:w-[400px] md:w-[650px] w-full h-[30px] md:h-[40px] bg-btnBackground hover:bg-hoverBtnBackground px-4 py-2 flex justify-center items-center mt-3 rounded-[2px]">
            <Link
              href="/checkout"
              className="text-white font-medium font-roboto text-[14px] md:text-[16px]"
            >
              Checkout
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
