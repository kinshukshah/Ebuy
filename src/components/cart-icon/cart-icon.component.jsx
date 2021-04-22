import React, { useState, useContext } from "react";
import "./cart-icon.style.css";
import CartImage from "../../assets/cart.png";
import { CartContext } from "../Context/Cart.Context";
import { GetTotalItemUtils } from "../Utils/functions.utils";
const CartIcon = () => {
  const [cartContext, setCartContext] = useContext(CartContext);
  return (
    <div className="cart">
      <img src={CartImage} alt="Cart"></img>
      <span className="item-count">
        {GetTotalItemUtils(cartContext.cartItems)}
      </span>
    </div>
  );
};
export default CartIcon;
