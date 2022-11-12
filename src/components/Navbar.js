import React from 'react'
import './Navbar.css'
import { FaFacebookF,FaLinkedinIn, FaTwitter } from "react-icons/fa";


const Navbar = () => {
  return (
      <nav>
       
       
        <ul className='nav-social'>
            <li><a href='/'><FaFacebookF/></a></li>
            <li><a href='/'><FaLinkedinIn/></a></li>
            <li><a href='/'><FaTwitter/></a></li>
        </ul>
        <ul className='nav-links'>
           <li><a href='/'>Home</a></li>
           <li><a href='/'>Projects</a></li>
           <li><a href='/'>About Us</a></li>
           <li><a href='/'>Contact</a></li>
        </ul>
        <div className='nav-logo'>
            <img src='../logo192.png'></img>
        </div>
      </nav>
  )
}

export default Navbar
