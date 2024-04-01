import React from 'react'

import './HomeStyling.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";



const Home = () => {
  return (

    <section className='main'>
      <div className='contact-details'>

        <a href='https://github.com/Akila504'> <div className='icons' style={{ paddingBottom: 40 }} > <FaGithub /> </div> </a>
        <a href='https://www.linkedin.com/in/akila-d/'><div className='icons' style={{ paddingBottom: 40 }}>  <FaLinkedin /> </div> </a>
        <a href='mailto:Akiladahanayake@outlook.com'><div className='icons'> <MdAttachEmail />  </div> </a>
      </div>
      <div className='box'>
        <div className='intro'>
          <h1  >Hi</h1>
          <h2  >I'm AKILA DAHANAYAKE</h2>
          <p >I'm a front end developer,
            <br />who can create beautiful and interactive websites, with an eye for design</p>
        </div >
      </div>
      <div className='subBox'>
        <div className='heroImg'></div>
        <a href='https://drive.google.com/file/d/1cFx9rn7KUMMtFSHJ4IQ3UKjQWGB_veZZ/view?usp=sharing' >
          <div className='btn cv'>VIEW CV</div> </a>
      </div >
    </section>

  )
}

export default Home