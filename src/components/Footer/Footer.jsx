import React from 'react'
import './Footer.css'
import {AiFillLinkedin} from "react-icons/ai";
import {MdOutlineEmail} from "react-icons/md";
import {FiInstagram} from "react-icons/fi";
const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'>PALAK</a>
      <ul className='personal_links'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a> </li>
        <li><a href="#skills">Skills</a> </li>
        <li><a href="#projects">Projects</a> </li>
        <li><a href="#contact">Contact</a> </li>
      </ul>
      <div className='footer__socials'>
        <a href="https://www.instagram.com/" target='_blank' rel="noreferrer"><FiInstagram/></a>
        <a href="https://www.linkedin.com/in/palak-patidar-08a201221/" target='_blank' rel="noreferrer"><AiFillLinkedin/></a>
        <a href='mailto:palakpatidar1504@gmail.com' target='_blank' rel="noreferrer"><MdOutlineEmail/></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; PALAK. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer