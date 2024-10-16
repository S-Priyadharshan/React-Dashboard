/* eslint-disable*/
import React from 'react'
import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const Hero = ({name,title}) => {
  return (
    <div className='app__hero'>
      <div className='app__hero-heading'>
        <h4 className='p__inter'>{name}</h4>
      </div>
      <div className='app__hero-button'>
        <button>
          <span className='app__hero-icon'><FontAwesomeIcon icon={faPlus}/></span>
          <span className='p__inter'>{title}</span>
        </button>
      </div>
    </div>
  )
}

export default Hero