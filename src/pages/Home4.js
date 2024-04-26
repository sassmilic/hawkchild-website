import React, { useState, useEffect, useRef } from "react";
import LogoMarquee from "../components/TitleAndMarquee/LogoMarquee";
import ContentLayer from "../components/ContentLayer";
import ContentMarquee from "../components/ContentMarquee"
import "./Home4.css";

import DiyText from "../assets/title_text_diy.svg";
import HawkText from "../assets/title_text_hawk.svg";
import ChildText from "../assets/title_text_child.svg";

function Home2() {

  /*
  const idMap = {
    "1-2.jpg": "evian-passport",
    "11.mp4": "oli-xl-doss-video-poster",
    "21.mp4": "tp-decade-video-poster",
    "24.mp4": "taleb-video-poster",
  };
  */

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
      '/media/hi-res/posters/poster_yunglean_2014.jpeg',
      '/media/hi-res/posters/poster_yunglean_2014.jpeg',
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
      '/media/edited-images/dark0-etal.jpg',
      '/media/edited-images/yunglean-news.jpg',
      '/media/edited-images/dg.jpg',
      '/media/edited-images/kamixlo.jpg',
      '/media/edited-images/tp-team.png',
      '/media/edited-images/tp-team.png',
  ]

  const gifs = [
      '/media/gifs/1.gif',
      '/media/gifs/4.gif',
      '/media/gifs/2.gif',
      '/media/gifs/3.gif',
      '/media/gifs/5.gif',
      '/media/gifs/6.gif',
      '/media/gifs/15.gif',
      '/media/gifs/12.gif', //**
      '/media/gifs/7.gif',
      '/media/gifs/8.gif',
      '/media/gifs/9.gif',
      '/media/gifs/10.gif',
      '/media/gifs/11.gif',
      '/media/gifs/12.gif', //**
      '/media/gifs/13.gif', //**
      '/media/gifs/14.gif',
      '/media/gifs/16.gif',
      '/media/gifs/17.gif',
      '/media/gifs/18.gif',
      '/media/gifs/19.gif',
      '/media/gifs/20.gif',
      '/media/gifs/21.gif',
      '/media/gifs/22.gif',
      '/media/gifs/1.gif',
      '/media/gifs/4.gif',
      '/media/gifs/2.gif',
      '/media/gifs/3.gif',
      '/media/gifs/5.gif',
      '/media/gifs/6.gif',
      '/media/gifs/15.gif',
      '/media/gifs/12.gif', //**
      '/media/gifs/7.gif',
      '/media/gifs/8.gif',
      '/media/gifs/9.gif',
      '/media/gifs/10.gif',
      '/media/gifs/11.gif',
      '/media/gifs/12.gif', //**
      '/media/gifs/13.gif', //**
      '/media/gifs/14.gif',
      '/media/gifs/16.gif',
      '/media/gifs/17.gif',
      '/media/gifs/18.gif',
      '/media/gifs/19.gif',
      '/media/gifs/20.gif',
      '/media/gifs/21.gif',
      '/media/gifs/22.gif',

  ]


  return (
    <>
      <div className="background-noise"></div>
      <div className="viewport">
        <div className="title-text hawk-svg">
          <img src={HawkText} alt="HAWK" />
        </div>
        <div className="column right-half-column">
            {/* twice as fast so twice as many images */}
            <ContentMarquee mediaPaths={gifs} containerHeight="50vw" speed="180s" />
        </div>
        <div className="column left-full-column">
            <ContentMarquee mediaPaths={posters} speed="180s" />
        </div>
        <div className="column right-column">
            <ContentMarquee mediaPaths={pics} direction="down" speed="180s" />
        </div>
        <div className="simple-footer">
            <div class="footer-item" id="item-a">
                <img src="/upside-down-logo-text/diy.png" alt="DIY"/>
            </div>
            <div class="footer-item" id="item-b">
                <img src="/upside-down-logo-text/underscore.png" alt="underscore" style={{width: '100%', height: '15%'}}/>
            </div>
            <div class="footer-item" id="item-c">
                <img src="/upside-down-logo-text/hawkchild.png" alt="HAWKCHILD"/>
            </div>
        </div>
        <div className="title-text child-svg">
          <img src={ChildText} alt="CHILD" />
        </div>
        <div className="title-text diy-svg">
          <img src={DiyText} alt="DIY" />
        </div>
        <div className="marquee-container">
          <LogoMarquee />
        </div>
      </div>
    </>
  );
}

export default Home2;
