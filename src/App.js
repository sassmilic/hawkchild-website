import React, { useEffect, useState, useRef } from 'react';
import './reset.css';
import './App.css';
import PhotoCollage from './components/PhotoCollage';
import HawkchildText from './assets/hawkchild_diy.svg';
import Logo from './assets/logo.jpeg';

function App() {
  
    return (
        <>
        <nav className="navbar">
            <div className="left">
                <button>about</button>
                <div className="empty"></div>
                <button>events</button>
                <div className="empty"></div>
                <button>$hstkkytkky</button>
            </div>
            <div className="right">
                <div className="empty"></div>
                <button>contact</button>
            </div>
        </nav>
        <div className="main">
            <div className="title-svg">
                <img src={HawkchildText} alt="HAWKCHILD   DIY"/>
            </div>
            <PhotoCollage />
            <footer className="footer">
                <img src={Logo} alt="Logo" className="footer-logo"/>
            </footer>
        </div>
        </>
    );
}

export default App;
