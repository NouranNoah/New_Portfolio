import React from 'react'
import './pages.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


export default function About() {
  return (
    <div className='aboutContent' id="about">
      <p className='sectionTag'>– About Me</p>
      <h2 className='sectionTitle'>Who is <span>Nouran Nouh</span>?</h2>
      
      <p className='aboutText'>
        A passionate <strong>Front-End Developer</strong> who loves designing and building creative web interfaces.
        I studied at the <strong>Faculty of Computers and Information</strong> and took several courses in Front-End Development, including <strong>React.js</strong>.
        I focus on writing clean code and creating smooth, user-friendly experiences.
      </p>

      <p className='experience'>+3 Years Experience</p>

      
        <Link 
        to="/Nouran-Nouh-esume.pdf" 
        target="_blank" 
        download
        className="downloadBtn"
        >
        Download CV 
          <FontAwesomeIcon 
           icon={faArrowDown} 
          className="icon"
          style={{
          padding: '4px 10px', 
          marginLeft: '8px', 
          backgroundColor: 'white', 
          borderRadius: '25px', 
          color: '#00748f' 
            }} 
          />
        </Link>
        
    </div>
  )
}
