import React, { useEffect, useState, useRef } from 'react';
import '../reset.css';
import './Home.css';
import LoadingPage from './../components/LoadingPage';
import PhotoCollage from './../components/PhotoCollage';
import HawkchildText from './../assets/hawkchild_diy.svg';
import Logo from './../assets/logo.jpeg';

function Home() {
    const [isLoading, setLoading] = useState(true);

    const handleLoadComplete = () => {
        setLoading(false);
    };

    return (
        <div className="home-container">
            <LoadingPage isVisible={isLoading} />
            <div className={`main ${isLoading ? 'hidden' : ''}`}>
                <div className="title-svg">
                    <img src={HawkchildText} alt="HAWKCHILD DIY"/>
                </div>
                <PhotoCollage onLoadComplete={handleLoadComplete} />
            </div>
        </div>
    );
}

export default Home;
