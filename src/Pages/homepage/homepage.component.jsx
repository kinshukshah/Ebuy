import React from "react";
import "./homepage.styles.css";
import Testimonial from "../../components/testimonial/testimonial.component";
import BannerHeader from "../../components/banner-header/banner-header.component";
import BannerOffer from "../../components/banner-offer/banner-offer.component";
import FeaturedProducts from "../../components/featured-products/featured.products.component";
import LatestProduct from "../../components/latest-product/latest-product.component";
import ImageSlider from "../../components/image-slider/image-slider.component";
const Homepage = () => {
  return (
    <div style={{ width: "100%" }}>
      {/* <div className="header"> */}
      <div className="container">
        <BannerHeader />
      </div>

      <ImageSlider />
      <div className="small-container">
        <LatestProduct />
        <FeaturedProducts />
      </div>
      <BannerOffer />
      <Testimonial />
    </div>
  );
};
export default Homepage;
