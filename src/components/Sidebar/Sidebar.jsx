import React from 'react'
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='app__sidebar'>
        <div className='app__sidebar-logo'>
            <img src='/logo.png'/>
            <img src='/unwanted.png'/>
        </div>
        <div className='app__sidebar-links'>
            <ul>
                <li><a href="/">Overview</a></li>
                <li><a href="/analytics">Analytics</a></li>
                <li><a href="/ecommerce">E-commerce</a></li>
                <li><a href="/crypto">Crypto</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar