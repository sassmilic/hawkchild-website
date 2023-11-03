import React, { useEffect, useState, useRef } from 'react';
import './reset.css';
import './App.css';
import EmptyScreen from './components/EmptyScreen';
import PhotoCollage from './components/PhotoCollage';
import InvertAndPixelizeFilter from './components/InvertAndPixelizeFilter';

function App() {
  
    const titleAspectRatio = 88 / 679.665; // hardcoded from SVG file
    const [maskPosition, setMaskPosition] = useState({ x: 0, y: 0 });

    // Define a debounce function
    function debounce(func, wait) {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    }

    useEffect(() => {
        const adjustMaskPosition = () => {
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const maskHeight = titleAspectRatio * viewportWidth;
            const centerY = `${scrollTop + (viewportHeight / 2) - (maskHeight / 2)}px`;
            setMaskPosition({ x: 0, y: centerY});
        };

        // Debounce the adjustMaskPosition function
        const debouncedAdjustMaskPosition = debounce(adjustMaskPosition, 50);

        adjustMaskPosition(); 

        // Add event listeners using the debounced function
        window.addEventListener('scroll', debouncedAdjustMaskPosition);
        window.addEventListener('resize', debouncedAdjustMaskPosition);

        return () => {
            // Remove the event listeners using the debounced function
            window.removeEventListener('scroll', debouncedAdjustMaskPosition);
            window.removeEventListener('resize', debouncedAdjustMaskPosition);
        };
    }, []);

    return (
        <>
        <div className="title-svg">
            <img src="/hawkchild_diy.svg" />
        </div>
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
