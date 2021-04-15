import React from "react";
import "./footer.styles.css";
import logo from "../../assets/logo-white.png";
import applogo1 from "../../assets/app-store.png";
import applogo2 from "../../assets/play-store.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-row">
          <div className="footer-col-1">
            <h3>Download Our App</h3>
            <p>Download App for Android and ios mobile phone.</p>
            <div className="app-logo">
              <img src={applogo2} alt=""></img>
              <img src={applogo1} alt=""></img>
            </div>
          </div>
          <div className="footer-col-2">
            <img src={logo} alt=""></img>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,
              fuga! Tempore ratione facilis quam!
            </p>
          </div>
          <div className="footer-col-3">
            <h3>Useful Links</h3>
            <ul>
              <li>Coupons</li>
              <li>Blog Post</li>
              <li>Return Policy</li>
              <li>Join Affilate</li>
            </ul>
          </div>
          <div className="footer-col-4">
            <h3>Follow us</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="copyright">Copyright 2021 - Made By Kinshuk Shah</p>
      </div>
    </div>
  );
};

export default Footer;
