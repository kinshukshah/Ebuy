import React from "react";
import "./brands.styles.css";
import brand1 from "../../assets/logo-godrej.png";
import brand2 from "../../assets/logo-philips.png";
import brand3 from "../../assets/logo-white.png";
import brand4 from "../../assets/logo-paypal.png";
import brand5 from "../../assets/logo-oppo.png";

const Brands = () => {
  return (
    <div className="brands">
      <div className="small-container">
        <div className="brands-row">
          <div className="col-5">
            <img src={brand1} alt=""></img>
          </div>
          <div className="col-5">
            <img src={brand2} alt=""></img>
          </div>
          <div className="col-5">
            <img src={brand3} alt=""></img>
          </div>
          <div className="col-5">
            <img src={brand4} alt=""></img>
          </div>
          <div className="col-5">
            <img src={brand5} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
