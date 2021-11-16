import React from "react";
import "./testimonial-card.styles.css";

const CardTestimonial = ({ name, imageUrl, rating, review }) => {
  return (
    <div className="card-testimonial">
      <i className="fa fa-quote-left"></i>
      <p>{review}</p>
      <div className="rating">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="far fa-star"></i>
      </div>
      <img src={imageUrl} alt=""></img>
      <h3>{name}</h3>
    </div>
  );
};

export default CardTestimonial;
