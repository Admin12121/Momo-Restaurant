import React from "react";
import './Home.scss'
import {motion} from 'framer-motion'

import Button from '../../../Components/Button'
const Home = () => {
  return (
    <>
      <div className="home_wrapper">
      <motion.div className="heading_text" initial={{x:-600,opacity:0}} animate={{x:0,opacity:1}} transition={{type:"spring", stiffness:100}}>
            <p>RESTAURANT</p>
            <motion.h1 >The <img src="one.png" alt="" /><span id="one">#One <br/> </span>Momo<span id="restaurant"> Restaurant</span></motion.h1>
            <motion.p id="more" >More than <span>20+ Varieties</span> of momo available for you</motion.p>
            <Button text="Explore Food Menu →"/>
        </motion.div>
        <div className="image_wrapper">
            <div className="back" >
                <motion.div className="circle" initial={{x:400,opacity:0}} animate={{x:0,opacity:1}} transition={{type:"spring", stiffness:100, duration:1.5,delay:.5}}>
                <motion.span initial={{x:400,opacity:0}} animate={{x:0,opacity:1}} transition={{type:"spring", stiffness:200 ,duration:2}}>
                <img src="./portfolio.png" alt="portfolio.png" />
                </motion.span>
                </motion.div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Home;
