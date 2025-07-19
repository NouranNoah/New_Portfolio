import React from 'react';
import './pages.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faSkype } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <div className='contactSection' id="contact">
      <div className="contactContent">
        
        <div className="contactInfo">
          <p className='sectionTag'>– Contact Us</p>
          <h2 className='sectionTitle'>
            Let’s Talk for <span className='highlight'>Your Next Projects</span>
          </h2>
          <p className="contactDescription">
            Feel free to reach out if you have a project, idea, or just want to connect!
          </p>
          <div className="infoItem">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <span>+20 (120) 706-9616</span>
          </div>
          <div className="infoItem">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <span>nouranabdou412@gmail.com</span>
          </div>
          <div className="infoItem">
            <FontAwesomeIcon icon={faSkype} className="icon" />
            <span>example</span>
          </div>
          <div className="infoItem">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
            <span>Port Said Governorate, Egypt</span>
          </div>
        </div>

        
        <form
          className="contactForm"
          action="https://formsubmit.co/nouranabdou412@gmail.com"
          method="POST"
        >
          
          <input type="hidden" name="_captcha" value="false" />

          
          <input type="hidden" name="_next" value="http://localhost:5173/thankYou" />

          <div className="formGroup">
            <input type="text" name="name" placeholder="Your Name *" required />
            <input type="email" name="email" placeholder="Email *" required />
          </div>

          <div className="formGroup">
            <input type="text" name="phone" placeholder="Phone *" required />
            <select name="service" required>
              <option disabled selected>I'm Interested in *</option>
              <option>Website</option>
              <option>Dashboard</option>
              <option>Landing Page</option>
              <option>App UI</option>
            </select>
          </div>

          <div className="formGroup">
            <select name="budget" required>
              <option disabled selected>Budget Range (USD) *</option>
              <option>$100 - $500</option>
              <option>$500 - $1000</option>
              <option>$1000+</option>
            </select>
            <select name="country" required>
              <option disabled selected>Country *</option>
                <option>Egypt</option>
                <option>USA</option>
                <option>UAE</option>
                <option>Saudi Arabia</option>
                <option>Kuwait</option>
                <option>Morocco</option>
                <option>Qatar</option>
                <option>Algeria</option>
                <option>Tunisia</option>
                <option>Lebanon</option>
                <option>Jordan</option>
              <option/>
            </select>
          </div>

          <textarea name="message" placeholder="Your Message *" required></textarea>

          <button type="submit" className="submitBtn">
            Submit <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </form>
      </div>
    </div>
  );
}
