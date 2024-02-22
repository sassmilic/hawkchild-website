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
    [2, { ref: useRef(null), speed: 1.5}],
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

  // Import high-resolution images/gifs/videos
  const images1 = importAll(
    require.context("../assets/collage/posters", false, /\.(png|jpe?g|svg|mp4|gif)$/)
  );
  const images2 = importAll(
    require.context("../assets/collage/layer2", false, /\.(png|jpe?g|svg|mp4|gif)$/)
  );
  const images3 = importAll(
    require.context("../assets/collage/videos", false, /\.(png|jpe?g|svg|mp4|gif)$/)
  );
  // Import compressed images/gifs/videos
  const cmpImages1 = importAll(
    require.context("../assets/collage/posters/compressed", false, /\.(png|jpe?g|svg)$/)
  );
  const cmpImages2 = importAll(
    require.context("../assets/collage/layer2/compressed", false, /\.(png|jpe?g|svg)$/)
  );
  const cmpImages3 = importAll(
    require.context("../assets/collage/videos/compressed", false, /\.(png|jpe?g|svg)$/)
  );

  function mergeImages(highResImages, compressedImages) {
      const merged = {};
      Object.keys(highResImages).forEach(key => {
        merged[key] = {
          full: highResImages[key],
          compressed: compressedImages[key] || highResImages[key], // Fallback to high-res if compressed version is missing
        };
      });
      return merged;
    }

  // Merge high-resolution and compressed images
const imgs1 = mergeImages(images1, cmpImages1);
// Merge high-resolution and compressed images
const imgs2 = mergeImages(images2, cmpImages2);
// Merge high-resolution and compressed images
const imgs3 = mergeImages(images3, cmpImages3);

  const idMap = {
    '1-2.jpg': 'evian-passport',
    '11.mp4': 'oli-xl-doss-video-poster',
    '21.mp4': 'tp-decade-video-poster',
    '24.mp4': 'taleb-video-poster'
};

  return (
    <>
      <div className="background-noise"></div>
      <div className="home-container3">
        <div className="title-text diy-svg">
          <img src={DiyText} alt="DIY" />
        </div>
        <div ref={columns.get(3).ref} className="column right-half-column">
          <ContentLayer images={imgs3} className="content-layer3" />
        </div>
        <div className="title-text hawk-svg">
          <img src={HawkText} alt="HAWK" />
        </div>
        <div ref={columns.get(1).ref} className="column left-full-column">
          <ContentLayer images={imgs1} className="content-layer1" />
        </div>
        <div ref={columns.get(2).ref} className="column right-column">
          <ContentLayer images={imgs2} className="content-layer2" idMap={idMap} />
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
