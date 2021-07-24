import React, { useContext } from "react";
import "./cart-dropdown.styles.css";
import { CartContext } from "../Context/Cart.Context";
import CartItem from "../cart-item/cart-item.component";
const CartDropdown = () => {
  const [cartContext, setCartContext] = useContext(CartContext);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartContext.cartItems.map((item) => (
          <CartItem
            image={item.imageUrl}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
          />
        ))}
      </div>
      <button className="checkout-btn">Go To Checkout</button>
    </div>
  );
};

export default CartDropdown;
