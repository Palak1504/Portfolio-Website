import React from 'react'
import './Projects.css'
import {BsDot} from 'react-icons/bs'
const Projects = () => {
  return (
    <section id='projects'>
      <h2>MY PROJECTS</h2>
      <div className='container project__container'>
       <div className='project__details'>
         <div className='project__content'>
         <div className='project__name'>
         <BsDot className='dot'/>
          <h2>TO DO LIST</h2>
         </div>
         <div className='project__info'>
         <h3>This website helps you keep the record of work which you want to complete.</h3>
          <h4>Skills used : HTML| CSS | React.js</h4>
         </div>
         </div>
          <div className='project__content'>
          <div className='project__name'>
          <BsDot className='dot'/>
          <h2>PORTFOLIO WEBSITE</h2>
          </div>
          <div className='project__info'>
          <h3>This website tells about me, my work, my skills and experiences.</h3>
          <h4>Skills used : HTML| CSS | React.js</h4>
          </div>
        </div>
        </div>
    </div>
    </section>
  )
}

export default Projects