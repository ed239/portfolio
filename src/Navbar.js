import React from 'react';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar(){
  const [isMobile, setIsMobile] = useState(window.innerWidth < 960);
  const [menuVisible, setMenuVisible] = useState(false);

  const handleToggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  const handleLinkClick = () => {
    setMenuVisible(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 960);
    };

    const handleClickOutsideMenu = (event) => {
      if (menuVisible && !event.target.closest('.navbar')) {
        setMenuVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('click', handleClickOutsideMenu);

    // Cleanup the event listeners on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleClickOutsideMenu);
    };
  }, [menuVisible]);

  return (
    
    <nav className={`navbar ${isMobile ? 'mobile' : ''}`}>
      {isMobile && (
        <div className="menu-toggle" onClick={handleToggleMenu}>
          Menu ☰ 
        </div>
      )}

      <div className={`nav-links ${menuVisible ? 'visible' : ''}`}>
        <Link to="/portfolio" className="nav-button" onClick={handleLinkClick}>
          Home
        </Link>
        <Link to="/education" className="nav-button" onClick={handleLinkClick}>
          Education & Skills
        </Link>
        <Link to="/experience" className="nav-button" onClick={handleLinkClick}>
          Experience
        </Link>
        <Link to="/projects2" className="nav-button" onClick={handleLinkClick}>
          Projects
        </Link>
      </div>
    </nav>
  );
}