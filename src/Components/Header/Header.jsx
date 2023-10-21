import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header-wrapper">
        <div className="logo-part">
            <img src="/images/header-logo.svg" alt="nike-logo" />
        </div>
        <ul className='links'>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#about-us">About Us</a>
            </li>
            <li>
                <a href="#products">Products</a>
            </li>
            <li>
                <a href="#contact-us">Contact Us</a>
            </li>
        </ul>
        <div className='dropdown-menu'>
            <img src="/icons/hamburger.svg" alt="hamburger" />
        </div>
    </div>
  )
}

export default Header