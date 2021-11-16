import React from "react";
import "./banner-offer.style.css";
import OfferImage from "../../assets/exclusive.png";

const BannerOffer = () => {
  return (
    <div className="offer">
      <div className="small-container">
        <div className="row">
          <div className="col-2">
            <img src={OfferImage} className="offer-img" alt=""></img>
          </div>
          <div className="col-2">
            <p>Exclusively Available on Ebuy!</p>
            <h1>Smart Band 4</h1>
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio aliquam reiciendis officiis, ullam facilis eveniet
              expedita deserunt voluptatibus praesentium laboriosam, temporibus,
              id dicta illo ad modi aliquid error architecto fuga?
            </small>
            <br></br>
            <a href="#" className="btn-explore">
              Buy Now <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BannerOffer;
