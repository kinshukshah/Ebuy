import React from "react";
import "./cart-icon.style.css";
import CartImage from "../../assets/cart.png";
const CartIcon = () => {
  return (
    <div className="cart">
      <img src={CartImage} alt="Cart"></img>
      <span className="item-count">2</span>
    </div>
  );
};
export default CartIcon;
