import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <div className='app__header'>
      <div className="left">
        <i className="fas fa-search"></i>
      </div>
      <div className="right">
        <i className="fas fa-bell"></i>
        <i className="fas fa-user"></i>
        <div className="divider"></div>   
        <img src="https://via.placeholder.com/30" alt="Profile Image" className="profile-pic" />
        <img src="https://via.placeholder.com/30" alt="Flag" className="flag-pic" />
      </div>
    </div>
  )
}

export default Header;