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
          <h2>Gold's Gym</h2>
          </div>
          <div className='project__info'>
          <h3>This website helps users to find the exercises according to the selected body parts.</h3>
          <h4>Skills used :React.js|Material-Ui</h4>
          </div>
        </div>
        </div>
    </div>
    </section>
  )
}

export default Projects