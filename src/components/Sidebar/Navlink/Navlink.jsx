/* eslint-disable */
import React, { useState } from 'react'

import './Navlink.css';

const Navlink = ({ name, route }) => {
  const [selected, setSelected] = useState(false);

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
  )
}

export default Navlink