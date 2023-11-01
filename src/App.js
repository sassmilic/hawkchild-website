import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import EmptyScreen from './components/EmptyScreen';
import { ReactComponent as TitleSVG } from './assets/hawkchild_diy.svg'
import PhotoCollage from './components/PhotoCollage';
import PixelateFilter from './components/PixelateFilter';
import InvertFilter from './components/InvertFilter';

function App() {
   
    const svgRef = useRef(null); // for measuring dimensions of title
    const [maskPosition, setMaskPosition] = useState({ x: 0, y: 0 });
  
    const titleAspectRatio = 90.41 / 1094.483; // hardcoded from SVG file

    useEffect(() => {
        const adjustMaskPosition = () => {
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const maskHeight = titleAspectRatio * viewportWidth;
            const centerY = `${scrollTop + (viewportHeight / 2) - (maskHeight / 2)}px`;
            console.log(maskHeight);
            console.log(centerY);
            setMaskPosition({ x: 0, y: centerY});
        };

        window.addEventListener('scroll', adjustMaskPosition);
        window.addEventListener('resize', adjustMaskPosition);

        // Clean up event listeners on component unmount
        return () => {
            window.removeEventListener('scroll', adjustMaskPosition);
            window.removeEventListener('resize', adjustMaskPosition);
        };
    }, []);


    return (
	<div className="main">
        // `TitleSVG` is rendered off-screen in order to get dimensions.
        <TitleSVG style={{ position: 'absolute', top: '-9999px' }} ref={svgRef} />
	    <PixelateFilter />
	    <InvertFilter />
        /*
	    <div className="background">
            <EmptyScreen percentage={50} />
            <PhotoCollage />
            <EmptyScreen percentage={100} />
	    </div>
        */
	    <div className="background2" style={{ maskPosition: `${maskPosition.x} ${maskPosition.y}`, WebkitMaskPosition: `${maskPosition.x} ${maskPosition.y}` }}>
            <EmptyScreen percentage={50} />
            <PhotoCollage />
            <EmptyScreen percentage={100} />
	    </div>
	</div>
    );
}

export default App;
