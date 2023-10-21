import React from "react";
import "./Corousel.css";
import ShoeContainer from "../ShoeContainer/ShoeContainer";

const Corousel = () => {
  return (
    <div className="c-wrapper" id="products">
      <div className="heading-part">
        <h1>
          Our <span>Popular </span>Products
        </h1>
        <p>
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className="corousel-part">
        <ShoeContainer
          link={"images/shoe4.svg"}
          rating={4.5}
          price={200.2}
          name={"Nike Air Jordan-01"}
        />
        <ShoeContainer
          link={"images/shoe5.svg"}
          rating={4.5}
          price={210.2}
          name={"Nike Air Jordan-10"}
        />
        <ShoeContainer
          link={"images/shoe6.svg"}
          rating={4.5}
          price={220.2}
          name={"Nike Air Jordan-100"}
        />
        <ShoeContainer
          link={"images/shoe7.svg"}
          rating={4.5}
          price={230.2}
          name={"Nike Air Jordan-001"}
        />
      </div>
    </div>
  );
};

export default Corousel;
