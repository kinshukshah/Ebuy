import React from "react";
import "./menu-item.styles.css";
import ProdImage5 from "../../assets/product-5.jpg";
const MenuItem = ({ id, name, imageUrl, price }) => {
  return (
    <div className="col-4">
      <img src={imageUrl} alt=""></img>
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
  );
};
export default MenuItem;
