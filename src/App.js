import React, { useEffect, useState, useRef } from 'react';
import './reset.css';
import './App.css';
import PhotoCollage from './components/PhotoCollage';
import HawkchildText from './assets/hawkchild_diy.svg';

function App() {
  
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

export default App;
