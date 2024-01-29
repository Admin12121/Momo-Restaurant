import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";

const Desc = () => {
  return (
    <>
      <div className="Conatct_Desc_wrapper">
        <div className="text_area">
          <h1>Our Contact</h1>
          <p>GET IN TOUCH</p>
          <h1 className="childspan">
            <span> Our Friendly Team </span> would love to hear from you
          </h1>
        </div>
        <div className="box_area">
          <div className="details_box">
            <span>
              <FaMapMarkerAlt />
              <span>Location</span>
            </span>
            <div className="details_box_footer">
              <p>New Baneshwor - 41201</p>
              <p>Kathmandu, Bagmati, Nepal</p>
            </div>
          </div>
          <div className="details_box">
            <span>
              <IoMdCall />
              <span>Phone</span>
            </span>
            <div className="details_box_footer">
              <span>
                <p>Mobile</p>
                <span>
                  <p>{`(+977) 98XXXXXXXX`}</p>
                  <p>{`(+977) 98XXXXXXXX`}</p>
                </span>
              </span>
              <span>
                <p>Tel: </p>
                <p>01-XXXXXXX</p>
              </span>
            </div>
          </div>
          <div className="details_box">
            <span>
              <FaClock />
              <span>SERVICE TIME</span>
            </span>
            <div className="details_box_footer">
              <span>
                <p>MON-FRI</p>
                <p>8am - 8pm</p>
              </span>
              <span>
                <p>SAT-SUN</p>
                <p>Closed</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Desc;
