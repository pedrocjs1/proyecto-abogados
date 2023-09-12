import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js' ;
import '../style/NavBar.css';
import Logo from '../images/logo-abogado.png'
import LogoWhite from '../images/logo-abogados-white.png'
import { useSpring, animated } from "react-spring";

function Navbar() {

  const isWideScreenAnimated = window.innerWidth >= 1200;

  const h2Animation = useSpring({
    opacity: isWideScreenAnimated ? 1 : 1,
    transform: isWideScreenAnimated ? "translateY(0)" : "translateY(0)",
    delay: isWideScreenAnimated ? 2600 : 0,
    from: isWideScreenAnimated
      ? { opacity: 0, transform: "translateY(-40px)" }
      : { opacity: 1, transform: "translateY(0)" },
    config: { duration: isWideScreenAnimated ? 500 : 0 },
  });


  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1200);
  const [currentLogo, setCurrentLogo] = useState(isWideScreen ? LogoWhite : Logo);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const updateLogo = () => {
    if (isWideScreen) {
      setCurrentLogo(isScrolled ? Logo : LogoWhite);
    } else {
      setCurrentLogo(Logo);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const wideScreen = window.innerWidth > 1200;
      setIsWideScreen(wideScreen);
      updateLogo();
    };

    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      updateLogo();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isWideScreen, isScrolled]);


  return (
    <animated.div style={h2Animation} >

      <div className={`navbar-area navbar-custom ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container">
          <nav className="site-navbar">
            <a href="#inicio" className="site-logo">
              <img src={currentLogo} alt="Logo" />
            </a>

            <div className='w-100 nav-container-ul-number'>
              <div className='w-100 d-flex flex-column align-items-end me-5 container-nav-container-ul-number'>
                <span className={`pe-3 ${isWideScreen && !isScrolled ? 'span-white-rule' : 'span-white-rule-xxx'} free-span`}>24/7 FREE CONSULTATION</span>
                <a href="tel:123456789" className={`pe-3 ${isWideScreen && !isScrolled ? 'a-white-rule' : 'a-white-rule-xxx'} number-span`}>123-456-7891</a>
              </div>
              <div className='w-100 d-flex align-items-center justify-content-end containter-ul-nav'>
                <ul className={menuOpen ? 'open' : ''} onClick={closeMenu}>
                  <li><a className={`${isWideScreen && !isScrolled ? 'links-white-rule' : 'links-white-rule-xxx'}`} href="#inicio">Inicio</a></li>
                  <li><a className={`${isWideScreen && !isScrolled ? 'links-white-rule' : 'links-white-rule-xxx'}`} href="#about">Sobre Mi</a></li>
                  <li><a className={`${isWideScreen && !isScrolled ? 'links-white-rule' : 'links-white-rule-xxx'}`} href="#services">Servicios</a></li>
                  <li><a className={`${isWideScreen && !isScrolled ? 'links-white-rule' : 'links-white-rule-xxx'}`} href="#portfolio">Portafolio</a></li>
                  <li><a className={`${isWideScreen && !isScrolled ? 'links-white-rule' : 'links-white-rule-xxx'}`} href="#contact">Contacto</a></li>
                </ul>
                <button className={`nav-toggler ${menuOpen ? 'toggler-open' : ''}`} onClick={toggleMenu}>
                  <span></span>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </animated.div>
  );
}

export default Navbar;
 
