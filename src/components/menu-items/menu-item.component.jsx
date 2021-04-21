import React from "react";
import "./menu-item.styles.css";
import ProdImage5 from "../../assets/product-5.jpg";
import { Link } from "react-router-dom";
const MenuItem = ({ element }) => {
  const { id, name, imageUrl, price } = element;
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
      <button className="addtocart" onClick={() => console.log(element)}>
        Add to Cart
      </button>
    </div>
  );
};
export default MenuItem;
