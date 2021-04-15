import React from "react";
import "./image-slider.style.css";

import CatImage1 from "../../assets/category-1.jpg";
import CatImage2 from "../../assets/category-2.jpg";
import CatImage3 from "../../assets/category-3.jpg";

const ImageSlider = () => {
  return (
    <div className="categories">
      <div className="small-container">
        <div className="row">
          <div className="col-3">
            <img src={CatImage1} alt=""></img>
          </div>
          <div className="col-3">
            <img src={CatImage2} alt=""></img>
          </div>
          <div className="col-3">
            <img src={CatImage3} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
