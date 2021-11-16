import React, { useState } from "react";
import "./navbar.styles.css";
import CartIcon from "../cart-icon/cart-icon.component";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleNavToggle = (e) => {
    e.stopPropagation();
    setShowMenu((state) => !state);
  };
  return (
    <div className="navbar">
      <div className="logo" style={{ display: "flex" }}>
        <div
          className="menu-icon"
          style={{ marginRight: "1rem" }}
          onClick={() => setShowMenu((state) => !state)}
        >
          <i className="fas fa-bars"></i>
        </div>
        <Link to="/">
          <h3>Ebuy</h3>
        </Link>
      </div>
      <nav
        className={
          showMenu
            ? "middle-action-items active-middle-menu"
            : "middle-action-items"
        }
      >
        <ul onClick={handleNavToggle}>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/checkout/cart">Checkout </Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
          <li>
            <Link to="/shop">Categories</Link>
          </li>
          <li>
            <Link to="/Wishlist">Wishlist</Link>
          </li>
        </ul>
      </nav>

      <CartIcon />
    </div>
  );
};
export default Navbar;
