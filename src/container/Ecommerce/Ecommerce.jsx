import React from 'react'

import Hero from '../../components/Hero/Hero'

const Ecommerce = () => {
  return (
    <div className='app__ecommerce app__base padded'>
      <div className='app__ecommerce-hero'>
        <Hero name={"E-commerce"} title={"Add product"}/>
      </div>
    </div>
  )
}

export default Ecommerce