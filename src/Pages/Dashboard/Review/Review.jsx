import React from "react";
import "./Review.scss";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Review = () => {
  return (
    <>
      <div className="review_conatainer">
        <div className="review_text_box">
          <div className="heading_text">
            <h1>
              200+ <span>Happy Customers</span>
            </h1>
            <p className="tlrt">What our customers say about us</p>
          </div>
          <p id="itert">
            "Only the best momo you can find in the market. Different Varieties
            of momo to choose from. Will be visiting again soon"
          </p>
          <h1>Livia Dias</h1>
          <div className="slider_button">
            <span><FaArrowLeft/></span><span><FaArrowRight/></span>
          </div>
        </div>

        <div className="image_wrapper">
          <img src="./Girl.jpeg" alt="" />
        </div>
        
      </div>
    </>
  );
};

export default Review;
