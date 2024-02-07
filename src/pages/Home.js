import React, { useEffect, useState, useRef } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import '../reset.css';
import './Home.css';
import LoadingPage from './../components/LoadingPage';
//import PhotoCollage from './../components/PhotoCollage';
import PhotoCollage2 from './../components/PhotoCollage2';
import HawkchildText from './../assets/hawkchild_diy.svg';
import Logo from './../assets/logo.jpeg';

import v1 from '../assets/collage/2023-evian/v1.mp4';
import v2 from '../assets/collage/2023-evian/v2.mp4';
import v3 from '../assets/collage/2023-evian/v3.mp4';
import v4 from '../assets/collage/2023-evian/v4.mp4';
import v5 from '../assets/collage/2023-evian/v5.mp4';
import v6 from '../assets/collage/2023-evian/v6.mp4';
import v7 from '../assets/collage/2023-evian/v7.mp4';
import v8 from '../assets/collage/2023-evian/v8.mp4';
import v9 from '../assets/collage/2023-evian/v9.mp4';
import v10 from '../assets/collage/2023-evian/v10.mp4';
import v11 from '../assets/collage/2023-evian/evian.mp4';
import p1 from '../assets/collage/p01.jpg';

function Home() {
    const [isLoading, setLoading] = useState(false);
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
                <ParallaxProvider>
                    <div className="collage-container">

    <Parallax speed={100}>
      <div className="ccc" >
                        <video autoPlay loop muted>
                          <source src={v7} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>

                        <video autoPlay loop muted>
                          <source src={v8} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>

                        <video autoPlay loop muted>
                          <source src={v9} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>

                        <video autoPlay loop muted>
                          <source src={v10} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>

                    </div>
        </Parallax>
                    </div>

                </ParallaxProvider>
            </div>
        </div>
    );
}

export default Home;
