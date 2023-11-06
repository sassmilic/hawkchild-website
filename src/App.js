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
            <button>contact</button>
            <button>events</button>
            <button>$hstkkytkky</button>
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
