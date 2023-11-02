import React, { useEffect, useState, useRef } from 'react';
import './reset.css';
import './App.css';
import EmptyScreen from './components/EmptyScreen';
import PhotoCollage from './components/PhotoCollage';
import InvertAndPixelizeFilter from './components/InvertAndPixelizeFilter';

function App() {
  
    const titleAspectRatio = 88 / 679.665; // hardcoded from SVG file
    const [maskPosition, setMaskPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const adjustMaskPosition = () => {
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const maskHeight = titleAspectRatio * viewportWidth;
            const centerY = `${scrollTop + (viewportHeight / 2) - (maskHeight / 2)}px`;
            setMaskPosition({ x: 0, y: centerY});
        };

        adjustMaskPosition(); 

        window.addEventListener('scroll', adjustMaskPosition);
        window.addEventListener('resize', adjustMaskPosition);

        return () => {
            window.removeEventListener('scroll', adjustMaskPosition);
            window.removeEventListener('resize', adjustMaskPosition);
        };
    }, []);


    return (
        <>
        <PhotoCollage id="foreground"/>
        <InvertAndPixelizeFilter />
        <PhotoCollage
            id="background"
            style={{
                maskPosition: `${maskPosition.x} ${maskPosition.y}`,
                WebkitMaskPosition: `${maskPosition.x} ${maskPosition.y}`
            }}
            />
        </>
    );
}

export default App;
