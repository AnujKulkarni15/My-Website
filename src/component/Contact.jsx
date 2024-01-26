import React from 'react'
import '../styles/contact.css';

function Contact() {
  return (

    <section className='contact_section'>
      <h2 className='section_title'>Contact Me</h2>

      <div className='contact_container'>
        <div className='contact_content'>
          <div className='inputs'>
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email' />
          </div>
          {/* <input type="password" placeholder='Password'/> */}
          <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
          <a href="#" className='btn'>
            Send Message
          </a>
        </div>
      </div>
    </section>

  )
}

export default Contact
