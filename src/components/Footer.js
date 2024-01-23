import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Logo from './../assets/logo.jpeg';
import LogoText from './../assets/hawkchild_diy.svg';
import ScrollingBanner from './ScrollingBanner.js';

function Footer() {
  const logoRef = useRef(null);
  const footerRef = useRef(null);
 
  const handleResize = () => {
    if (logoRef.current && footerRef.current) {
      const logoHeight = logoRef.current.offsetHeight;
      footerRef.current.style.minHeight = `calc(${logoHeight}px + 7em)`;
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer ref={footerRef}>
      <div className="footer-col1">
          <div className="footer-left">
            <img ref={logoRef} src={Logo} alt="HAWKCHILD___DIY" onLoad={handleResize}/>
            <div className="nav-container">
                <a href="/about">About</a>
                <a href="/events">Events</a>
                <a href="/community">Discord</a>
            </div>
            <div className="socials-container">
                <p><a href="https://twitter.com/hawkchild" target="_blank" rel="noopener noreferrer">Twitter/X↗</a></p>
                <a href="https://www.instagram.com/hawkchild.diy" target="_blank" rel="noopener noreferrer">Instagram↗</a>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-right-top">
                <img src={LogoText} className="logo-text"/>
            </div>
          </div>
      </div>
      <div className="footer-col2">
          <Link to="/" id="back-to-top">
            Back to home ←
          </Link>
      </div>
      <div className="footer-col3">
        <p>Designed & built by <a href="https://twitter.com/realSasaMilic">Saša Milić</a> ©2024</p>
      </div>
    </footer>
  );
}

export default Footer;

