import React,{useRef} from 'react'
import './Card.scss'
import {motion,useInView} from "framer-motion"
const variants ={
  initial:{
    scale:0,
    opacity:0
  },
  animate:{
    scale:1,
    opacity:1,
    transition:{
      type:"spring",
      stiffness:100
    }
  }
}

function Card({img, title, reviews, newPrice, prevPrice}) {
  const ref = useRef();
  const isInView = useInView(ref, {margin:"-100px"})

  return (
    <motion.div ref={ref} className="card" variants={variants} initial="initial" animate={isInView && "animate"} whileHover={{scale:1.2}} >
    <img className='card-img' src={img} alt={title} />
    <div className="card-details">
      <h3 className="card-title">{title}</h3>
      <div className="card-reviews">
 
        <span className="total-reviews">{reviews}</span>
      </div>
      <div className="card-price">  
      <div className="price">
        <del>रु{prevPrice}</del> रु{newPrice}
        </div>
      </div>
    </div>
  </motion.div>
  )
}

export default Card
