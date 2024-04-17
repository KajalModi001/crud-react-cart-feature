import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
 
  const [cart, setCart] = useState([]);

  
  const addToCart = (product, userId) => {
   
    const existingItemIndex = cart.findIndex(item => item.id === product.id && item.userId === userId);
    if (existingItemIndex !== -1) {
      alert('Product is already in the cart.');
      return;
    }

    
    setCart([...cart, { ...product, userId }]);
  };

  
  const removeFromCart = (productId, userId) => {
    setCart(cart.filter(item => item.id !== productId || item.userId !== userId));
  };

  
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
