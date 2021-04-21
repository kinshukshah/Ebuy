import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState({ hidden: false, cartItems: [] });
  return (
    <CartContext.Provider value={10}>{props.children}</CartContext.Provider>
  );
};
