import React from 'react'
import '../styles/home.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import heroimg from '../assets/heroimg.png';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
// import Typewriter from 'typewriter-effect/dist/core';
import Typewriter from "typewriter-effect";



function Home() {

  // const {anuj} = useTypewriter({
  //   words: ['Developer' , 'Designer' , 'Student'],
  //   loop: {},
  //   typeSpeed: 100,
  //   deleteSpeed: 50,
  //   backDelay: 2000,
  // })

  return (

    <section className='home_section'>
      <div className='home_container'> 
        <div className='home_content'>
          <h4>hi there,</h4>
          <h1>I'm Anuj a <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Developer")
                        .pauseFor(900)
                        .deleteAll()
                        .typeString("Designer")
                        .pauseFor(900)
                        .deleteAll()
                        .typeString("Student")
                        .pauseFor(900)
                        .start();
                }}
            />
            {/* <span className='moving text' style={{fontWeight:'bold', color:'green'}}>
              {anuj}
            </span>

            <span>
              <Cursor cursorStyle='|' />
            </span> */}
          </h1>
          <p>Front End Developer Passionate about Innovative Web Design and Building User-Friendly Interfaces 🌐✨</p>

          <div className='social_icons'> 
            <a href=""><FaLinkedin className='linkedin_logo'/></a>
            <a href=""><FaGithub className='github_logo'/></a>
          </div>
          <button class="btn" role="button">Read More</button>
          {/* <a href="" className='btn'>
            <button>Read More</button>
          </a> */}
        </div>

        <div className='hero_img'>
          <img src={heroimg} alt="" />
        </div>
      </div>
    </section>

  )
}

export default Home
