import React from 'react'
import Hero from '../../components/Hero/Hero'

const Analytics = () => {
  return (
    <div className='app__analytics app__base padded'>
      <div className='app__analytics-hero'>
        <Hero name={"Analytics"} title={"Add metrics"}/>
      </div>
    </div>
  )
}

export default Analytics