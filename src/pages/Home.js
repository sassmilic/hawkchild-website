import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../reset.css';
import './Home.css';
import PhotoCollage from './../components/PhotoCollage';
import HawkchildText from './../assets/hawkchild_diy.svg';
import Logo from './../assets/logo.jpeg';

function Home() {

    const navigate = useNavigate();

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
                <button onClick={() => navigate('/contact')}>
                    contact
                </button>
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

export default Home;
