import React from "react";
import "./Contact.css";

const ContactPage = () => {
  return (
    <div className="contact-page-container">
      <h1>Contact</h1>
      <br />
      <div className="contact-page-text-wrap">
        hashim@hawkchild.com
        <div className="contact-social-links">
          <a href="https://ra.co/promoters/67650 ">
            <img src="/icons/ra.png" alt="Resident Advisor" />
          </a>
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
