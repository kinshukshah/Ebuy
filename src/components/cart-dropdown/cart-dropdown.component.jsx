import React from "react";
import "./cart-dropdown.styles.css";
import CartItem from "../cart-item/cart-item.component";
import { useUserState } from "../../context/StateContext";
import { CustomButton } from "../button-component/button-component";
import { useNavigate } from "react-router";
const CartDropdown = () => {
  const {
    userState: { itemsInCart: CartItems },
  } = useUserState();
  const navigate = useNavigate();
  return (
    <div className="cart-dropdown">
      <div className="cart-dropdown-order-summary">
        <div className="order-summary">Order Summary</div>
        <div className="total-items">{CartItems.length}</div>
      </div>
      <div className="cart-items">
        {CartItems.length > 0 ? (
          CartItems.slice(0, 2).map((item) => (
            <CartItem
              key={item._id}
              product={item.productId}
              quantity={item.quantity}
            />
          ))
        ) : (
          <span className="empty-message">Your Cart is Empty</span>
        )}
        {CartItems.length > 2 && (
          <span className="more-items" onClick={() => console.log("Clicked")}>
            +{CartItems.length - 2} more items
          </span>
        )}
      </div>
      <div className="checkout-btn">
        <CustomButton
          label="CHECKOUT"
          onClick={() => navigate("/checkout/cart")}
        />
      </div>
    </div>
  );
};

export default CartDropdown;
