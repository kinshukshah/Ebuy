import React from "react";
import "./navbar.styles.css";
import CartIcon from "../cart-icon/cart-icon.component";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar container">
      <div className="logo">
        <Link to="/">
          <h3>Ebuy</h3>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout </Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
          <li>
            <Link to="/shop">Categories</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <CartIcon />
    </div>
  );
};
export default Navbar;
