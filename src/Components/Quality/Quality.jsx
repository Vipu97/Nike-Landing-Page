import React from "react";
import "./Quality.css";

const Quality = () => {
  return (
    <div className="q-wrapper" id="about-us">
      <div className="text-part">
        <h1>
          We Provide You <span>Super Quality </span>Shoes
        </h1>
        <p>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p>Our dedication to detail and excellence ensures your satisfaction</p>
        <a href="https://www.nike.com/in/w/mens-shoes-nik1zy7ok">
          <button>
            <span>Shop now</span>
            <img src="icons/arrow-right.svg" alt="arrow" />
          </button>
        </a>
      </div>
      <div className="image-part">
        <img src="images/shoe8.svg" alt="shoe-photo" />
      </div>
    </div>
  );
};

export default Quality;
