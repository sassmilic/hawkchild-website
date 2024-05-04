import React from "react";
import "./Contact.css";
import DecorativeHeader from "../components/DecorativeHeader";

const ContactPage = () => {
  return (
    <div className="contact-page-container">
      <DecorativeHeader text="contact" />
      <div className="contact-page-text-wrap">hashim@hawkchild.com</div>
    </div>
  );
};

export default ContactPage;
