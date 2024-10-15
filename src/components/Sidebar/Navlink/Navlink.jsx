/* eslint-disable */
import React, { useState } from 'react'

import './Navlink.css';

const Navlink = ({ name, route }) => {
  const [selected, setSelected] = useState(false);

<<<<<<< HEAD
  const handleSelect = () => {
    setSelected(!selected)
  }
  return (
    <div className='sidebar__navlink p__inter'>
      <li>
        <a href={route}
          onClick={handleSelect}
          className={selected ? "selected" : ""}
        >{name}</a>
      </li>
    </div>
=======
  const handleSelect = (e) =>{
    // e.preventDefault();
    console.log("Selected")
    setSelected(!selected)
  }
  return (
    <li className='sidebar__navlink'>
      <a href={route}>
        <div></div>
        <div><span>{name}</span></div>
      </a>
    </li>
>>>>>>> ddb1e136c6137f8022335cf9ef068ee00f0d98f6
  )
}

export default Navlink