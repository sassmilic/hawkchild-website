import React, { useEffect, useState } from 'react';
import './App.css';
import EmptyScreen from './components/EmptyScreen';
import { ReactComponent as TitleSVG } from './assets/hawkchild_diy.svg'
import PhotoCollage from './components/PhotoCollage';
import PixelateFilter from './components/PixelateFilter';
import InvertFilter from './components/InvertFilter';

function App() {
    
    const [maskPosition, setMaskPosition] = useState({ x: 'center', y: 'center' });
    
    useEffect(() => {
        const adjustMaskPosition = () => {
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            const centerX = `${viewportWidth / 2}px`;
            const centerY = `${scrollTop + (viewportHeight / 2)}px`;

            setMaskPosition({ x: centerX, y: centerY });
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
	    <PixelateFilter />
	    <InvertFilter />
	    { /* <TitleSVG className="title" /> */}
	    <div className="background">
		<EmptyScreen percentage={50} />
		<PhotoCollage />
		<EmptyScreen percentage={100} />
	    </div>
	    <div className="background2" style={{ maskPosition: `${maskPosition.x} ${maskPosition.y}`, WebkitMaskPosition: `${maskPosition.x} ${maskPosition.y}` }}>
		<EmptyScreen percentage={50} />
		<PhotoCollage />
		<EmptyScreen percentage={100} />
	    </div>
	</div>
    );
}

export default App;
