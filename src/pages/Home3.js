import React, { useEffect, useRef } from "react";
import LogoMarquee from "../components/TitleAndMarquee/LogoMarquee";
import ContentLayer from "../components/ContentLayer";
import "./Home3.css";

import DiyText from "../assets/title_text_diy.svg";
import HawkText from "../assets/title_text_hawk.svg";
import ChildText from "../assets/title_text_child.svg";

function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

function Home2() {
   const requestID = useRef(null);  // for animation frame requests

  const columns = new Map([
    [1, { ref: useRef(null), speed: 1 }],
    [2, { ref: useRef(null), speed: 1.5 }],
    [3, { ref: useRef(null), speed: -1.5 }],
  ]);

  const setPositionInitially = (ref) => {
    if (!ref.current) return;
    const elementHeight = ref.current.offsetHeight;
    const initialOffset = -elementHeight;
    ref.current.style.transform = `translateY(${initialOffset}px)`;
  };


  /* TODO: fix bug when opposite scrolling AND speed=1 */
  const handleScroll = () => {
    if (requestID.current) cancelAnimationFrame(requestID.current);
    console.log("window.scrollY:", window.scrollY);
    requestID.current = requestAnimationFrame(() => {
        columns.forEach((col) => {
          if (col.ref.current) {
            let totalOffset = 0;
            if (col.speed <= 0) {
              const height = col.ref.current.offsetHeight;
              /* 
               * Note: The 2x multiplier is required to "switch" in other direction
               *       Consider when `col.speed` is -1.
               */
              totalOffset = 2 * -col.speed * window.scrollY - height;
            } else if (col.speed === 1) {
                totalOffset = 0;
            } else {
              totalOffset = -window.scrollY * col.speed;
            }
            col.ref.current.style.transform = `translateY(${totalOffset}px)`;
          }
        });
    });
  };



  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    columns.forEach((col) => {
      // initially offset all columns scrolling in opposite direction
      if (col.speed < 0) {
        setPositionInitially(col.ref);
      }
    });
    return () => {
        window.removeEventListener("scroll", handleScroll);
        if (requestID.current) cancelAnimationFrame(requestID.current);
    };
  }, []);

  const images1 = importAll(
    require.context(
      "../assets/collage/posters",
      false,
      /\.(png|jpe?g|svg|mp4|gif)$/,
    ),
  );
  const images2 = importAll(
    require.context(
      "../assets/collage/layer2",
      false,
      /\.(png|jpe?g|svg|mp4|gif)$/,
    ),
  );
  const images3 = importAll(
    require.context(
      "../assets/collage/videos",
      false,
      /\.(png|jpe?g|svg|mp4|gif)$/,
    ),
  );

  const idMap = {
    '1-2.jpg': 'evian-passport',
    '11.mp4': "oli-xl-doss-video-poster"
};

  return (
    <>
      {/* hacky duplicate title solution
    <div className="title-text hawk-svg dupe">
        <img src={HawkText} alt="HAWK"/>
    </div>
    <div className="title-text child-svg dupe">
        <img src={ChildText} alt="CHILD"/>
    </div>
    <div className="title-text diy-svg dupe">
        <img src={DiyText} alt="DIY"/>
    </div>
    */}
      <div className="background-noise"></div>
      <div className="home-container3">
        <div className="title-text diy-svg">
          <img src={DiyText} alt="DIY" />
        </div>
        {/*
        <div ref={columns.get(3).ref} className="column right-half-column">
          <ContentLayer images={images3} className="content-layer3" />
        </div>
        */}
        <div className="title-text hawk-svg">
          <img src={HawkText} alt="HAWK" />
        </div>
        <div ref={columns.get(1).ref} className="column left-full-column">
          <ContentLayer images={images1} className="content-layer1" />
        </div>
        <div ref={columns.get(2).ref} className="column right-column">
          <ContentLayer images={images2} className="content-layer2" idMap={idMap} />
        </div>
        <div className="title-text child-svg">
          <img src={ChildText} alt="CHILD" />
        </div>
        <div className="marquee-container">
          <LogoMarquee />
        </div>
      </div>
    </>
  );
}

export default Home2;
