import React from 'react';
import './LogoMarquee.css'; // Make sure the path matches where your CSS file is located

import woesum from "../assets/artist-logos/woesum.jpeg";
import seretide from "../assets/artist-logos/seretide.png";
import markyb from "../assets/artist-logos/marky-b.png";
import yunglean from "../assets/artist-logos/yung-lean.png";
import evian from "../assets/artist-logos/evian-christ.png";
import dark0 from "../assets/artist-logos/dark0.jpeg";

const LogoMarquee = () => {
  return (
    <div className="marquee">
      <div className="logo-slide">
        {/* Replace these with your actual logo images */}
        <img src={woesum} alt="React Logo 1" />
        <img src={seretide} alt="React Logo 2" />
        <img src={markyb} alt="React Logo 3" />
        <img src={yunglean} alt="React Logo 1" />
        <img src={evian} alt="React Logo 2" />
        <img src={dark0} alt="React Logo 3" />
        {/* Replace these with your actual logo images */}
        <img src={woesum} alt="React Logo 1" />
        <img src={seretide} alt="React Logo 2" />
        <img src={markyb} alt="React Logo 3" />
        <img src={yunglean} alt="React Logo 1" />
        <img src={evian} alt="React Logo 2" />
        <img src={dark0} alt="React Logo 3" />
      </div>
    </div>
  );
};

export default LogoMarquee;

