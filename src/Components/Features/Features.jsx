import React from "react";
import "./Features.css";

const Container = ({ icon, bigText, smallText }) => {
  return (
    <div className="container">
      <div>
        <img src={icon} alt="icon" />
      </div>
      <h1>{bigText}</h1>
      <p>{smallText}</p>
    </div>
  );
};

const Features = () => {
  return (
    <div className="f-wrapper">
      <Container
        icon={"icons/truck-fast.svg"}
        bigText={"Free shipping"}
        smallText={
          "Enjoy seamless shopping with our complimentary shipping service."
        }
      />
      <Container
        icon={"icons/shield-tick.svg"}
        bigText={"Secure Payment"}
        smallText={
          "Experience worry-free transactions with our secure payment options."
        }
      />
      <Container
        icon={"icons/support.svg"}
        bigText={"Love to help you"}
        smallText={
          "Our dedicated team is here to assist you every step of the way."
        }
      />
    </div>
  );
};

export default Features;
