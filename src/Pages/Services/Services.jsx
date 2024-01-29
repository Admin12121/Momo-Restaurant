import React from 'react'
import Dashboard from './Service_deshboard/dashboard'
import "./Services.scss"
import Services_video from './Services_video/Services_video'
import Services_Exp from './Servides_Exp/Services_Exp'
import Footer_Get from './Footer/Footer_Get'
const Services = () => {
  return (
    <>
      <section>
        <Dashboard/>
      </section>
      <section>
        <Services_video/>
      </section>
      <Services_Exp/>
      <Footer_Get/>
    </>
  )
}

export default Services
