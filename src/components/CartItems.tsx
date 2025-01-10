// "use client"
// import React, { useState, useEffect } from 'react';
// import CartSideMenu from './CartSideMenu'; 
// interface Product {
//   id: string;
//   name: string;
//   image: string;
//   price: number;
//   quantity: number;
// }
// const Cart = () => {
//   const [cart, setCart] = useState<{ id: string; name: string; price: string; image: string }[]>([]);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//  const [cartItems, setCartItems] = useState<Product[]>([]);
// useEffect(() => {
//     try {
//       const savedCart = localStorage.getItem("cart");
//       const parsedCart: Product[] = savedCart ? JSON.parse(savedCart) : [];
//       setCart(parsedCart);
//     } catch (error) {
//       console.error("Error parsing cart data from localStorage:", error);
//       setCart([]);
//     }
//   }, []);
//   useEffect(() => {
//     const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
//     setCart(savedCart);
//   }, []);

//   // const addToCart = (product: { id: string; name: string; price: string; image: string }) => {
//   //   const updatedCart = [...cart, product];
//   //   setCart(updatedCart); 
//   //   localStorage.setItem('cart', JSON.stringify(updatedCart));
//   //   setIsMenuOpen(true); 
//   // };

//   const addToCart = (product: Omit<Product, "quantity">) => {
//     const existingProduct = cart.find((item) => item.id === product.id);

//     let updatedCart;
//     if (existingProduct) {
//       // Increase quantity if product already exists
//       updatedCart = cart.map((item) =>
//         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//       );
//     } else {
//       // Add new product to cart
//       updatedCart = [...cart, { ...product, quantity: 1 }];
//     }

//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//     setIsMenuOpen(true);
//   };

//   const deleteFromCart = (product: Product) => {
//     const updatedCart = cart.filter((item) => item.id !== product.id);
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };
//   const increaseQuantity = (productId: string) => {
//     const updatedCart = cart.map((item) =>
//       item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
//     );
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   const decreaseQuantity = (productId: string) => {
//     const updatedCart = cart.map((item) =>
//       item.id === productId && item.quantity > 1
//         ? { ...item, quantity: item.quantity - 1 }
//         : item
//     );
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
//   return (
//     <div>
//       <button onClick={() => addToCart({ id: '1', name: 'Perfume', price: 50, image: 'perfume.jpg' })}>
//         Add Perfume to Cart
//       </button>
//       <CartSideMenu
//         products={cart}
//         isOpen={isMenuOpen}
//         onClose={() => setIsMenuOpen(false)}
//         onAddToCart={addToCart}
//         onDelete={deleteFromCart}
//         onIncreaseQuantity={increaseQuantity}
//         onDecreaseQuantity={decreaseQuantity}
//         totalPrice={totalPrice}
//       />
//     </div>
//   );
// };

// export default Cart;