import React, { useState, useContext } from "react";
import "./cart-icon.style.css";
import CartImage from "../../assets/cart.png";
import { CartContext } from "../Context/Cart.Context";
const CartIcon = () => {
  const value = useContext(CartContext);
  return (
    <div className="cart">
      <img src={CartImage} alt="Cart"></img>
      <span className="item-count">{value}</span>
    </div>
  );
};
export default CartIcon;
