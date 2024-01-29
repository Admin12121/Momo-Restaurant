import React from "react";
import "./First.scss";

const First = () => {
  return (
    <>
      <div className="first_Wrapper">
        <div className="about_box">
          <span>
            <h1>About Us</h1>
          </span>
          <span className="About_desc">
            <p>WE PRIDE OURSELF ON</p>
            <h1>Our authentic momo recipes</h1>
            <h2>passes down through generations</h2>
          </span>
        </div>
        <div className="image_box">
          <div className="span">
            <img src="About_1.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default First;
