import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Footer2.css';
import Logo from './../assets/logo.jpeg';
import LogoText from './../assets/hawkchild_diy.svg';

function Footer() {
  const logoImgRef = useRef(null);
  const logoTextRef = useRef(null);
  const footerRef = useRef(null);
 
  const handleResize = () => {
    if (logoTextRef.current && footerRef.current) {
      const logoHeight = logoTextRef.current.offsetHeight;
      footerRef.current.style.minHeight = `calc(${logoHeight}px + 15em)`;
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer ref={footerRef}>
      <div className="row1">
        <img className="logo-img" ref={logoImgRef} src={Logo} alt="HAWKCHILD___DIY" onLoad={handleResize}/>
        <div className="links-container">
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
        <img className="logo-text" ref={logoTextRef} src={LogoText} onLoad={handleResize} />
      </div>
      <div className="row2">
          <Link to="/" id="back-button">
            Back to home ←
          </Link>
      </div>
      <div className="row3">
        <GlasgowInfo width="40px"/>
        <div>
            <p id="copyright-year">©2024</p>
        </div>
      </div>
      <div className="row4">
        <p>design & code by <a href="https://twitter.com/realSasaMilic">Saša Milić</a></p>
      </div>
    </footer>
  );
};

const GlasgowInfo = ({ width }) => {
  return (
    <div className="glasgow-info">
      <div className="location">
        <p>Glasgow, UK</p>
        <p>⌖55.8642° N, 4.2518° W</p>
      </div>
      <div>
        <p>23 Jan 2024</p>
        <p>08:18 AM</p>
      </div>
      <div>
        <p>20 °C</p>
        <p>Mostly cloudy</p>
      </div>
    </div>
  );
};

export default Footer;
