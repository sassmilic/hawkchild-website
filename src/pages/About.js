import React from 'react';
import './About.css';

import EvianChristLogo from "./../assets/artist-logos/evian-christ.png";
import Dark0Logo from "./../assets/artist-logos/dark0.jpeg";
import YungLeanLogo from "./../assets/artist-logos/yung-lean.png";
import MarkyBLogo from "./../assets/artist-logos/marky-b.png";
import SeretideLogo from "./../assets/artist-logos/seretide.png";
import WoesumLogo from "./../assets/artist-logos/woesum.jpeg";

const AboutPage = () => {
    return (
        <div className="about-page-container">
            <div className="about-page-text-wrap">
                <h1>About Hashim</h1>
                <p>
    Hawkchild DIY was formed by Hashim Ali at the young age of 15 in his bedroom in the Pollokshields area of Glasgow. Driven by a passion for unorthodox, innovative and interesting music and art forms, the project started off as an events promoting project. As progression continued and the formation of relationships with artists across the globe had snowballed, Hawkchild DIY developed and diversified to go on to release records, producing full scale professional concerts, club nights and European tours along with radio appearances and DJ sets. In 2018, we see the hobby and passion of a school boy mature into a driving force for independent music and art on a larger scale.
                </p>
            </div>
            <div className="strategic-partners-container">
                <h1>Previous Guests</h1>
                <div className="logo-container">
                    <img id="evian-christ-logo" src={EvianChristLogo} alt="Evian Christ logo"/>
                    <img src={Dark0Logo} alt="Dark0 logo"/>
                    <img id="yung-lean-logo" src={YungLeanLogo} alt="Yung Lean logo"/>
                    <img id="marky-b-logo" src={MarkyBLogo} alt="Marky B logo"/>
                    <img id="seretide-logo" src={SeretideLogo} alt="Seretide logo"/>
                    <img id="woesum-logo" src={WoesumLogo} alt="Woesum logo"/>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;

