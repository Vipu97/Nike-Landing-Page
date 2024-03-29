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
          <a href='https://www.facebook.com/nike/'className="logo-container">
            <img src="icons/facebook.svg" alt="facebook-logo" />
          </a>
          <a href='https://www.instagram.com/nikesportswear/?hl=en' className="logo-container">
            <img src="icons/instagram.svg" alt="instagram-logo" />
          </a>
          <a href='https://twitter.com/nikestore' className="logo-container">
            <img src="icons/twitter.svg" alt="twitter-logo" />
          </a>
        </div>
      </div>
      <div className="second-col">
        <div className="products-section">
          <h1>Products</h1>
          <ul>
            <li>
              <a>Air Force 1</a>
            </li>
            <li>
              <a>Air Max 1</a>
            </li>
            <li>
              <a>Air Jordan 1</a>
            </li>
            <li>
              <a>Air Force 2</a>
            </li>
            <li>
              <a>Nike Waffle Racer</a>
            </li>
            <li>
              <a>Nike Cortez</a>
            </li>
          </ul>
        </div>
        <div className="help-section">
          <h1>Help</h1>
          <ul>
            <li>
              <a href="https://about.nike.com/en/company">About Us</a>
            </li>
            <li>
              <a href="https://www.nike.com/in/help/">FAQs</a>
            </li>
            <li>
              <a href="">How it Works</a>
            </li>
            <li>
              <a href="https://agreementservice.svs.nike.com/in/en_gb/rest/agreement?agreementType=privacyPolicy&uxId=com.nike.unite&country=IN&language=en&requestType=redirect">Privacy policy</a>
            </li>
            <li>
              <a href="https://www.nike.com/in/help/a/payment-options-gs">Payment policy</a>
            </li>
          </ul>
        </div>
        <div className="get-in-touch-section">
          <h1>Get in touch</h1>
          <ul>
            <li>
              <a href="mailto:customer@nike.com">customer@nike.com</a>
            </li>
            <li>
              <a>+92554862354</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright-section">
        <p>
          <img src="icons/copyright-sign.svg" alt="copyright-logo" />
          Copyright. All rights reserved.
        </p>
        <p>Terms and Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
