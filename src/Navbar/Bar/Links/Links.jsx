import React from 'react'
import {motion} from "framer-motion"
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { SiTiktok } from "react-icons/si";


const variants ={
  open :{
    transition:{
      staggerChildren: 0.1,
    },
  },
  close:{
    transition:{
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants ={
  open:{
    y: 0,
    opacity: 1,
  },
  close:{
    y: 50,
    opacity:0,
  },

};

const items  = ["About Us", "Our Menu" , "Our Services", "Allergy Advice"];

const Links = () => {
  return (
    <motion.div className='links' variants={variants}>
     {items.map((item) =>(
      <motion.a href={`#${item}`} key={item} variants={itemVariants}  whileHover={{scale:1.2}} whileTap={{scale:0.93}}>{item}</motion.a>
     ))}

        <motion.div variants={itemVariants} className="social">
            <motion.span whileHover={{scale:1.2}} whileTap={{scale:0.93}}>
            <FaFacebook/>
            </motion.span>
            <motion.span whileHover={{scale:1.2}} whileTap={{scale:0.93}}>
            <RiInstagramFill/>
            </motion.span>
            <motion.span whileHover={{scale:1.2}} whileTap={{scale:0.93}}>
            <SiTiktok/>
            </motion.span>
        </motion.div>
    </motion.div>
  )
}

export default Links
