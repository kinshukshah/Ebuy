import React, { useState, useContext } from "react";
import "./cart-icon.style.css";
import CartImage from "../../assets/cart.png";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { useUserState } from "../../context/StateContext";
const CartIcon = () => {
  // const [cartContext, setCartContext] = useContext(CartContext);
  const {
    userState: { itemsInCart: CartItems },
  } = useUserState();
  const toggleCartDropdown = () => {
    // setCartContext({ ...cartContext, hidden: !cartContext.hidden });
  };
  let cartCount = CartItems.length;
  return (
    <div className="cart" onClick={toggleCartDropdown}>
      <img src={CartImage} alt="Cart"></img>
      <span className="item-count">{cartCount}</span>
      {/* {cartContext.hidden ? null : <CartDropdown />} */}
    </div>
  );
};
export default CartIcon;
