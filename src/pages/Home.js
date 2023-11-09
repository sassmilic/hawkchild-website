import React, { useEffect, useState, useRef } from 'react';
import '../reset.css';
import './Home.css';
import PhotoCollage from './../components/PhotoCollage';
import HawkchildText from './../assets/hawkchild_diy.svg';
import Logo from './../assets/logo.jpeg';

function Home() {

    return (
        <>
        <div className="main">
            <div className="title-svg">
                <img src={HawkchildText} alt="HAWKCHILD   DIY"/>
            </div>
            <PhotoCollage />
        </div>
        </>
    );
}

export default Home;
