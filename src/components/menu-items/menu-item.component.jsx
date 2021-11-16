/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import "./menu-item.styles.css";
import ProdImage5 from "../../assets/product-5.jpg";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  // const {
  //   user: {
  //     user: { _id: userId },
  //   },
  // } = useAuth();
  const {
    user: { user, isLogin },
  } = useAuth();
  const { userStatedispatch } = useUserState();
  const [loading, stopLoading, startLoading] = useLoading();
  const AddToCart = async () => {
    console.log({ isLogin });
    if (isLogin) {
      startLoading();
      await updateCart(userStatedispatch, element._id, user._id, "increase");
      stopLoading();
    } else {
      navigate("/login");
    }
  };
  const handleAddToWishlist = async () => {
    if (isLogin) {
      startLoading();
      await AddToWishlist(userStatedispatch, element._id);
      stopLoading();
    } else {
      navigate("/login", { state: { from: "/products" } });
    }
  };
  const handleRemoveFromWishlist = async () => {
    if (isLogin) {
      startLoading();
      await RemoveFromWishlist(userStatedispatch, element._id);
      stopLoading();
    } else {
      navigate("/login");
    }
  };
  const MoveToBag = async () => {
    if (isLogin) {
      startLoading();
      await updateCart(userStatedispatch, element._id, user._id, "increase");
      await RemoveFromWishlist(userStatedispatch, element._id);
      stopLoading();
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="col-4 menu-item">
      <div className="img-card">
        <img src={imageUrl} alt=""></img>
      </div>
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
            <i className="fas fa-heart"></i>
          </button>
        ) : (
          <button
            disabled={loading ? true : false}
            className="wishlist-icon"
            onClick={handleAddToWishlist}
          >
            <i className="far fa-heart"></i>
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
