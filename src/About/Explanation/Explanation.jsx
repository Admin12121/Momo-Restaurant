import React from "react";
import "./Explanation.scss";
import Data from "../../Data/about_data";
const Explanation = () => {
  return (
    <>
      {Data.map(({ img, title, span, desc, momo, id }) => (
        <section>
          <div key={Math.random()} className="Explanation_wrapper">
            <div className="Exp_desc_box" id={id}>
              <div className="desc_Exp">
                <h1>
                  {title} <span>{span}</span>
                </h1>
                <p>{desc}</p>
              </div>
              <div className="Exp_img">
                <img className="big_img" src={img} alt={img} />
                <span>
                  <img src={momo} alt={momo} />
                </span>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Explanation;
