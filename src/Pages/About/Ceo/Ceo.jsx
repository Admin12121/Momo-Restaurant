import React from "react";
import "./Ceo.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Ceo = () => {
  return (
    <>
      <div className="Ceo_wrapper">
        <div className="blur_text_wrapper">
          <img src="Blur.jpg" alt="" />
          <span className="drop_back_text">
            <span className="upper_span">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M0 30.8514C0 36.9228 2.37838 40.7817 7.13514 42.4282C8.43243 42.9427 9.83784 43.2 11.3514 43.2C15.6757 43.2 18.8108 41.2448 20.7568 37.3344C21.5135 35.8938 21.8919 34.3502 21.8919 32.7037C21.8919 28.2788 19.7838 25.1402 15.5676 23.288C14.7027 22.9793 13.8919 22.722 13.1351 22.5162C10.5405 21.7958 9.18919 20.561 9.08108 18.8116C9.18919 15.7245 11.1892 12.2257 15.0811 8.31535L11.8378 6C5.35135 12.483 1.51351 19.5834 0.324324 27.3012C0.108108 28.5361 0 29.7195 0 30.8514ZM26.1081 30.8514C26.1081 36.9228 28.4865 40.7817 33.2432 42.4282C34.5405 42.9427 35.9459 43.2 37.4595 43.2C41.7838 43.2 44.9189 41.2448 46.8649 37.3344C47.6216 35.8938 48 34.3502 48 32.7037C48 28.2788 45.8919 25.1402 41.6757 23.288C40.8108 22.9793 40 22.722 39.2432 22.5162C36.6487 21.7958 35.2973 20.561 35.1892 18.8116C35.2973 15.7245 37.2973 12.2257 41.1892 8.31535L37.9459 6C31.4595 12.483 27.6216 19.5834 26.4324 27.3012C26.2162 28.5361 26.1081 29.7195 26.1081 30.8514Z"
                  fill="white"
                />
              </svg>
              <p>
                Momo is not just sustenance, it's about bringing people together
                and creating memories.At our resturant, we strive to create a
                warm and inviting atmosphere where our guests can enjoy
                delicious momo, great company, and unforgettable experiences
              </p>
            </span>
            <span>
              <h1>Marcus Schleifer</h1>
              <h2>CEO</h2>
            </span>
            <div className="slider">
            <div className="slider_button">
            <span><FaArrowLeft/></span><span><FaArrowRight/></span>
          </div>
            </div>
          </span>
        </div>
        <div className="ceo_image">
          <img src="./Seo.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Ceo;
