import React from 'react'
import Desc from './Contact_desclimer/Desc'
import Conatct_Form from './Contact_Form/Conatct_Form'
import "./Contact.scss"

const Contact = () => {
  return (
    <>
    <section>
        <Desc/>
    </section>
    <section>
        <Conatct_Form/>
    </section>
    </>
  )
}

export default Contact
