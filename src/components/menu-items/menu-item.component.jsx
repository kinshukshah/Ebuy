/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import "./menu-item.styles.css";
import ProdImage5 from "../../assets/product-5.jpg";
import { Link } from "react-router-dom";
import { AddToCartUtils } from "../Utils/functions.utils";
import { CartContext } from "../Context/Cart.Context";
const MenuItem = ({ element }) => {
  const [cartContext, setCartContext] = useContext(CartContext);
  const { id, name, imageUrl, price } = element;

  const AddToCart = (element) => {
    let cartArr = AddToCartUtils(element, cartContext.cartItems);
    setCartContext({ ...cartContext, cartItems: cartArr });
  };
  return (
    <div className="col-4">
      <img src={imageUrl} alt=""></img>
      <div className="menu-footer">
        <h4>{name}</h4>
        <div className="rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
        </div>
        <p>${price}</p>
      </div>
      <button className="addtocart" onClick={() => AddToCart(element)}>
        Add to Cart
      </button>
    </div>
  );
};
export default MenuItem;
