import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navContent'>
      <div>
        <h2>Nouarn.</h2>
      </div>
      <div>
        <ul>
            <li><a href="#home" className='aLink'>Home</a></li>
            <li><a href="#about" className='aLink'>About</a></li>
            <li><a href="#tools" className='aLink'>Tools</a></li>
            <li><a href="#projects" className='aLink'>Projects</a></li>
            <li><a href="#education" className='aLink'>Education</a></li>
            <li><a href="#service" className='aLink'>Service</a></li>
            <li><a href="#contact" className='aLink'>Contact</a></li>
        </ul>
      </div>
      <div>
        <button><a href="#contact" style={{color:'rgb(0, 144, 176)'}}>Contact Me</a></button>
      </div>
    </div>
  )
}
