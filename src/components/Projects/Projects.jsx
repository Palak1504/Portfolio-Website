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
          <h2>Movie Lane</h2>
         </div>
         <div className='project__info'>
         <h3>This website helps the user to search the movie according to their choices.</h3>
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