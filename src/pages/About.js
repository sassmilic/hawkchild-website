import React from 'react';
import './About.css';

import EvianChristLogo from "./../assets/artist-logos/evian-christ.png";
import Dark0Logo from "./../assets/artist-logos/dark0.jpeg";

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
                <h1>Strategic Partners</h1>
                <div className="logo-container">
                    <img src={EvianChristLogo} alt="Evian Christ logo"/>
                    <img src={Dark0Logo} alt="Dark0 logo"/>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;

