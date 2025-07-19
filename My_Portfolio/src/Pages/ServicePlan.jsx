import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faLaptopCode, faCogs } from '@fortawesome/free-solid-svg-icons';
import './pages.css'

export default function ServicePlan() {
  return (
    <div className="plansSection" id="service">
      <p className="sectionTag">– What I Can Offer</p>
      <h2 className="sectionTitle">Let’s Build Something Great</h2>

      <div className="plansGrid">
        <div className="planCard">
          <FontAwesomeIcon icon={faGlobe} className="planIcon" />
          <h3>Landing Page</h3>
          <p>Clean, responsive one-page site to showcase your product or service.</p>
          <button className="planBtn"><a href="#contact" className='aLink'>Get Started</a></button>
        </div>

        <div className="planCard featured">
          <FontAwesomeIcon icon={faLaptopCode} className="planIcon" />
          <h3>Full Website</h3>
          <p>Multi-page website with responsive design and smooth navigation.</p>
          <button className="planBtn"><a href="#contact">Start Project</a></button>
        </div>

        <div className="planCard">
          <FontAwesomeIcon icon={faCogs} className="planIcon" />
          <h3>Web App</h3>
          <p>Dynamic React.js application with API integration and state management.</p>
          <button className="planBtn"><a href="#contact" className='aLink'>Let's Talk</a></button>
        </div>
      </div>
      <p>Pricing is flexible depending on project size and timeline. Let’s talk and tailor a solution for your needs!</p>
    </div>
  );
}
