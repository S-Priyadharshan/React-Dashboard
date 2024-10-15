/* eslint-disable */
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navlink.css';
return (
    <div className={`sidebar__navlink ${isActive ? 'active' : ''}`}>
        <div className='navlink__img'>{icon && <FontAwesomeIcon icon={icon} />}</div>
        <div className='navlink__route'><span>{name}</span></div>
    </div>
  )
}

export default Navlink