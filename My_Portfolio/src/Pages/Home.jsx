import React from 'react'
import myphoto from '../assets/upscalemedia-transformed (1).png'
import './pages.css'
import Service from './Service'
import backgrounimg from '../assets/ground.png'
import About from './About'
import Tools from './Tools'
import Projects from './Projects'
import Education from './Education'
import ServicePlan from './ServicePlan'
import Contact from './Contact'

export default function Home() {
  return (
    <>
    <div className='homeContent' id="home">
        <div className='titleHome'>
            <div className='sideBar'></div>
            <div className='textContent'>
                <p className='qTitle'>Do you need a Website?</p>
                <h2>I'm <span>Nouran Nouh</span>, a web developer!</h2>
                <p className="subText">
                    I’m a Front-End Developer who loves turning ideas into beautiful and responsive websites. I focus on clean code, great design, and smooth user interactions.
                </p>
                <button><a href="#contact">Contact Me</a></button>
            </div>
        </div>
        <div className='imgTitle'>
            <img src={myphoto} alt="myPhoto" />
        </div>
    </div>
    <img src={backgrounimg}  className='groundhome' alt="img" />
    <Service />
    <About />
    <Tools />
    <Projects />
    <Education />
    <ServicePlan />
    <Contact />
    </>
  )
}
