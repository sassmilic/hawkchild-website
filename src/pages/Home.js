import React, { useEffect, useState, useRef } from 'react';
import '../reset.css';
import './Home.css';
import LoadingPage from './../components/LoadingPage';
import PhotoCollage from './../components/PhotoCollage';
import HawkchildText from './../assets/hawkchild_diy.svg';
import Logo from './../assets/logo.jpeg';

function Home() {
    const [isLoading, setLoading] = useState(true);
    const [loadingPercentage, setLoadingPercentage] = useState(0);

    const handleLoadComplete = () => {
        setLoading(false);
    };

    const handleProgress = (percentage) => {
        setLoadingPercentage(percentage);
    };

    return (
        <div className="home-container">
            <LoadingPage
                isVisible={isLoading}
                percentage={loadingPercentage}
            />
            <div className={`main ${isLoading ? 'hidden' : ''}`}>
                <div className="title-svg">
                    <img src={HawkchildText} alt="HAWKCHILD DIY"/>
                </div>
                <PhotoCollage
                    onLoadComplete={handleLoadComplete}
                    onProgress={handleProgress}
                />
            </div>
        </div>
    );
}

export default Home;
