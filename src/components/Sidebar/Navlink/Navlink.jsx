/* eslint-disable */
import React, { useState } from 'react'

import './Navlink.css';

const Navlink = ({name,route}) => {
  const [selected,setSelected] = useState(false);

  const handleSelect = (e) =>{
    // e.preventDefault();
    console.log("Selected")
    setSelected(!selected)
  }
  return (
    <li>
      <a href={route}>
        <div></div>
        <div><span>{name}</span></div>
      </a>
    </li>
  )
}

export default Navlink