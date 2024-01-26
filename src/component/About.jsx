import React from 'react'
import '../styles/about.css'
import aboutimg from '../assets/aboutimg.png'

function About() {
  return (

    <section className='about_section'>
      <h2 className='section_title'>About Me</h2>

      <div className='about_container'>

        <div className='about_img'>
          <img src={aboutimg} alt="" />
        </div>

        <div className='about_content'>
          <h1>I make a professional and creative design</h1>
          <p>My name is Anuj Kulkarni, and I'm a computer engineering bachelor's degree candidate right now. I like experimenting with projects and learning about new technologies. In terms of web development, I enjoy the creative process of creating user-friendly, responsive websites and putting in a sincere effort to reach my objectives.💻Deeply passionate web developer | HTML/CSS | JavaScript | Bootstrap | Front-End whiz💪 | Building User-Friendly Websites That Dazzle!😎 🚀 Tech enthusiast | Team Leader | Workshop Organizer | Assisting Students in Developing Their Skills👚 | Prepared to Drive Innovation💡</p>

          {/* <div className='about_info'>
            <div>
              <span className='number'>200</span>
              <br />
              <span className='text'>Completed <br />projects</span>
            </div>

            <div>
              <span className='number'>120</span>
              <br />
              <span className='text'>Positive <br />review</span>
            </div>
          </div> */}

        </div>

      </div>

    </section>

  )
}

export default About
