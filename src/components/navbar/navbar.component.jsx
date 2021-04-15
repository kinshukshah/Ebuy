import React from "react";
import "./navbar.styles.css";
import Logo from "../../assets/logo.png";
import CartImage from "../../assets/cart.png";
const Navbar = () => {
  return (
    <div className="navbar container">
      <div className="logo">
        <img src={Logo} alt="SHOPIFY"></img>
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
        </ul>
      </nav>
      <div className="cart">
        <img src={CartImage} alt="Cart"></img>
      </div>
    </div>
  );
};
export default Navbar;
