import React,{useState, useEffect} from "react";
import "./Footer.scss";
import { motion } from "framer-motion";

import { FaLinkedin, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";

const items = ["About Us", "Our Menu", "Our Services", "Contact Us"];
const links = ["Terms & Conditions", "Privacy Policy", "Support"];

const Footer = () => {


  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    // Get the current year
    const currentYear = new Date().getFullYear();

    // Set the current year in the state variable
    setCurrentYear(currentYear);
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount


  return (
    <>
      <section className="footer_section">
        <div className="footer_wrapper">
          <div className="footer_items">
            <div className="footer_desc">
              <motion.div
                className="logo"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, duration: 1 }}
              >
                <img src="logo.png" alt="" />
                <motion.span
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    delay: 0.4,
                    duration: 1,
                  }}
                >
                  momos
                </motion.span>
              </motion.div>
              <span className="desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non,
                dolores optio tempore voluptatibus aliquid dolorum ipsam. Neque,
                nobis, aspernatur ratione corporis exercitationem possimus vero,
              </span>
            </div>
            <div className="footer_links">
              <div className="footer_link_header">
                <div className="link_link">
                  <h1>momos</h1>
                  <span>
                    {items.map((item) => (
                      <motion.a
                        href={`#${item}`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 100 }}
                        key={item}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.93 }}
                      >
                        {item}
                      </motion.a>
                    ))}
                  </span>
                </div>
                <div className="link_link">
                  <h1>Legals</h1>
                  <span>
                    {links.map((item) => (
                      <motion.a
                        href={`#${item}`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 100 }}
                        key={item}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.93 }}
                      >
                        {item}
                      </motion.a>
                    ))}
                  </span>
                </div>
              </div>
            </div>
            <div className="footer_social_links">
              <h1>Follow Us</h1>
              <div className="social_link">
                <FaFacebook />
                <FaLinkedin />
                <FaSquareXTwitter />
              </div>
              <div className="social_link">
                <FaYoutube />
                <RiInstagramFill />
                <FaTiktok />
              </div>
            </div>
          </div>
          <span>
            <p>Copyright ©️{currentYear} Everest Momo Pvt Ltd. All Rights Reserved</p>
          </span>
        </div>
      </section>
    </>
  );
};

export default Footer;
