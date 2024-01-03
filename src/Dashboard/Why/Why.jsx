import React from 'react'
import  './Why.scss'
import Button from '../../Components/Button'

const Why = () => {
  return (
    <>
    <div className="section_wrapper">
        <div className="image_section">
            <img src="./guy.png" alt="" />
        </div>
        <div className="text_sectioin">
            <h1>Why Coustomers <span>Love Us</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor accusantium illo eligendi molestias nam repudiandae explicabo commodi esse mollitia placeat cupiditate, reprehenderit id rerum itaque eveniet tenetur, velit iste soluta.</p>
            <Button text="Explore our Story  →"/>
        </div>
    </div>
      
    </>
  )
}

export default Why
