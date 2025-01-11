"use client";
import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import { RiSubtractFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  stock?: number;
  discount?: number;
  quantity?: number; 
}
// 80 668 30 890
type CartSideMenuProps = {
  products: Product[];
  isOpen: boolean;
  onClose: () => void;
  onDelete: (product: Product) => void;
  onIncreaseQuantity: (product: Product) => void;
  onDecreaseQuantity: (product: Product) => void;
  totalPrice: number;
};

const CartSideMenu = ({
  products,
  isOpen,
  onClose,
  onDelete, 
  onIncreaseQuantity, 
  onDecreaseQuantity, 
 
}: CartSideMenuProps) => {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  useEffect(() => {
    setCartProducts(products);
  }, [products]);
  // const onIncreaseQuantity = (id: string) => {
  //   setCartProducts((prev) =>
  //     prev.map((product) =>
  //       product.id === id
  //         ? { ...product, quantity: product.quantity + 1 }
  //         : product
  //     )
  //   );
  // };
  // const onDecreaseQuantity = (id: string) => {
  //   setCartProducts((prev) =>
  //     prev.map((product) =>
  //       product.id === id && product.quantity > 1
  //         ? { ...product, quantity: product.quantity - 1 }
  //         : product
  //     )
  //   );
  // };
  const calculateSubtotal = () => {
    return cartProducts.reduce(
      (total, product) => total + product.price * (product.quantity ?? 0),
      0
    );
  };
  const [isVisible, setIsVisible] = useState(isOpen);
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed top-0 right-0 md:w-[450px] w-full h-full bg-black bg-opacity-50 z-50 transition-all duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-black border-[1px] border-btnBackground py-6 pl-6 pr-3 rounded-l-lg h-full transform transition-all duration-500 overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-[100%]"
        }`}
      >
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-4 mt-8">
            <h2 className="text-xl font-semibold text-white font-roboto">
              Cart({cartProducts.length} Items)
            </h2>
            <button onClick={onClose} className="text-white/50">
              <RxCross2 size={25} />
            </button>
          </div>
          <div className="border-b-[1px] border-white/40 w-full"></div>
        </div>
        {cartProducts.length === 0 ? (
          <p className="text-center text-gray-500">No products in the cart</p>
        ) : (
          <div className="space-y-4 max-h-[400px] overflow-y-auto mt-4">
            {cartProducts.map((product, index) => (
              <div
                key={index}
                className="flex items-center justify-between w-[370px]"
              >
                <div className="border-[1px] border-white/55 h-[70px] w-[70px] rounded flex justify-center items-center mr-4">
                  {product.image && (
                    <Image
                      src={product.image}
                      alt={product.name}
                      height={60}
                      width={60}
                      className="w-[40px] h-[40px] object-cover"
                    />
                  )}
                </div>
                <div className="flex justify-between items-center w-[270px]">
                  <div className="flex flex-col w-[200px]">
                    <h3 className="text-lg font-normal font-roboto text-white">
                      {product.name}
                    </h3>
                    <p className="text-[14px] font-normal font-roboto text-white/50">
                      Price: ${product.price}
                    </p>
                    <div className="flex justify-between items-center w-[230px] mt-1">
                      <div className="flex justify-center gap-x-[10px] items-center border-[1px] px-2 py-[2px] rounded border-white/40">
                        <RiSubtractFill
                          className="h-3 w-3 text-white/50 cursor-pointer"
                          onClick={() => onDecreaseQuantity(product)}
                        />
                        <p className="text-[13px] font-roboto font-medium text-white/50">
                          {product.quantity}
                        </p>
                        <IoMdAdd
                          className="h-3 w-3 text-white/50 cursor-pointer"
                          onClick={() => onIncreaseQuantity(product)}
                        />
                      </div>
                      <p className="text-white/50">
                      Total: ${product.price * (product.quantity ?? 0)}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => onDelete(product)}
                    className="text-btnBackground ml-4 mt-[-42px]"
                  >
                    <FaTrash size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="flex flex-col space-y-4 mx-auto mt-4">
          <div className="border-b-[1px] border-white/50 w-full"></div>
          <div className="flex justify-between items-center">
            <h1 className="font-normal text-white/85 font-roboto text-[21px]">
              Subtotal
            </h1>
            <div className="font-normal text-white/85 font-roboto text-[21px]">
              ${calculateSubtotal()}
            </div>
          </div>
          <p className="text-[14px] font-roboto font-normal text-white/50">
            Taxes and shipping are calculated at checkout.
          </p>
          <Link
            className="text-[18px] font-roboto text-white font-medium"
            href="/checkout"
          >
            <button className="w-full h-[40px] px-4 flex justify-center items-center py-2 bg-btnBackground hover:bg-hoverBtnBackground rounded-[2px]">
              Checkout
            </button>
          </Link>
          <Link href="/cart">
            <button className="w-full h-[40px] text-white px-4 flex justify-center items-center py-2 border-[1px] border-white/45 rounded-[2px]">
              Go to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartSideMenu;
