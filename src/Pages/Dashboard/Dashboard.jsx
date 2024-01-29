import React from "react";
import Home from "./HOme/Home";
import Why from "./Why/Why";
import Recipes from "./Recipes/Recipes";
import Video from "./Video/Video";
import Services from "./Services/Services";
import Review from "./Review/Review";
import Contact from "./Contact/Contact";
import Map from "./Map/Map";

const Dashboard = () => {
  return (
    <>
      <section>
        <Home />
      </section>
      <section>
        <Why />
      </section>
      <section>
        <Recipes />
      </section>
      <section>
        <Video />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section>
        <Review />
      </section>
      <section>
        <Contact />
      </section>
      <section id="map">
        <Map />
      </section>
    </>
  );
};

export default Dashboard;
