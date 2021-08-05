/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import "./menu-item.styles.css";
import ProdImage5 from "../../assets/product-5.jpg";
import { Link } from "react-router-dom";
import { AddToCartUtils } from "../Utils/functions.utils";
import { CartContext } from "../Context/Cart.Context";
import { useAuth } from "../../context/AuthContext";
import { useUserState } from "../../context/StateContext";
import {
  AddToWishlist,
  RemoveFromWishlist,
  updateCart,
} from "../../utils/Apicalls";
import { useLoading } from "../../hooks/useLoading";
import { CustomButton } from "../button-component/button-component";
const MenuItem = ({ element, wishlistExists, wishlistPage }) => {
  const { _id, name, imageUrl, price, brandName } = element;
  const {
    user: {
      user: { _id: userId },
    },
  } = useAuth();
  const { userStatedispatch } = useUserState();
  const [loading, stopLoading, startLoading] = useLoading();
  const AddToCart = async () => {
    startLoading();
    await updateCart(userStatedispatch, element._id, userId, "increase");
    stopLoading();
  };
  const handleAddToWishlist = async () => {
    startLoading();
    await AddToWishlist(userStatedispatch, element._id);
    stopLoading();
  };
  const handleRemoveFromWishlist = async () => {
    startLoading();
    await RemoveFromWishlist(userStatedispatch, element._id);
    stopLoading();
  };
  const MoveToBag = async () => {
    startLoading();
    await updateCart(userStatedispatch, element._id, userId, "increase");
    await RemoveFromWishlist(userStatedispatch, element._id);
    stopLoading();
  };
  return (
    <div className="col-4 menu-item">
      <img src={imageUrl} alt=""></img>
      <div className="menu-footer">
        <h3 className="product-brand">{brandName}</h3>
        <h4 className="product-product">{name}</h4>
        <span className="product-price">${price}</span>
      </div>
      <div className="addtocart">
        {wishlistPage ? (
          <CustomButton
            label={loading ? "MOVING..." : "MOVE TO BAG"}
            disabled={loading ? true : false}
            onClick={() => MoveToBag()}
          />
        ) : (
          <CustomButton
            label={loading ? "ADDING..." : "ADD TO CART"}
            disabled={loading ? true : false}
            onClick={() => AddToCart()}
          />
        )}
      </div>
      {!wishlistPage ? (
        wishlistExists ? (
          <button className="wishlist-icon">
            <i class="fas fa-heart"></i>
          </button>
        ) : (
          <button
            disabled={loading ? true : false}
            className="wishlist-icon"
            onClick={handleAddToWishlist}
          >
            <i class="far fa-heart"></i>
          </button>
        )
      ) : (
        <button
          disabled={loading ? true : false}
          className="wishlist-icon remove-btn"
          onClick={handleRemoveFromWishlist}
        >
          <i class="fas fa-times"></i>
        </button>
      )}
    </div>
  );
};
export default MenuItem;
