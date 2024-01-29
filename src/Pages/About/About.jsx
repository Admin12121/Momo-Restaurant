import React from 'react'
import First from './First/First'
import Second from './Second/Second'
import Explanation from './Explanation/Explanation'
import Ceo from './Ceo/Ceo'
import Team from './Team/Team'

const About = () => {
  return (
    <>
    <section>
        <First/>
    </section>
    <section>
      <Second/>
    </section>

    <Explanation/>
    
    <section>
      <Ceo/>
    </section>
    <section>
      <Team/>
    </section>
    </>
  )
}

export default About
