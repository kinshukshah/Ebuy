import React from "react";
import "./banner-header.styles.css";
import Image1 from "../../assets/image1.png";

const BannerHeader = () => {
  return (
    <div className="row container">
      <div className="col-2">
        <h1>Give Your Workout A New Style!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolore
          dolor, necessitatibus, obcaecati ratione deleniti laudantium repellat
          quos atque eos, animi dolorem.
        </p>
        <a href="#" className="btn-explore">
          Explore Now <i class="fas fa-chevron-right"></i>
        </a>
      </div>
      <div className="col-2">
        <img src={Image1} alt="Style"></img>
      </div>
    </div>
  );
};
export default BannerHeader;
