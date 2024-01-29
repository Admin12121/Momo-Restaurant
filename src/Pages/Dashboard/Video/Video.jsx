import React from "react";
import "./Video.scss";
import { FaCirclePlay } from "react-icons/fa6";

const Video = () => {
  return (
    <>
      <div className="video_wrapper">
        <div className="video_heading">
          <h1>
            <span>We Offer People</span> The Service They want
          </h1>
        </div>
        <div className="main_video_Section">
          <div className="Video_title">
            <div className="tt">
              <h1>Process behind the making</h1>
              <p>See how only chefs cooks only the best momos</p>
            </div>
            <button>
              <span>
              <FaCirclePlay />
              </span>
              Watch the Video
            </button>
          </div>
          <img src="./Video.jpeg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Video;
