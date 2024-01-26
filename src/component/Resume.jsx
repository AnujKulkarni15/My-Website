import React from 'react'
import { useRef } from 'react';
import '../styles/resume.css'
import { FaGraduationCap } from "react-icons/fa";
import { PiSuitcaseSimpleBold } from "react-icons/pi";

function Resume() {
  const education = useRef(null);
  const experience = useRef(null);
  const skills = useRef(null);

  const scrolltosection = (elementRef) =>{
    window.scrollTo({
      top:elementRef.current.offsetTop,
      behavior:'smooth',
    })
  }

  return (

    <section className='resume_section'>
      <h2 className='section_title'>Resume</h2>

      <div className='resume_container'>

        {/* <div className='resume_tabs'>
          <ul>
            <li>
              <a href="#page-1" onClick={() =>scrolltosection(education)}>Education</a>
            </li>
            <li>
              <a href="#page-2" onClick={() =>scrolltosection(experience)}>Experience</a>
            </li>
            <li>
              <a href="#page-3" onClick={() =>scrolltosection(skills)}>Skills</a>
            </li>
          </ul>
        </div> */}

        <div className='resume_content'>

          <div className='page one'>
            <div className="page_heading" ref={education}>Education</div>

            <div className="resume_wrap">
              <div className="resume_wrap_icon">
                 <FaGraduationCap size={40}/>
              </div>
              <div className="resume_wrap_content">
                <span className='date'>2014-2015</span>
                <h4>Bachelor in Computer Engineering</h4>
                <div className="location">Savitribai Phule Pune University</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis perferendis voluptates. Facilis soluta veniam mollitia aperiam, a, officia architecto quae molestias qui tempora possimus iste laborum. Libero, rerum praesentium?</p>
              </div>
            </div>

            <div className="resume_wrap">
              <div className="resume_wrap_icon">
                <FaGraduationCap size={40}/>
              </div>
              <div className="resume_wrap_content">
                <span className='date'>2016-2017</span>
                <h4>SP college</h4>
                <div className="location">Pune</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis perferendis voluptates. Facilis soluta veniam mollitia aperiam, a, officia architecto quae molestias qui tempora possimus iste laborum. Libero, rerum praesentium?</p>
              </div>
            </div>

            <div className="resume_wrap">
              <div className="resume_wrap_icon">
                <FaGraduationCap size={40}/>
              </div>
              <div className="resume_wrap_content">
                <span className='date'>2019-2020</span>
                <h4>Mount St. Patrick Academy</h4>
                <div className="location">Pune</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis perferendis voluptates. Facilis soluta veniam mollitia aperiam, a, officia architecto quae molestias qui tempora possimus iste laborum. Libero, rerum praesentium?</p>
              </div>
            </div>

          </div>

          <div className='page two'>
            <div className="page_heading" ref={experience}>Experience</div>

            <div className="resume_wrap">
              <div className="resume_wrap_icon">
                 <PiSuitcaseSimpleBold size={40}/>
              </div>
              <div className="resume_wrap_content">
                <span className='date'>06/2022 – 12/2022</span>
                <h4>CodeBlocks</h4>
                <div className="location">Workshop Coordinator</div>
                <p>I was selected as a workshop coordinator in our college technical community codeblocks, where I organized two events for students to upgrade their skills and identify the best one out of them.</p>
              </div>
            </div>

            <div className="resume_wrap">
              <div className="resume_wrap_icon">
                <PiSuitcaseSimpleBold size={40}/>
              </div>
              <div className="resume_wrap_content">
                <span className='date'>07/2023 – 08/2023</span>
                <h4>CodersCave</h4>
                <div className="location">Web Dev Intern</div>
                <p>During my internship, I created four projects in total and gained new experience.</p>
              </div>
            </div>

            <div className="resume_wrap">
              <div className="resume_wrap_icon">
                <PiSuitcaseSimpleBold size={40}/>
              </div>
              <div className="resume_wrap_content">
                <span className='data'>09/2023 – present</span>
                <h4>IICARE Foundation</h4>
                <div className="location">Test Intern</div>
                <p>I have been selected as a Test Intern by our college who have signed a MOU with IICARE Foundation for a project sponsored by Capgemini.</p>
              </div>
            </div>

          </div>

          <div className='page three' ref={skills}>
            <div className="page_heading">Skills</div>
            <div className="progressboxs">

              <div className="progressbox">
                  <div className="progress_name">
                    <span>C++</span>
                    <span>80%</span>
                  </div>
                  <div className='progress'>
                    <div className='progress_bar' style={{width:'80%'}}/>
                  </div>
              </div>

              <div className="progressbox">
                  <div className="progress_name">
                    <span>HTML</span>
                    <span>95%</span>
                  </div>
                  <div className='progress'>
                    <div className='progress_bar' style={{width:'95%'}}/>
                  </div>
              </div>

              <div className="progressbox">
                  <div className="progress_name">
                    <span>CSS</span>
                    <span>90%</span>
                  </div>
                  <div className='progress'>
                    <div className='progress_bar' style={{width:'90%'}}/>
                  </div>
              </div>

              <div className="progressbox">
                  <div className="progress_name">
                    <span>JavaScript</span>
                    <span>75%</span>
                  </div>
                  <div className='progress'>
                    <div className='progress_bar' style={{width:'75%'}}/>
                  </div>
              </div>

              <div className="progressbox">
                  <div className="progress_name">
                    <span>Bootstrap</span>
                    <span>80%</span>
                  </div>
                  <div className='progress'>
                    <div className='progress_bar' style={{width:'80%'}}/>
                  </div>
              </div>

              <div className="progressbox">
                  <div className="progress_name">
                    <span>React</span>
                    <span>60%</span>
                  </div>
                  <div className='progress'>
                    <div className='progress_bar' style={{width:'60%'}}/>
                  </div>
              </div>

              <div className="progressbox">
                  <div className="progress_name">
                    <span>Tailwind CSS</span>
                    <span>75%</span>
                  </div>
                  <div className='progress'>
                    <div className='progress_bar' style={{width:'75%'}}/>
                  </div>
              </div>

              <div className="progressbox">
                  <div className="progress_name">
                    <span>WordPress</span>
                    <span>80%</span>
                  </div>
                  <div className='progress'>
                    <div className='progress_bar' style={{width:'80%'}}/>
                  </div>
              </div>

              <div className="progressbox">
                  <div className="progress_name">
                    <span>Figma</span>
                    <span>60%</span>
                  </div>
                  <div className='progress'>
                    <div className='progress_bar' style={{width:'60%'}}/>
                  </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

  )
}

export default Resume
