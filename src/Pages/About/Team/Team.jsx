import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import './Team.scss'
const data = [
  {
    img: "./team_1.jpg",
    title: "Head Chef",
  },
  {
    img: "./team_2.jpg",
    title: "Assistant Chef",
  },
  {
    img: "./team_3.jpg",
    title: "Assistant Chef",
  },
];

const Team = () => {
  return (
    <>
      <div className="Team_wrapper">
        <div className="tem_text">
          <h1>
            Meet The <span>Team </span>
          </h1>
          <p>Our talented team members who delivers only the best results</p>
        </div>
        <div className="Team_members">
          {data.map(({ img, title }) => (
            <span>
              <img src={img} alt="" />
              <span className="Absol">
                <h1>{title}</h1>
              </span>
            </span>
          ))}
        </div>
        <div className="switch_buttons">
          <div className="slider_button">
            <span>
              <FaArrowLeft />
            </span>
            <span>
              <FaArrowRight />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
