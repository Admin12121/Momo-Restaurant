import React from 'react'
import {motion} from "framer-motion"

const style ={
  cursor: "pointer"
}

const Button = ({text}) => {
  return (
    <>
    <motion.button style={style} initial={{scale:0}} animate={{scale:1}} transition={{type:"spring", stiffness:100}} whileTap={{scale:0.9}} whileHover={{scale:1.1}}>{text}</motion.button>
    </>
  )
}

export default Button
