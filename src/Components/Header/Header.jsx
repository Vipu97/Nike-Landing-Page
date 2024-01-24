import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="header-wrapper">
      <div className="logo-part">
        <img src="/images/header-logo.svg" alt="nike-logo" />
      </div>
      <ul className="links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about-us">About Us</a>
        </li>
        <li>
          <a href="#products">Products</a>
        </li>
        <li>
          <a href="#contact-us">Contact Us</a>
        </li>
      </ul>
      <div className="dropdown-menu" onClick={() => setOpenMenu(!openMenu)}>
        <img src="/icons/hamburger.svg" alt="hamburger" />
        {openMenu && (
          <ul className="dropdown">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#contact-us">Contact Us</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
