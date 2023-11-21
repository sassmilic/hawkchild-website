import React, { useEffect, useState, useRef } from 'react';
import '../reset.css';
import './Home.css';
import PhotoCollage from './../components/PhotoCollage';
import HawkchildText from './../assets/hawkchild_diy.svg';
import Logo from './../assets/logo.jpeg';

function Home() {
    const [isLoading, setLoading] = useState(true);

    const handleLoadComplete = () => {
        setLoading(false);
    };

    return (
        <>
            {isLoading && <div className="loading">Loading...</div>}
            <div className={`main ${isLoading ? 'hidden' : ''}`}>
                <div className="title-svg">
                    <img src={HawkchildText} alt="HAWKCHILD DIY"/>
                </div>
                <PhotoCollage onLoadComplete={handleLoadComplete} />
            </div>
        </>
    );
}

export default Home;
