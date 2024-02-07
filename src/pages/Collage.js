import React, { useEffect, useRef } from 'react';
import './collage.css';

import HawkchildText from '../assets/hawkchild_diy.svg';

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

const CollagePage = () => {
  const vRef1 = useRef(null);
  const vRef2 = useRef(null);
  
  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        document.querySelectorAll('.parallax-layer').forEach(layer => {
          const speed = 1 / parseFloat(layer.getAttribute('data-speed'));
          const distance = window.pageYOffset;
          layer.style.transform = `translateY(calc(${distance * speed} * 1px))`;
        });
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Set video playback rate
  useEffect(() => {
    if (vRef1.current) {
      vRef1.current.playbackRate = 0.5;
    }
    if (vRef2.current) {
      vRef2.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <>

    <div className="title-svg">
        <img src={HawkchildText} alt="HAWKCHILD DIY"/>
    </div>

    <div className="parallax">

      <div className="parallax-layer layer1" data-speed="2">
        <video ref={vRef1} autoPlay loop muted>
          <source src={v1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video ref={vRef2} autoPlay loop muted>
          <source src={v11} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video ref={vRef2} autoPlay loop muted>
          <source src={v2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video autoPlay loop muted>
          <source src={v3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video autoPlay loop muted>
          <source src={v4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video autoPlay loop muted>
          <source src={v5} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video autoPlay loop muted>
          <source src={v6} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

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

      <div className="parallax-layer layer2" data-speed="1.01">
        <img src={p1}></img>
      </div>

    </div>
    </>
  );
};

export default CollagePage;

