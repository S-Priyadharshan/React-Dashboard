import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <div className='app__header'>
      <div class="left">
        <i class="fas fa-search"></i>
      </div>
      <div class="right">
        <i class="fas fa-bell"></i>
        <i class="fas fa-user"></i>
        <div className="divider"></div>   
        <img src="https://via.placeholder.com/30" alt="Profile Image" class="profile-pic" />
        <img src="https://via.placeholder.com/30" alt="Flag" class="flag-pic" />
      </div>
    </div>
  )
}

export default Header;