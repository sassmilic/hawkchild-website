import React from 'react';
import './Footer.css';
import Logo from './../assets/logo.jpeg';

function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <img src={Logo} alt="HAWKCHILD___DIY"/>
        <div className="nav-container">
            <a href="/about">About</a>
            <a href="/events">Events</a>
            <a href="/community">Discord</a>
        </div>
        <div className="socials-container">
            <a href="https://twitter.com/hawkchild" target="_blank" rel="noopener noreferrer">Twitter/X↗</a>
            <a href="https://www.instagram.com/hawkchild.diy" target="_blank" rel="noopener noreferrer">Instagram↗</a>
        </div>
      </div>
      <div className="footer-right">
        <a href="/">Back to top ↑</a>
        <p>Designed & built by <a href="https://twitter.com/realSasaMilic">Saša Milić</a> ©2024</p>
      </div>
    </footer>
  );
}

export default Footer;

