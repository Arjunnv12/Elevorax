import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Sticky header toggle
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      // Active section checker
      const sections = document.querySelectorAll('section');
      let currentSection = 'home';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">
          <span className="logo-icon"><i className="fa-solid fa-microchip"></i></span>
          ELEV<span className="gradient-text">OREX</span>
        </a>
        
        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`} id="nav-menu">
          <ul>
            <li><a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={handleLinkClick}>Home</a></li>
            <li><a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={handleLinkClick}>About</a></li>
            <li><a href="#courses" className={`nav-link ${activeSection === 'courses' ? 'active' : ''}`} onClick={handleLinkClick}>Courses</a></li>
            <li><a href="#why-choose-us" className={`nav-link ${activeSection === 'why-choose-us' ? 'active' : ''}`} onClick={handleLinkClick}>Why Us</a></li>
            <li><a href="#stats" className={`nav-link ${activeSection === 'stats' ? 'active' : ''}`} onClick={handleLinkClick}>Impact</a></li>
            <li><a href="#testimonials" className={`nav-link ${activeSection === 'testimonials' ? 'active' : ''}`} onClick={handleLinkClick}>Testimonials</a></li>
            <li><a href="#contact" className="btn btn-primary btn-nav" onClick={handleLinkClick}>Get Started</a></li>
          </ul>
        </nav>
        
        <button 
          className={`mobile-toggle ${isMenuOpen ? 'open' : ''}`} 
          id="mobile-toggle" 
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
}
