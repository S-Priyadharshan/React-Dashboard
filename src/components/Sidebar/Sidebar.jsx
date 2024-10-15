import React from 'react'
import { faHome, faBan, faCube, faGem } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';
import Navlink from './Navlink/Navlink';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='app__sidebar'>
      <div className='app__sidebar-logo'>
        <img src='/logo.png' />
        <img src='/unwanted.png' id='unwanted'/>
      </div>


      {/* was working on real thing instead of screenshot  */}
      {/* <div className="workspace">
        <img src="https://via.placeholder.com/40?text=JF"/>
      </div> */}
      <div className='app__sidebar-links'>
        <p className='p__inter'>Dashboards</p>
        <ul>
          <li>
            <NavLink to="/">
              {({ isActive }) => <Navlink name="Overview" icon={faHome} isActive={isActive} />}
            </NavLink>
          </li>
          <li>
            <NavLink to="/analytics">
              {({ isActive }) => <Navlink name="Analytics" icon={faBan} isActive={isActive} />}
            </NavLink>
          </li>
          <li>
            <NavLink to='/ecommerce'>
              {({ isActive }) => <Navlink name="E-commerce" icon={faCube} isActive={isActive}></Navlink>}
            </NavLink>
          </li>
          <li>
            <NavLink to='/crypto'>
              {({ isActive }) => <Navlink name="Crypto" icon={faGem} isActive={isActive}></Navlink>}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar