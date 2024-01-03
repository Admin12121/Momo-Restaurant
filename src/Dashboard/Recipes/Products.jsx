import React from 'react'
import './Product.scss'


function products({result}) {
  return (
    <>
    <section className="card-container">
     {result}
    </section>
    </>
  )
}

export default products