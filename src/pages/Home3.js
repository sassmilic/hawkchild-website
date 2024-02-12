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
    [1, { ref: useRef(null), speed: 0.5, opposite: false }],
    [2, { ref: useRef(null), speed: 1, opposite: false }],
    [3, { ref: useRef(null), speed: 3, opposite: true }],
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

    requestID.current = requestAnimationFrame(() => {
        columns.forEach((column) => {
          if (column.ref.current) {
            let totalOffset = 0;
            if (column.speed === 1) {
              totalOffset = 0;
            } else if (column.opposite) {
              const elementHeight = column.ref.current.offsetHeight;
              const initialOffset = -elementHeight;
              totalOffset = initialOffset + window.scrollY * column.speed;
            } else {
              totalOffset = window.scrollY * column.speed;
            }
            column.ref.current.style.transform = `translateY(${totalOffset}px)`;
          }
        });
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    columns.forEach((column) => {
      if (column.opposite) {
        setPositionInitially(column.ref);
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
      /\.(png|jpe?g|svg|mp4)$/,
    ),
  );
  const images2 = importAll(
    require.context(
      "../assets/collage/layer2",
      false,
      /\.(png|jpe?g|svg|mp4)$/,
    ),
  );
  const images3 = importAll(
    require.context(
      "../assets/collage/videos",
      false,
      /\.(png|jpe?g|svg|mp4)$/,
    ),
  );

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
        <div ref={columns.get(3).ref} className="column right-half-column">
          <ContentLayer images={images3} className="content-layer3" />
        </div>
        <div className="title-text hawk-svg">
          <img src={HawkText} alt="HAWK" />
        </div>
        <div ref={columns.get(1).ref} className="column left-full-column">
          <ContentLayer images={images1} className="content-layer1" />
        </div>
        <div ref={columns.get(2).ref} className="column right-column">
          <ContentLayer images={images2} className="content-layer2" />
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
