import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className='navContent'>
      <div className='logo'>
        <h2>Nouarn.</h2>
      </div>

      <div className={`navLinks ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#home" className='aLink' onClick={closeMenu}>Home</a></li>
          <li><a href="#about" className='aLink' onClick={closeMenu}>About</a></li>
          <li><a href="#tools" className='aLink' onClick={closeMenu}>Tools</a></li>
          <li><a href="#projects" className='aLink' onClick={closeMenu}>Projects</a></li>
          <li><a href="#education" className='aLink' onClick={closeMenu}>Education</a></li>
          <li><a href="#service" className='aLink' onClick={closeMenu}>Service</a></li>
          <li><a href="#contact" className='aLink' onClick={closeMenu}>Contact</a></li>
        </ul>
        <button onClick={closeMenu}><a href="#contact" style={{ color: 'rgb(0, 144, 176)' }}>Contact Me</a></button>
      </div>

      <div className="menuIcon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
}
