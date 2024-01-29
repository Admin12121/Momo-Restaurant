import React from "react";
import { FaCirclePlay } from "react-icons/fa6";

const Services_video = () => {
  return (
    <>
      <div className="Second_wrapper">
        <img src="./Services.jpeg" alt="" />
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

export default Services_video;
