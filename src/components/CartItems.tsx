"use client"
import React, { useState, useEffect } from 'react';
import CartSideMenu from './CartSideMenu'; 

const Cart = () => {
  const [cart, setCart] = useState<{ id: string; name: string; price: string; image: string }[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(savedCart);
  }, []);

  const addToCart = (product: { id: string; name: string; price: string; image: string }) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart); 
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setIsMenuOpen(true); 
  };

  // Delete item from cart
  const deleteFromCart = (product: { id: string; name: string; price: string; image: string }) => {
    const updatedCart = cart.filter(item => item.id !== product.id); 
    setCart(updatedCart); 
    localStorage.setItem('cart', JSON.stringify(updatedCart)); 
  };

  return (
    <div>
      <button onClick={() => addToCart({ id: '1', name: 'Perfume', price: '50', image: 'perfume.jpg' })}>
        Add Perfume to Cart
      </button>
      <CartSideMenu
        products={cart}
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onAddToCart={addToCart} 
        onDelete={deleteFromCart}
      />
    </div>
  );
};

export default Cart;