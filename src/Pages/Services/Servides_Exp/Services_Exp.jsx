import React from 'react'
import './Serv_exp.scss'
import { GiPartyPopper } from "react-icons/gi";
import { LuChefHat } from "react-icons/lu";
const Services_Exp = () => {
  return (
    <>
        <section>
          <div className="Explanation_wrapper">
            <div className="Exp_desc_box" id="odd">
              <div className="desc_Exp Ser_exp_desc_Exp">
                <h1>
                <span><GiPartyPopper/> </span>
                  Private Party
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum praesentium, cupiditate nesciunt ratione ex minima</p>
              <span className='qr_serv'>
                <span >
                <h1>Scan the QR code</h1>
                <p>you can also check about our services</p>
                </span>
                <span>
                    <img src="QRCode.png" alt="" />
                </span>
              </span>
              </div>

              <div className="Exp_img ser_img">
                <img className="big_img" src='./Image.png' />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="Explanation_wrapper">
            <div className="Exp_desc_box" id="even">
              <div className="desc_Exp Ser_exp_desc_Exp">
                <h1>
                <span><LuChefHat/> </span>
                  Categring
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum praesentium, cupiditate nesciunt ratione ex minima</p>
              <span className='qr_serv'>
                <span>
                <h1>Scan the QR code</h1>
                <p>you can also check about our services</p>
                </span>
                <span>
                    <img src="QRCode.png" alt="" />
                </span>
              </span>
              </div>

              <div className="Exp_img ser_img">
                <img className="big_img" src='./Image.png' />
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Services_Exp
