import React, { useState, useContext } from "react";
import "./cart-icon.style.css";
import CartImage from "../../assets/cart.png";
import { CartContext } from "../Context/Cart.Context";
import { GetTotalItemUtils } from "../Utils/functions.utils";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
const CartIcon = () => {
  const [cartContext, setCartContext] = useContext(CartContext);
  const toggleCartDropdown = () => {
    setCartContext({ ...cartContext, hidden: !cartContext.hidden });
  };
  return (
    <div className="cart" onClick={toggleCartDropdown}>
      <img src={CartImage} alt="Cart"></img>
      <span className="item-count">
        {GetTotalItemUtils(cartContext.cartItems)}
      </span>
      {cartContext.hidden ? null : <CartDropdown />}
    </div>
  );
};
export default CartIcon;
