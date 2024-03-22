import React from 'react';
import './Header.css';
function Header() {
  return (
    <div className='header'>
        <div className='logo'>
            Logo
        </div>
        <div className='links'>
            <a href="#">About us</a>
            <a href="#">Services</a>
            <a href="#">Events</a>
            <a href="#">Contact us</a>
        </div>
    </div>
  )
}

export default Header