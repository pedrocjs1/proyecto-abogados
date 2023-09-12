import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js' ;
import '../style/NavBar.css';
import Logo from '../images/logo-abogado.png'
import LogoWhite from '../images/logo-abogados-white.png'


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
      const linksWhiteRules = document.querySelectorAll('.links-white-rule');
      const logoElement = document.querySelector('.site-logo img');

        if (window.scrollY > 30) { 
            document.querySelector('.navbar-area').classList.add('navbar-scrolled');
            document.querySelector('.a-white-rule').classList.add('a-white-rule-xxx');
            document.querySelector('.span-white-rule').classList.add('span-white-rule-xxx');
            linksWhiteRules.forEach(el => el.classList.add('links-white-rule-xxx'));
            
            if (window.innerWidth > 1200) {
              logoElement.src = Logo; 
            }
        } else {
            document.querySelector('.navbar-area').classList.remove('navbar-scrolled');
            document.querySelector('.a-white-rule').classList.remove('a-white-rule-xxx');
            document.querySelector('.span-white-rule').classList.remove('span-white-rule-xxx');
            linksWhiteRules.forEach(el => el.classList.remove('links-white-rule-xxx'));
            
            if (window.innerWidth > 1200) {
              logoElement.src = LogoWhite; 
            }
            if (window.innerWidth < 1200) {
            logoElement.src = Logo; 
            }
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

          <div className='w-100 nav-container-ul-number'>
            <div className='w-100 d-flex flex-column align-items-end me-5 container-nav-container-ul-number'>
              <span className='pe-3 span-white-rule free-span'>24/7 FREE CONSULTATION</span>
              <a href="" className='pe-3 a-white-rule number-span'>702-333-1111</a>
            </div>
            <div className='w-100 d-flex align-items-center justify-content-end containter-ul-nav'>

              <ul className={menuOpen ? 'open' : ''} onClick={closeMenu}>
                <li><a className='links-white-rule' href="#inicio">Inicio</a></li>
                <li><a className='links-white-rule' href="#about">Sobre Mi</a></li>
                <li><a className='links-white-rule' href="#services">Servicios</a></li>
                <li><a className='links-white-rule' href="#portfolio">Portafolio</a></li>
                <li><a className='links-white-rule' href="#contact">Contacto</a></li>
              </ul>
              <button className={`nav-toggler ${menuOpen ? 'toggler-open' : ''}`} onClick={toggleMenu}>
            <span></span>
          </button>
            </div>
          </div>
          

          {/* nav-toggler for mobile version only */}
          
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
 
