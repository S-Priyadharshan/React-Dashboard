import React from 'react'

import Hero from '../../components/Hero/Hero'

const Crypto = () => {
  return (
    <div className='app__crypto app__base padded'>
      <div className='app__crypto-hero'>
        <Hero name={"Crypto"} title={"Add wallet"}/>
      </div>
    </div>
  )
}

export default Crypto