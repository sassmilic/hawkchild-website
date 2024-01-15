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
            <a href="/">Events</a>
            <a href="/">Discord</a>
        </div>
        <div className="socials-container">
            <a href="https://twitter.com/hawkchild" onClick={() => console.log('Twitter link clicked')}>Twitter↗</a>
            <a href="/">Instagram↗</a>
        </div>
      </div>
      <div className="footer-right">
        <a href="/">Back to top ↑</a>
        <p>©2024</p>
      </div>
    </footer>
  );
}

export default Footer;

