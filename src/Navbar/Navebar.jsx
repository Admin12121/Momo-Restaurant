import React from "react";
import "./Nav.scss";
import Links from "./Links/Links";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { SiTiktok } from "react-icons/si";
import Button from "../Components/Button";
import Bar from "./Bar/Bar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navebar = () => {
  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
        className="Navbar_wrapper"
      >
        <motion.div
          className="logo"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, duration: 1 }}
        >
          <Link to="/" className="logo">
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
          </Link>
        </motion.div>
        <Links />
        <Bar />
        <div className="social_logo">
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.3, stiffness: 100 }}
          >
            <FaFacebook />
          </motion.span>
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.3, stiffness: 100 }}
          >
            <RiInstagramFill />
          </motion.span>
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.3, stiffness: 100 }}
          >
            <SiTiktok />
          </motion.span>
          <Button text="Contact Us" />
        </div>
      </motion.div>
    </>
  );
};

export default Navebar;
