import React from "react";
import "./LogoMarquee.css"; // Make sure the path matches where your CSS file is located

import woesum from "../assets/artist-logos/woesum.webp";
import seretide from "../assets/artist-logos/seretide.webp";
import markyb from "../assets/artist-logos/marky-b.webp";
import yunglean from "../assets/artist-logos/yung-lean.webp";
import evian from "../assets/artist-logos/evian-christ.webp";
import dark0 from "../assets/artist-logos/dark0.webp";
import malibu from "../assets/artist-logos/malibu.webp";
import kamixlo from "../assets/artist-logos/kamixlo.webp";
import casualGabberz from "../assets/artist-logos/casual-gabberz.webp";
import clouds from "../assets/artist-logos/clouds.webp";
import femi from "../assets/artist-logos/femi.webp";
import oliXl from "../assets/artist-logos/oli-xl.webp";
import doss from "../assets/artist-logos/doss.webp";
import mechatok from "../assets/artist-logos/mechatok.webp";

const LogoMarquee = () => {
  return (
    <div className="marquee">
      <div className="logo-slide">
        <img className="woesum-logo" src={woesum} alt="React Logo 1" />
        <img className="seretide-logo" src={seretide} alt="React Logo 2" />
        <img className="marky-b-logo" src={markyb} alt="React Logo 3" />
        <img className="yung-lean-logo" src={yunglean} alt="React Logo 1" />
        <img src={evian} alt="React Logo 2" />
        <img src={dark0} alt="React Logo 3" />
        <img src={malibu} alt="React Logo 3" />
        <img className="kamixlo-logo" src={kamixlo} alt="React Logo 3" />
        <img src={casualGabberz} alt="Casual Gabberz Logo" />
        <img className="clouds-logo" src={clouds} alt="Clouds Logo" />
        <img className="femi-logo" src={femi} alt="Femi Logo" />
        <img className="oli-xl-logo" src={oliXl} alt="Oli XL Logo" />
        <img className="doss-logo" src={doss} alt="Doss Logo" />
        <img className="mechatok-logo" src={mechatok} alt="Mechatok Logo" />
      </div>
      <div className="logo-slide">
        <img className="woesum-logo" src={woesum} alt="React Logo 1" />
        <img className="seretide-logo" src={seretide} alt="React Logo 2" />
        <img className="marky-b-logo" src={markyb} alt="React Logo 3" />
        <img className="yung-lean-logo" src={yunglean} alt="React Logo 1" />
        <img src={evian} alt="React Logo 2" />
        <img src={dark0} alt="React Logo 3" />
        <img src={malibu} alt="React Logo 3" />
        <img className="kamixlo-logo" src={kamixlo} alt="React Logo 3" />
        <img src={casualGabberz} alt="Casual Gabberz Logo" />
        <img className="clouds-logo" src={clouds} alt="Clouds Logo" />
        <img className="femi-logo" src={femi} alt="Femi Logo" />
        <img className="oli-xl-logo" src={oliXl} alt="Oli XL Logo" />
        <img className="doss-logo" src={doss} alt="Doss Logo" />
        <img className="mechatok-logo" src={mechatok} alt="Mechatok Logo" />
      </div>
    </div>
  );
};

export default LogoMarquee;
