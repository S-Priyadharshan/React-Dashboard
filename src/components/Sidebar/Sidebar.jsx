import React from 'react'
import './Sidebar.css';
import Navlink from './Navlink/Navlink';

const Sidebar = () => {
  return (
    <div className='app__sidebar'>
        <div className='app__sidebar-logo'>
            <img src='/logo.png'/>
            <img src='/unwanted.png'/>
        </div>
        <div className='app__sidebar-links'>
            <p>Dashboards</p>
            <ul>
                <Navlink name={'Overview'} route={'/'}/>
                <Navlink name={'Analytics'} route={'/analytics'}/>
                <Navlink name={'E-commerce'} route={'/ecommerce'}/>
                <Navlink name={'Crypto'} route={'/crypto'}/>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar