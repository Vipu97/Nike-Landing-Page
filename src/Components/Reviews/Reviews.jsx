import React from "react";
import "./Reviews.css";

const Reviews = () => {
  return (
    <div className="r-wrapper">
      <div className="heading">
        <h1>
          What Our <span>Customers </span>Say?
        </h1>
        <p>
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>
      <div className="review-section">
        <div className="review">
          <img src="images/customer1.jpeg" alt="customer1-photo" />
          <p>
            The attention to detail and the quality of the product exceeded my
            expectations. Highly recommended!
          </p>
          <p>
            <img src="icons/star.svg" alt="star-icon" className="icon" />
            <span>(4.5)</span>
          </p>
          <h1>Morich Brown</h1>
        </div>
        <div className="review">
          <img src="images/customer2.svg" alt="customer2-photo" />
          <p>
            The product not only met but exceeded my expectations. I'll
            definitely be a returning customer!
          </p>
          <p>
            <img src="icons/star.svg" alt="star-icon" className="icon" />
            <span>(4.5)</span>
          </p>
          <h1>Lota Mangeskar</h1>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
