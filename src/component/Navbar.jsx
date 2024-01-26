import React from 'react'
import '../styles/nav.css';
import logo from '../assets/Anuj-removebg-preview.png';
import { FaBars } from "react-icons/fa6";

function Navbar() {
  return (

    <header>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <input type="checkbox" id="nav_check" hidden/>
        <nav>
            <ul>
                <li>
                    <a href="Home">Home</a>
                </li>
                <li>
                    <a href="About">About</a>
                </li>
                <li>
                    <a href="">Resume</a>
                </li>
                <li>
                    <a href="">Portfolio</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
        </nav>
        <label for="nav_check" className="hamburger">
          <FaBars className='openicon'/>
        </label>
    </header>

  )
}

export default Navbar
