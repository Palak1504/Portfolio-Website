import React from 'react'
import './Contact.css';
import {MdOutlineEmail} from "react-icons/md";
import {AiFillLinkedin} from "react-icons/ai";
const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
           <article className='contact__option'>
             <MdOutlineEmail className='contact__option-icon'/>
             <h4>Email</h4>
             <h5>palakpatidar1504@gmail.com</h5>
             <a href='mailto:palakpatidar1504@gmail.com' target='_blank' rel="noreferrer">Send a message </a>
           </article>
           <article className='contact__option'>
             <AiFillLinkedin className='contact__option-icon'/>
             <h4>LinkedIn</h4>
             <h5>palak1_5</h5>
             <a href="https://www.linkedin.com/in/palak-patidar-08a201221/" target='_blank' rel="noreferrer">Send a message </a>
           </article>
        </div>
      <form action="https://formsubmit.co/palakpatidar1504@gmail.com" method="POST">
           <input type="text" name="name" placeholder='your full name' required />
           <input type="email" name="email" placeholder='your email' required />  
           <textarea name="message" rows="7" placeholder='your message' required ></textarea>
           <button type='submit' className='btn btn-primary'> Send Message</button>
      </form>
      </div>
    </section>
  )
}

export default Contact