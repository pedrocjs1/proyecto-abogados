import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js' ;
import '../style/NavBar.css';
import Logo from '../images/logo-abogado.png'


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 30) { 
            document.querySelector('.navbar-area').classList.add('navbar-scrolled');
        } else {
            document.querySelector('.navbar-area').classList.remove('navbar-scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);


  return (
    <div className="navbar-area navbar-custom">
      <div className="container">
        <nav className="site-navbar ">
          <a href="#inicio" className="site-logo">
            <img src={Logo} alt="Logo" className="" />
          </a>

          <ul className={menuOpen ? 'open' : ''} onClick={closeMenu}>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#about">Sobre Mi</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#portfolio">Portafolio</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>

          {/* nav-toggler for mobile version only */}
          <button className={`nav-toggler ${menuOpen ? 'toggler-open' : ''}`} onClick={toggleMenu}>
            <span></span>
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
 
