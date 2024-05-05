import React from "react";
import "./Contact.css";
//import DecorativeHeader from "../components/DecorativeHeader";
import decor from "../assets/decor-optimized.svg";

const ContactPage = () => {
  return (
    <div className="contact-page-container">
      <img className="decor decor-top" src={decor} />
      <h1>Contact</h1>
      <img className="decor decor-bottom" src={decor} />
      <br />
      <div className="contact-page-text-wrap">
        hashim@hawkchild.com
        <div className="contact-social-links">
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
      </div>
    </div>
  );
};

export default ContactPage;
