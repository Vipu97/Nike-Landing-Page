import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="first-col">
        <div className="footer-logo">
          <img src="images/footer-logo.svg" alt="footer-logo" />
        </div>
        <p>
          Get shoes ready for the new term at your nearest Nike store. Find Your
          perfect Size In Store. Get Rewards
        </p>
        <div className="social-media">
          <div className="logo-container">
            <img src="icons/facebook.svg" alt="facebook-logo" />
          </div>
          <div className="logo-container">
            <img src="icons/instagram.svg" alt="instagram-logo" />
          </div>
          <div className="logo-container">
            <img src="icons/twitter.svg" alt="twitter-logo" />
          </div>
        </div>
      </div>
      <div className="second-col">
        <div className="products-section">
          <h1>Products</h1>
          <ul>
            <li>
              <a href="">Air Force 1</a>
            </li>
            <li>
              <a href="">Air Max 1</a>
            </li>
            <li>
              <a href="">Air Jordan 1</a>
            </li>
            <li>
              <a href="">Air Force 2</a>
            </li>
            <li>
              <a href="">Nike Waffle Racer</a>
            </li>
            <li>
              <a href="">Nike Cortez</a>
            </li>
          </ul>
        </div>
        <div className="help-section">
          <h1>Help</h1>
          <ul>
            <li>
              <a href="">About uS</a>
            </li>
            <li>
              <a href="">FAQs</a>
            </li>
            <li>
              <a href="">How it Works</a>
            </li>
            <li>
              <a href="">Privacy policy</a>
            </li>
            <li>
              <a href="">Payment policy</a>
            </li>
          </ul>
        </div>
        <div className="get-in-touch-section">
          <h1>Get in touch</h1>
          <ul>
            <li>
              <a href="">customer@nike.com</a>
            </li>
            <li>
              <a href="">+92554862354</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright-section">
        <p>
          <img src="icons/copyright-sign.svg" alt="" />
          Copyright. All rights reserved.
        </p>
        <p>Terms and Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
