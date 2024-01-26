import React from 'react'
import '../styles/portfolio.css'
import { VscVmRunning } from "react-icons/vsc";
import { FaCode } from "react-icons/fa6";
import img1 from '../assets/image/img1.png'
import img2 from '../assets/image/img2.jpeg'
import img3 from '../assets/image/img3.png'
import img4 from '../assets/image/img4.png'
import img5 from '../assets/image/img5.png'
import img6 from '../assets/image/img6.png'


function Portfolio() {
  return (

    <section className='portfolio_section'>
      <h2 className='section_title'>Portfolio</h2>

      <div className='portfolio_container'>
        {/* <ul className='portfolio_filter'>
          <li data-filter='*' className='filter-active'>All</li>
          <li data-filter='.filter-app'>App</li>
          <li data-filter='.filter-card'>Card</li>
          <li data-filter='.filter-web'>Web</li>
        </ul> */}

        <div className='portfolio_wrap-container'> 
          <div className='portfolio_item filter-web'>
            <div className='portfolio_wrap'>
              <img src={img1} alt="" className='img-fluid'/>
              <div className='portfolio_info'>
                <h4>Code Editor</h4>
                {/* <p>Web</p> */}
                <div className='portfolio_links'>
                  <a className='link_one' href="https://developmenteditor.netlify.app"><VscVmRunning /></a>
                  <a href="https://github.com/AnujKulkarni15/Code-Editor"><FaCode/></a>
                </div>
              </div>
            </div>     
          </div>

          <div className='portfolio_item filter-web'>
            <div className='portfolio_wrap'>
              <img src={img2} alt="" className='img-fluid'/>
              <div className='portfolio_info'>
                <h4>Robotic Arm</h4>
                <div className='portfolio_links'>
                  <a href="https://github.com/AnujKulkarni15/Robotic-Arm"><FaCode/></a>
                </div>
              </div>
            </div>
          </div>

          <div className='portfolio_item filter-web'>
            <div className='portfolio_wrap'>
              <img src={img3} alt="" className='img-fluid'/>
              <div className='portfolio_info'>
                <h4>Landing Page</h4>
                <div className='portfolio_links'>
                  <a href="https://landing-page15.netlify.app" className='link_one'><VscVmRunning /></a>
                  <a href="https://github.com/AnujKulkarni15/Landing-Page"><FaCode/></a>
                </div>
              </div>
            </div>
          </div>

          <div className='portfolio_item filter-web'>
            <div className='portfolio_wrap'>
              <img src={img4} alt="" className='img-fluid'/>
              <div className='portfolio_info'>
                <h4>Netflix Clone</h4>
                <div className='portfolio_links'>
                  <a href="https://neflix-clone15.netlify.app" className='link_one'><VscVmRunning /></a>
                  <a href="https://github.com/AnujKulkarni15/Netflix-Clone"><FaCode/></a>
                </div>
              </div>
            </div>
          </div>

          <div className='portfolio_item filter-web'>
            <div className='portfolio_wrap'>
              <img src={img5} alt="" className='img-fluid'/>
              <div className='portfolio_info'>
                <h4>Responsive Docs</h4>
                <div className='portfolio_links'>
                  <a href="https://github.com/AnujKulkarni15/Responsive-Docs"><FaCode/></a>
                </div>
              </div>
            </div>
          </div>

          <div className='portfolio_item filter-web'>
            <div className='portfolio_wrap'>
              <img src={img6} alt="" className='img-fluid'/>
              <div className='portfolio_info'>
                <h4>E-Portfolio</h4>
                <div className='portfolio_links'>
                  <a href="https://anujkulkarni15.github.io/E-portfolio/" className='link_one'><VscVmRunning /></a>
                  <a href="https://github.com/AnujKulkarni15/E-portfolio"><FaCode/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Portfolio
