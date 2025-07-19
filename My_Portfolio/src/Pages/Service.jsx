import React from 'react'
import './pages.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette, faLaptopCode, faMobileAlt, faGaugeHigh } from '@fortawesome/free-solid-svg-icons'

export default function Service() {
  return (
    <div className='serviceContent'>
      <h2 className="sectionTitle">My Services</h2>
      <div className="servicesSection">
        <div className="serviceCard">
          <FontAwesomeIcon icon={faPalette} className="icon" />
          <h3>UI Design</h3>
        </div>
        <div className="serviceCard">
          <FontAwesomeIcon icon={faLaptopCode} className="icon" />
          <h3>Web Development</h3>
        </div>
        <div className="serviceCard">
          <FontAwesomeIcon icon={faMobileAlt} className="icon" />
          <h3>Responsive Design</h3>
        </div>
        <div className="serviceCard">
          <FontAwesomeIcon icon={faGaugeHigh} className="icon" />
          <h3>Performance Optimization</h3>
        </div>
      </div>
    </div>
  )
}
