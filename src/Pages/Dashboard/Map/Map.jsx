import React from "react";
import "./Map.scss";
import { FaMapMarkerAlt } from "react-icons/fa";

const Map = () => {
  const text = "Get Direction  > ";
  return (
    <>
      <div className="map_wrapper">
        <img src="./map.png" alt="" />
        <div className="map_mapping">
          <div className="map_pointer">
            <h1>New Baneshwor, Kathmandu, Bagmati, Nepal</h1>
            <span>{text}</span>
          </div>
          <span id="pointer">
            <FaMapMarkerAlt />
          </span>
        </div>
      </div>
    </>
  );
};

export default Map;
