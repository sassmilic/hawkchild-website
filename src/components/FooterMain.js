import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Logo from './../assets/logo.jpeg';
import LogoText from './../assets/hawkchild_diy.svg';

function Footer() {
  const logoImgRef = useRef(null);
  const [logoWidth, setLogoWidth] = useState('0px');

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

  useEffect(() => {
    const updateLogoWidth = () => {
      if (logoImgRef.current) {
        setLogoWidth(`${logoImgRef.current.offsetWidth}px`);
      }
    };
    // Update width on image load
    if (logoImgRef.current) {
      updateLogoWidth();
    }
    // Update width on window resize
    window.addEventListener('resize', updateLogoWidth);
    // Cleanup
    return () => {
      window.removeEventListener('resize', updateLogoWidth);
    };
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
        <img className="logo-text" ref={logoTextRef} src={LogoText} onLoad={handleResize} style={{"visibility": "hidden"}} />
      </div>
      <div className="row2">
        <a id="back-button" href="#!" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Back to top ↑
        </a>
      </div>
      <div className="row3">
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

export default Footer;
