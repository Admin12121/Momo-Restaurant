import React from "react";
import { FaCirclePlay } from "react-icons/fa6";

import "./Second.scss";

const Second = () => {
  return (
    <>
      <div className="Second_wrapper">
        <img src="./About_2.jpg" alt="" />
        <span className="overlay">
          <span>
            <h1>Process behind the making</h1>
            <p>
              See how we make momos that you like from only the best ingredients
            </p>
          </span>
          <span>
            <button>
              <span>
                <FaCirclePlay />
              </span>
              Watch the Video
            </button>
          </span>
        </span>
      </div>
    </>
  );
};

export default Second;
