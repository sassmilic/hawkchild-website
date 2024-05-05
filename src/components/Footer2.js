import React from "react";
import "./Footer2.css";
import SimpleFooter from "../components/SimpleFooter";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-back-button">
        <h4>back to home</h4>
        <ul>
          <li>
            <a href="/">←</a>
          </li>
        </ul>
      </div>
      <div className="footer-socials">
        <h4>socials</h4>
        <ul>
          <li>
            <a href="//twitter.com">Twitter</a>
          </li>
          <li>
            <a href="//instagram.com">Instagram</a>
          </li>
          <li>
            <a href="//soundcloud.com">SoundCloud</a>
          </li>
          <li>
            <a href="//discord.com">Discord</a>
          </li>
          <li>
            <a href="//facebook.com">Facebook</a>
          </li>
        </ul>
      </div>
      <div className="footer-sitemap">
        <h4>sitemap</h4>
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/events">Events</a>
          </li>
          <li>
            <a href="/dao">$hsTKKYTKKY</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer-credits">
        <h4>
          development &<br />
          design
        </h4>
        <ul>
          <li>
            <a href="https://x.com/realSasaMilic">Saša Milić</a>
          </li>
        </ul>
      </div>
      {/*
      <div className="footer-social-links">
            <a href="//twitter.com">
              <img src="/icons/x.png" alt="Twitter" />
            </a>
            <a href="//instagram.com">
              <img src="/icons/instagram.svg" alt="Instagram" />
            </a>
            <a href="//soundcloud.com">
              <img src="/icons/soundcloud.svg" alt="SoundCloud" />
            </a>
            <a href="//facebook.com">
              <img src="/icons/facebook.svg" alt="Facebook" />
            </a>
      </div>
      */}
      <div className="footer-logos">
        <img className="footer-logo" src="/logo4.png" alt="HCD Logo" />
        <img
          className="footer-logo glasgow-logo"
          src="/city-of-glasgow.png"
          alt="Glasgow Logo"
        />
      </div>
      <div className="footer-rights">
        <h4>©2024</h4>
        <h4>all rights reserved</h4>
      </div>
      <div className="footer-logo-text">
        <SimpleFooter />
      </div>
    </footer>
  );
};

export default Footer;
