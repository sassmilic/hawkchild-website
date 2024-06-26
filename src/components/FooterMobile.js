import React from "react";
import "./FooterMobile.css";
import SimpleFooter from "./SimpleFooter";

const Footer = () => {
  return (
    <div className="footer-container-mobile">
      <div className="footer-logos">
        <img className="footer-logo" src="/logo3.png" alt="HCD Logo" />
      </div>
      <div className="footer-logo-text">
        <SimpleFooter />
      </div>
    </div>
  );
};

export default Footer;
