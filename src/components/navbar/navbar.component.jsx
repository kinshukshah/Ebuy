import React from "react";
import "./navbar.styles.css";
import Logo from "../../assets/logo.png";
import CartIcon from "../cart-icon/cart-icon.component";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar container">
      <div className="logo">
        {/* <img src={Logo} alt="SHOPIFY"></img> */}
        <h3>SHOPIFY</h3>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Account</a>
          </li>
          <Link to="/checkout">Checkout </Link>
          <Link to="/login">Login</Link>
        </ul>
      </nav>
      <CartIcon />
    </div>
  );
};
export default Navbar;
