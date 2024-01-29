import React,{useState} from "react";
import "./Contact.scss";

import { FaFacebook, FaTiktok, FaMapMarkerAlt } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaClock } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import Button from "../../../Components/Button";

const Contact = () => {
  const [selectedOption, setSelectedOption] = useState(''); // Initial state

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <div className="Contact_wrapper">
        <div className="COntact_heading">
          <h1>
            Get <span>In Touch</span>
          </h1>
          <p>Our Friendly team would love to hear from you</p>
        </div>
        <div className="Contact_details_form">
          <div className="Contact_details">
            <div className="content_wrapped_in">
              <div className="Address header_title">
                <h1>
                  <span>
                    <FaMapMarkerAlt />
                  </span>
                  Our Address
                </h1>
                <p>New Baneshwor, Kathmandu, Bagmati, Nepal</p>
              </div>
              <div className="Contacts header_title">
                <h1>
                  <span>
                    <IoMdCall />
                  </span>
                  Our Contacts
                </h1>
                <div className="number_wrapper">
                  <div className="Mobile">
                    <h2>Mobile</h2>
                    <h2>9805689789</h2>
                    <h2>9841275897</h2>
                  </div>
                  <div className="Landline">
                    <h2>Landline</h2>
                    <h2>01-4783972</h2>
                  </div>
                </div>
              </div>
              <div className="Service_Time header_title">
                <h1>
                  <span>
                    <FaClock />
                  </span>
                  Our Service Time
                </h1>
                <div className="content">
                  <div className="MON-FRI ddrtrt">
                    <h2>MON-FRI</h2>
                    <h2 className="mrt">10 am - 8 pm</h2>
                  </div>
                  <div className="SAT-SUN ddrtrt">
                    <h2>SAT-SUN</h2>
                    <h2 className="mrt">Closed</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="social_network header_title">
              <h1>Get in touch in social networks</h1>
              <div className="logo_wrapper">
                <FaFacebook />
                <AiFillInstagram />
                <FaTiktok />
              </div>
            </div>
          </div>
          <div className="contact_form">
            <div className="user_name">
              <span className="hdr">
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" />
              </span>
              <span className="hdr">
                <label htmlFor="lname">Last Name</label>
                <input type="text" id="fname" name="lasttname" />
              </span>
            </div>
            <span>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </span>
            <div className="col-half">
              <div className="input-group">
                <label htmlFor="question">What can we do for you</label>
                <select value={selectedOption} onChange={handleSelectChange}>
                  <option value="" disabled hidden>
                    Choose
                  </option>
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                </select>
              </div>
            </div>
            <span>
              <label htmlFor="email">Phone Number</label>
              <input type="phone" id="email" name="email" />
            </span>
            <span>
              <label htmlFor="email">Messsage</label>
              <textarea className="form-control" name="comment"></textarea>
            </span>
            <Button text="Send Message" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
