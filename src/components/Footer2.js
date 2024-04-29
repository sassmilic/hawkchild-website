import React from 'react';
import './Footer2.css'; // Make sure this is the path to your CSS file
import SimpleFooter from '../components/SimpleFooter';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
          <div className="footer-back-button">
            <h2><a href="/">BACK TO HOME</a> ←</h2>
          </div>
          <div className="footer-sitemap">
            <h2>Sitemap</h2>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/dao">Discord</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          {/*
          <div className="footer-address">
            <address className="contact-info">
              <p className="contact-title">Glasgow Art Hub</p>
              <p className="contact-address">
                100 Creativity Lane<br/>
                G2 3BW Glasgow<br/>
                Scotland, United Kingdom
              </p>
              <p className="contact-vat">VAT ID: GB123456789</p>
              <p className="contact-tel">Tel: +44 141 123 4567</p>
            </address>
          </div>
          */}
      </div>
    <div className="footer-right">
      <div className="footer-socials">
        <h2>Socials</h2>
        <ul>
          <li><a href="//twitter.com">Twitter</a></li>
          <li><a href="//instagram.com">Instagram</a></li>
          <li><a href="//soundcloud.com">SoundCloud</a></li>
          <li><a href="//facebook.com">Facebook</a></li>
        </ul>
      </div>
      <div className="footer-credits">
        <h2>Website</h2>
        <p><em>Website designed & built by <a href="https://x.com/realSasaMilic">Saša Milić</a></em></p>
      </div>
    </div>
    <div className="footer-social-links">
        <ul>
            <li><a href="//twitter.com"><img src="/icons/x.png" alt="Twitter" /></a></li>
            <li><a href="//instagram.com"><img src="/icons/instagram.svg" alt="Instagram" /></a></li>
            <li><a href="//soundcloud.com"><img src="/icons/soundcloud.svg" alt="SoundCloud" /></a></li>
            <li><a href="//facebook.com"><img src="/icons/facebook.svg" alt="Facebook" /></a></li>
        </ul>
    </div>
      <div className="footer-logos">
        <img src="/logo4.png" alt="HCD Logo" />
        <img className="glasgow-logo" src="/city-of-glasgow.png" alt="Glasgow Logo" />
      </div>
      <div className="footer-rights">
        <p><em>©2024 All rights reserved.</em></p>
      </div>
      <div className="footer-logo-text">
        <SimpleFooter />
      </div>
    </footer>
  );
};

export default Footer;

