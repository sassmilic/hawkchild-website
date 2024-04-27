import React from 'react';
import './Footer2.css'; // Make sure this is the path to your CSS file

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
          <div className="footer-back-button">
            <a href="/">BACK TO HOME</a>
          </div>
          <div className="footer-sitemap">
            Sitemap
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/dao">Discord</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
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
      </div>
    <div className="footer-right">
      <div className="footer-socials">
        Socials
        <ul>
          <li><a href="//soundcloud.com">SoundCloud</a></li>
          <li><a href="//twitter.com">Twitter</a></li>
          <li><a href="//facebook.com">Facebook</a></li>
        </ul>
      </div>
      <div className="footer-credits">
        Website
        <p>Website designed & built by Salsa Milic</p>
      </div>
    </div>
    <div className="footer-social-links">
        <ul>
          <li><a href="//soundcloud.com">SoundCloud</a></li>
          <li><a href="//twitter.com">Twitter</a></li>
          <li><a href="//facebook.com">Facebook</a></li>
        </ul>
    </div>
      <div className="footer-logos">
        <img src="path-to-hcd-logo.png" alt="HCD Logo" />
        <img src="path-to-glasgow-logo.png" alt="Glasgow Logo" />
      </div>
      <div className="footer-rights">
        <p>©2024 All rights reserved</p>
      </div>
      <div className="footer-logo-text">
        {/* Your logo text here */}
        Logo Text
      </div>
    </footer>
  );
};

export default Footer;

