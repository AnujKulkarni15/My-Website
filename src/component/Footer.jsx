import React from 'react'
import '../styles/footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer_bg'>
      <div className='footer_container'>
        <div className='main_footer'>
          <div className='footer_social'>
            <a href="https://www.linkedin.com/in/anuj-kulkarni-4a46b0252/"><FaLinkedin/></a>
            <a href="https://github.com/AnujKulkarni15"><FaGithub/></a>
            <a href="https://www.instagram.com/__.anuj_kulkarni.__/"><FaInstagram/></a>
          </div>
          {/* <h3>anuj</h3> */}
        </div>
        <div className='footer_copywrite'>&#169; Anujkulkarni. All right reserved</div>
      </div>
    </div>
  )
}

export default Footer
