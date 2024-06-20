import React, { useEffect, useRef, useState } from "react";
import { addEffect } from "@react-three/fiber";
import Lenis from "@studio-freight/lenis";
import { Helmet } from "react-helmet";
import ImageGrid from "../components/ImageGrid/ImageGrid";
import PhoneFrame from "../components/PhoneFrame";
import SoundCloudPlayer from "../components/SoundCloudPlayer/SoundCloudPlayer2";
import "./Home.css";

import DiyText from "../assets/title_text_diy.svg";
import HawkText from "../assets/title_text_hawk.svg";
import ChildText from "../assets/title_text_child.svg";

const lenis = new Lenis();
addEffect((t) => lenis.raf(t));

function Home() {
  const cursorRef = useRef(null);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current && !isHidden) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };
    const handleMouseEnter = () => {
      setIsHidden(true);
    };

    const handleMouseLeave = () => {
      setIsHidden(false);
    };

    document.addEventListener("mousemove", handleMouseMove);

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", handleMouseEnter);
      button.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);

      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", handleMouseEnter);
        button.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isHidden]);

  return (
    <>
      <Helmet>
        <link rel="preload" href={DiyText} as="image" type="image/svg+xml" />
        <link rel="preload" href={HawkText} as="image" type="image/svg+xml" />
        <link rel="preload" href={ChildText} as="image" type="image/svg+xml" />
      </Helmet>
      <div className="home-container">
        {!isHidden && (
          <div ref={cursorRef} id="custom-cursor">
            <span className="arrows">↑</span>
            <span className="scroll-text">SCROLL</span>
            <span className="arrows">↓</span>
          </div>
        )}
        <div className="background-noise"></div>
        <div className="viewport">
          <div className="title-text hawk-svg">
            <img src={HawkText} alt="HAWK" />
          </div>
          <div className="title-text diy-svg">
            <img src={DiyText} alt="DIY" />
          </div>
          <ImageGrid />
          <div className="title-text child-svg">
            <img src={ChildText} alt="CHILD" />
          </div>
        </div>
        <PhoneFrame videoUrl="https://www.w3schools.com/html/mov_bbb.mp4" />
        <div className="marquee-container">
          <SoundCloudPlayer />
        </div>
      </div>
      {/*<SimpleFooter />*/}
    </>
  );
}

export default Home;
