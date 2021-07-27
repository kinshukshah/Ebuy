/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import "./menu-item.styles.css";
import ProdImage5 from "../../assets/product-5.jpg";
import { Link } from "react-router-dom";
import { AddToCartUtils } from "../Utils/functions.utils";
import { CartContext } from "../Context/Cart.Context";
import { useAuth } from "../../context/AuthContext";
import { useUserState } from "../../context/StateContext";
import { updateCart } from "../../utils/Apicalls";
import { useLoading } from "../../hooks/useLoading";
const MenuItem = ({ element }) => {
  const { _id, name, imageUrl, price } = element;
  const {
    user: {
      user: { _id: userId },
    },
  } = useAuth();
  const { userState, userStatedispatch } = useUserState();
  const [loading, stopLoading, startLoading] = useLoading();
  const AddToCart = async () => {
    startLoading();
    await updateCart(userStatedispatch, element._id, userId, "increase");
    stopLoading();
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
      <button
        className="addtocart"
        disabled={loading ? true : false}
        onClick={() => AddToCart()}
      >
        {loading ? "Adding..." : "Add to cart"}
      </button>
    </div>
  );
};
export default MenuItem;
