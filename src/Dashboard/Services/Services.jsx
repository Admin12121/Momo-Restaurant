import React from "react";
import "./Services.scss";
import Button from "../../Components/Button";

const data = [
  {
    img: "Group_6.png",
    title: "Quality Food",
    desc: "Only the best food with top quality products and ingredients",
  },
  {
    img: "Group_5.png",
    title: "Privte Party",
    desc: "Get the best food for all your private parties and gatherings",
  },
  {
    img: "Group_4.png",
    title: "Categring",
    desc: "Get the best food for any occasions and gatherings",
  },
];

const Services = () => {
  return (
    <>
<div className="Service_box">
<div className="Services_wrapper">
        {data.map(({ img, title, desc }) => (
          <div key={Math.random()} className="Service_card">
            <img src={img} alt={img} />
            <h1>{title}</h1>
            <p>{desc}</p>
          </div>
        ))}
      </div>
        <Button text="Explore Our Services →"/>
</div>
    </>
  );
};

export default Services;
