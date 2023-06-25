import React from 'react'
import './About.css';
import ME from '../../assets/Me-about.jpg'
import {GiSkills} from "react-icons/gi"
import {VscFolderLibrary} from "react-icons/vsc"
const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className="about__me">
          <div className='about__me_image'>
            <img src={ME} alt="About Image"/>
          </div>
        </div>
      <div className='about__content'>
       <div className='about__cards'>
        <article className='about__card'> 
        <GiSkills className='about__icon'/>
         <h5>Skills</h5>
        <small>C|C++|HTML|CSS|JAVASCRIPT|REACT</small>
        </article>

        <article className='about__card'> 
        <VscFolderLibrary className='about__icon'/>
         <h5>Projects</h5>
        <small>2 and more</small>
        </article>
       </div>
       <p>
       I am PALAK PATIDAR. Currently,I am pursuing Bachelor of Technology (B.Tech). I am a front-end developer.
       </p>
       <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>
    </section>
  )
}

export default About