import React from "react";
import CardTestimonial from "../testimonialCard/testimonial-card.component";
import "./testimonial.styles.css";
const testimonial_data = [
  {
    name: "Sean Parker",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nulla sequi impedit dolore perferendis animi enim ipsa dignissimos dolorem",
    imageUrl: "https://material-ui.com/static/images/avatar/1.jpg",
    ratings: 4,
  },
  {
    name: "Sean Parker",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nulla sequi impedit dolore perferendis animi enim ipsa dignissimos dolorem",
    imageUrl: "https://material-ui.com/static/images/avatar/2.jpg",
    ratings: 4,
  },
  {
    name: "Sean Parker",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nulla sequi impedit dolore perferendis animi enim ipsa dignissimos dolorem",
    imageUrl: "https://material-ui.com/static/images/avatar/3.jpg",
    ratings: 4,
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="small-container">
        <div className="testimonial-row">
          {testimonial_data.map((item, idx) => (
            <CardTestimonial {...item} key={idx}></CardTestimonial>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
