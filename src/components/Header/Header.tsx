import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const closeMenu = () => {
    setIsMenuActive(false);
  };

  return (
    <header className={isSticky ? 'sticky' : ''}>
      <a href="#" className="brand">Doniyor</a>
      <div className={`menu-btn ${isMenuActive ? 'active' : ''}`} onClick={toggleMenu}></div>
      <nav className={`navigation ${isMenuActive ? 'active' : ''}`}>
        <a href="#Home" onClick={closeMenu}>Home</a>
        <a href="#About" onClick={closeMenu}>About</a>
        <a href="#Skills" onClick={closeMenu}>Skills</a>
        <a href="#Services" onClick={closeMenu}>Services</a>
        <a href="#Work" onClick={closeMenu}>Work</a>
        <a href="#Contact" onClick={closeMenu}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
