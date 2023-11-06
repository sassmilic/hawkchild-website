import React, { useEffect, useState, useRef } from 'react';
import './reset.css';
import './App.css';
import PhotoCollage from './components/PhotoCollage';
import HawkchildText from './assets/hawkchild_diy.svg';

function App() {
  
    return (
        <div className="main">
            <div className="title-svg">
                <img src={HawkchildText} alt="HAWKCHILD   DIY"/>
            </div>
            <PhotoCollage className="background"/>
        </div>
    );
}

export default App;
