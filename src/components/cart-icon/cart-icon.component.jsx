import React from "react";
import "./cart-icon.style.css";
import CartImage from "../../assets/cart.png";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { useUserState } from "../../context/StateContext";
const CartIcon = () => {
  const {
    userState: { itemsInCart: CartItems, hidden },
    userStatedispatch,
  } = useUserState();
  let cartCount = CartItems.length;
  return (
    <div
      className="cart"
      onMouseEnter={() =>
        userStatedispatch({ type: "TOGGLE_CART_DROPDOWN", payload: false })
      }
      onMouseLeave={() =>
        userStatedispatch({ type: "TOGGLE_CART_DROPDOWN", payload: true })
      }
    >
      <img src={CartImage} alt="Cart"></img>
      <span className="item-count">{cartCount}</span>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};
export default CartIcon;
