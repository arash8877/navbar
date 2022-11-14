import React, {useState} from 'react'
import './Navbar.css'
import { FaFacebookF,FaLinkedinIn, FaTwitter, FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
const [showList, setShowList] = useState(false)

  return (
      <nav >
        <div className='container'>
          <div className='nav-logo'>
            <button onClick={() => setShowList(!showList)}>
              {showList? <FaTimes className='nav-toggle'/> : <FaBars className='nav-toggle'/>}
            </button>
            <img src='../logo192.png'></img>
          </div>
          <div className={`${showList? 'nav-links active' : 'nav-links' }`}>
            <ul className='list'>
              <li><a href='/'>Home</a></li>
              <li><a href='/'>Projects</a></li>
              <li><a href='/'>About Us</a></li>
              <li><a href='/'>Contact</a></li>
           </ul>
          </div>
          <ul className='nav-social' >
            <li><a href='/'><FaFacebookF/></a></li>
            <li><a href='/'><FaLinkedinIn/></a></li>
            <li><a href='/'><FaTwitter/></a></li>
          </ul>
        </div>
      </nav>
  )
}

export default Navbar
