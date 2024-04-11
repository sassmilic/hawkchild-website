import React, { useState, useEffect, useRef } from "react";
import LogoMarquee from "../components/TitleAndMarquee/LogoMarquee";
import ContentLayer from "../components/ContentLayer";
import ContentMarquee from "../components/ContentMarquee"
import "./Home4.css";

import DiyText from "../assets/title_text_diy.svg";
import HawkText from "../assets/title_text_hawk.svg";
import ChildText from "../assets/title_text_child.svg";

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function Home2() {
  const columns = new Map([
    [1, { ref: useRef(null), speed: 0.5 }],
    [2, { ref: useRef(null), speed: 1 }],
    [3, { ref: useRef(null), speed: -1 }],
  ]);

  const setPositionInitially = (ref) => {
    if (!ref.current) return;
    const elementHeight = ref.current.offsetHeight;
    const initialOffset = -elementHeight;
    ref.current.style.transform = `translateY(${initialOffset}px)`;
  };

  function importAll(r) {
    let images = {};
    r.keys().map((item) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  /*
  // Import high-resolution images/gifs/videos
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
  // Import compressed images/gifs/videos
  const cmpImages1 = importAll(
    require.context(
      "../assets/collage/posters/compressed",
      false,
      /\.(png|jpe?g|svg)$/,
    ),
  );
  const cmpImages2 = importAll(
    require.context(
      "../assets/collage/layer2/compressed",
      false,
      /\.(png|jpe?g|svg)$/,
    ),
  );
  const cmpImages3 = importAll(
    require.context(
      "../assets/collage/videos/compressed",
      false,
      /\.(png|jpe?g|svg)$/,
    ),
  );
  */

  function mergeImages(highResImages, compressedImages) {
    const merged = {};
    Object.keys(highResImages).forEach((key) => {
      merged[key] = {
        full: highResImages[key],
        compressed: compressedImages[key] || highResImages[key], // Fallback to high-res if compressed version is missing
      };
    });
    return merged;
  }

  /*
  // Merge high-resolution and compressed images
  const imgs1 = mergeImages(images1, cmpImages1);
  // Merge high-resolution and compressed images
  const imgs2 = mergeImages(images2, cmpImages2);
  // Merge high-resolution and compressed images
  const imgs3 = mergeImages(images3, cmpImages3);
  */

  const idMap = {
    "1-2.jpg": "evian-passport",
    "11.mp4": "oli-xl-doss-video-poster",
    "21.mp4": "tp-decade-video-poster",
    "24.mp4": "taleb-video-poster",
  };

  const images1 = importAll(require.context('../assets/collage/posters', false, /\.(png|jpe?g|svg)$/));
  const imagesArray1 = Object.values(images1).map(src => ({ src }));
  const images2 = importAll(require.context('../assets/collage/layer2', false, /\.(png|jpe?g|svg)$/));
  const imagesArray2 = Object.values(images2).map(src => ({ src }));
  const images3 = importAll(require.context('../assets/collage/videos', false, /\.(gif|mp4)$/));
  const imagesArray3 = Object.values(images3).map(src => ({ src }));

  const posters = [
      '/media/hi-res/posters/poster_evian-christ_2024.jpeg',
      '/media/hi-res/posters/poster_markyb-seretide_2024.jpeg',
      '/media/hi-res/posters/poster_skyh1-woesum_2024.jpeg',
      '/media/hi-res/posters/poster_affxworks-clouds_2023.jpeg',
      '/media/hi-res/posters/poster_dark0-femi_2022.jpeg',
      '/media/hi-res/posters/poster_doss-olixl_2022.jpeg',
      '/media/hi-res/posters/poster_casualgabberz-cloudz_2022.jpeg',
      '/media/hi-res/posters/poster_malibu-mechatok_2022.jpeg',
      '/media/hi-res/posters/poster_fundraiser_2021.jpeg',
      '/media/hi-res/posters/poster_tp10_2019.jpeg',
      '/media/hi-res/posters/poster_nassim_2018.jpeg',
      '/media/hi-res/posters/poster_tp6_2017.jpeg',
      '/media/hi-res/posters/poster_dark0_2017.jpeg',
      '/media/hi-res/posters/poster_yunglean_2016.jpeg',
      '/media/hi-res/posters/poster_dg_2016.png',
      '/media/hi-res/posters/poster_kamixlo-mssingno_2016.jpeg',
      '/media/hi-res/posters/poster_yunglean_2014.jpeg'
  ];

  const pics = [
      '/media/edited-images/evian.gif',
      '/media/edited-images/sooakxa.png',
      '/media/edited-images/kamixlo-woesum.jpg',
      '/media/edited-images/strobes.jpg',
      '/media/edited-images/dark0-dog.jpg',
      '/media/edited-images/doss-crowd.jpg',
      '/media/edited-images/cg-leigh.jpg',
      '/media/edited-images/malibu-mechatok.jpg',
      '/media/edited-images/guy.jpg',
      '/media/edited-images/subcity.jpeg',
      '/media/edited-images/pizza.jpeg',
      '/media/edited-images/scarves.jpeg',
      '/media/edited-images/tp-team.png',
      '/media/edited-images/dark0-etal.jpg',
      '/media/edited-images/yunglean-news.jpg',
      '/media/edited-images/dg.jpg',
      '/media/edited-images/kamixlo.jpg',
  ]

  return (
    <>
      <div className="background-noise"></div>
      {/*<div className="viewport" ref={viewportRef}>*/}
      <div className="viewport">
        <div className="footer-logo2">
            <img src="/logo2.png" />
        </div>
        <div className="title-text diy-svg">
          <img src={DiyText} alt="DIY" />
        </div>
        <div ref={columns.get(3).ref} className="column right-half-column">
            {/*<ContentMarquee media={imagesArray3} speed="90s" />*/}
        </div>
        <div className="title-text hawk-svg">
          <img src={HawkText} alt="HAWK" />
        </div>
        <div ref={columns.get(1).ref} className="column left-full-column">
            {/*<ContentMarquee media={imagesArray1} speed="90s" />*/}
            <ContentMarquee mediaPaths={posters} speed="120s" />
        </div>
        <div ref={columns.get(2).ref} className="column right-column">
            {/*<ContentMarquee media={imagesArray2} speed="120s" />*/}
            <ContentMarquee mediaPaths={pics} direction="down" speed="120s" />
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
