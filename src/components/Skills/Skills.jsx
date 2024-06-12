import React from 'react'
import './Skills.css'
import {BsPatchCheckFill} from "react-icons/bs"
const Experience = () => {
  return(
    <section id='skills'>
       <h5>What skills I have</h5>
       <h2>My Skills</h2>
       <div className='container skills_container'>
        <div className='skills_frontend'>
          <h3>Frontend Development</h3>
          <div className='skills__content'>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div><h4>HTML</h4></div>
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div><h4>CSS</h4></div>
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div><h4>BOOTSTRAP</h4></div>
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div><h4>JAVASCRIPT</h4></div>
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div><h4>REACT.js</h4></div>
            </article>
          </div>
        </div>
        <div className='other__skills'>
          <h3>Other SKills</h3>
          <div className='skills__content'>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div><h4>C programming Language</h4></div>
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div><h4>C++</h4></div>
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div><h4>Object-oriented Concepts</h4></div>
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div><h4>SQL</h4></div>
            </article>
        </div>
       </div>
       </div>
    </section>
  ) 
}

export default Experience