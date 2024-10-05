import React, { createContext, useState, useContext, useEffect } from 'react';
import Swal from 'sweetalert2';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartItems = localStorage.getItem('cart') && JSON.parse(localStorage.getItem('cart'));

    if (cartItems && cartItems.length) {
      setCart(cartItems);
    }
  }, [])

  // Function to add an item to the cart
  const addToCart = (item) => {
    // Check if the item is already in the cart
    const isInCart = cart.some(i => i.id === item.id);
  
    if (isInCart) {
      // Show an alert if the item is already in the cart
      Swal.fire({
        icon: 'info',
        title: 'Course already in cart',
        text: 'This course is already in your cart.',
        confirmButtonText: 'OK',
      });
      return;
    }
  
    // Add the item to the cart and show a success message
    setCart((prevCart) => {
      const items = [...prevCart, item];
      localStorage.setItem('cart', JSON.stringify(items));
      
      Swal.fire({
        icon: 'success',
        title: 'Course added to cart',
        text: 'The course has been added to your cart.',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
  
      return items;
    });
  };
  

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCart((prevCart) => {
      const items = prevCart.filter(item => item.id !== itemId);
      localStorage.setItem('cart', JSON.stringify(items));
      return items;
    });
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]);
    localStorage.clear('cart');
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};