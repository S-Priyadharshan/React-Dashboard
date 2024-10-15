import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <div className='app__header'>
      <div class="search-bar">
        <i class="fas fa-search"></i>
        <input type="text" placeholder="Q">
      </div>
      <div class="icons">
        <i class="fas fa-bell"></i>
        <i class="fas fa-users"></i>
        <img src="https://via.placeholder.com/40" alt="Profile Image" class="profile-pic">
          <img src="https://via.placeholder.com/40" alt="Flag" class="flag-pic">
          </div>
      </div>
    )
}

      export default Header