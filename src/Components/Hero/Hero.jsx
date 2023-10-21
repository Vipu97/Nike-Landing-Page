import React, { useState } from "react";
import "./Hero.css";
import background from "../../../public/images/collection-background.svg";
import smallBg from "../../../public/images/thumbnail-background.svg";

const Hero = () => {
  const [shoe, setShoe] = useState("1");
  const handleOnClick = (item) => {
    setShoe(item);
  };
  return (
    <div className="hero-wrapper">
      {/* left part */}
      <div className="left-part">
        <span>Our Summer Collections</span>
        <h1 id="first-line">The New Arrival</h1>
        <h1>
          <span>Nike</span> Shoes
        </h1>
        <p>
          Discover stylish Nike arrivals, quality
          <br />
          comfort, and innovation for your active life.
        </p>
        <button>
          <span>Shop now</span>
          <img src="icons/arrow-right.svg" alt="arrow" />
        </button>
        <div className="stats">
          <div>
            <h1>1k+</h1>
            <span>Brands</span>
          </div>
          <div>
            <h1>500+</h1>
            <span>Shops</span>
          </div>
          <div>
            <h1>250k+</h1>
            <span>Customers</span>
          </div>
        </div>
      </div>

      {/* right-part */}
      <div
        className="right-part"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="big-shoe">
          <img src={`images/big-shoe${shoe}.png`} alt="big-shoe" />
        </div>
        <div className="small-images-container">
          <div
            className={`small-images ${shoe == "1" && "orangeBorder"}`}
            style={{ backgroundImage: `url(${smallBg})` }}
            onClick={() => handleOnClick("1")}
          >
            <img src="images/big-shoe1.png" alt="small shoe" />
          </div>
          <div
            className={`small-images ${shoe == "2" && "orangeBorder"}`}
            style={{ backgroundImage: `url(${smallBg})` }}
            onClick={() => handleOnClick("2")}
          >
            <img src="images/big-shoe2.png" alt="small shoe" />
          </div>
          <div
            className={`small-images ${shoe == "3" && "orangeBorder"}`}
            style={{ backgroundImage: `url(${smallBg})` }}
            onClick={() => handleOnClick("3")}
          >
            <img src="images/big-shoe3.png" alt="small shoe" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
