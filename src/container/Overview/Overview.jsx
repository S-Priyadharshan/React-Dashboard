import React from 'react'

import './Overview.css';

import Hero from '../../components/Hero/Hero';

const Overview = () => {
  return (
    <div className='app__overview app__base padded'>
      <div className='app__overview-hero'>
        <Hero name={"Overview"} title={"Dashboard"}/>
      </div>
    </div>
  )
}

export default Overview