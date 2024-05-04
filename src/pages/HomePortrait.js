import React from "react";
import { Helmet } from "react-helmet";
import ContentMarquee from "../components/ContentMarquee";
import LogoMarquee from "../components/LogoMarquee";
import SimpleFooter from "../components/SimpleFooter";
import "./HomePortrait.css";

import DiyText from "../assets/title_text_diy.svg";
import HawkText from "../assets/title_text_hawk.svg";
import ChildText from "../assets/title_text_child.svg";

function Home() {
  const MARQUEE_SPEED = "180s";
  /*
  const idMap = {
    "1-2.jpg": "evian-passport",
    "11.mp4": "oli-xl-doss-video-poster",
    "21.mp4": "tp-decade-video-poster",
    "24.mp4": "taleb-video-poster",
  };
  */

  //const MARQUEE_SPEED = "180s";

  /*
  const posters = [
    "/media/poster_evian-christ_2024.jpeg",
    "/media/poster_markyb-seretide_2024.jpeg",
    "/media/poster_skyh1-woesum_2024.jpeg",
    "/media/poster_affxworks-clouds_2023.jpeg",
    "/media/poster_dark0-femi_2022.jpeg",
    "/media/poster_doss-olixl_2022.jpeg",
    "/media/poster_casualgabberz-cloudz_2022.jpeg",
    "/media/poster_malibu-mechatok_2022.jpeg",
    "/media/poster_fundraiser_2021.jpeg",
    "/media/poster_tp10_2019.jpeg",
    "/media/poster_nassim_2018.jpeg",
    "/media/poster_tp6_2017.jpeg",
    "/media/poster_dark0_2017.jpeg",
    "/media/poster_yunglean_2016.jpeg",
    "/media/poster_dg_2016.png",
    "/media/poster_kamixlo-mssingno_2016.jpeg",
    "/media/poster_yunglean_2014.jpeg",
    "/media/poster_yunglean_2014.jpeg",
  ];
  */
  const pics = [
    "/media/evian.gif",
    "/media/sooakxa.png",
    "/media/kamixlo-woesum.jpg",
    "/media/strobes.jpg",
    "/media/dark0-dog.jpg",
    "/media/doss-crowd.jpg",
    "/media/cg-leigh.jpg",
    "/media/malibu-mechatok.jpg",
    "/media/guy.jpg",
    "/media/subcity.jpeg",
    "/media/pizza.jpeg",
    "/media/scarves.jpeg",
    "/media/dark0-etal.jpg",
    "/media/yunglean-news.jpg",
    "/media/dg.jpg",
    "/media/kamixlo.jpg",
    "/media/tp-team.png",
    "/media/tp-team.png",
  ];

  /*
  const gifs = [
    "/media/4.gif",
    "/media/1.gif",
    "/media/2.gif",
    "/media/3.gif",
    "/media/5.gif",
    "/media/6.gif",
    "/media/15.gif",
    "/media/12.gif", //**
    "/media/7.gif",
    "/media/8.gif",
    "/media/9.gif",
    "/media/10.gif",
    "/media/11.gif",
    "/media/12.gif", //**
    "/media/13.gif", //**
    "/media/14.gif",
    "/media/16.gif",
    "/media/17.gif",
    "/media/18.gif",
    "/media/19.gif",
    "/media/20.gif",
    "/media/21.gif",
    "/media/22.gif",
    "/media/1.gif",
    "/media/4.gif",
    "/media/2.gif",
    "/media/3.gif",
    "/media/5.gif",
    "/media/6.gif",
    "/media/15.gif",
    "/media/12.gif", //**
    "/media/7.gif",
    "/media/8.gif",
    "/media/9.gif",
    "/media/10.gif",
    "/media/11.gif",
    "/media/12.gif", //**
    "/media/13.gif", //**
    "/media/14.gif",
    "/media/16.gif",
    "/media/17.gif",
    "/media/18.gif",
    "/media/19.gif",
    "/media/20.gif",
    "/media/21.gif",
    "/media/22.gif",
  ];
  */

  return (
    <>
      <Helmet>
        <link rel="preload" href={DiyText} as="image" type="image/svg+xml" />
        <link rel="preload" href={HawkText} as="image" type="image/svg+xml" />
        <link rel="preload" href={ChildText} as="image" type="image/svg+xml" />
      </Helmet>
      <div className="background-noise"></div>
      <div className="viewport-portrait">
        <div className="title-text hawk-svg">
          <img src={HawkText} alt="HAWK" />
        </div>
        <div className="column right-col">
          <ContentMarquee
            mediaPaths={pics}
            containerHeight="200vw"
            direction="up"
            speed={MARQUEE_SPEED}
            lazy={false}
          />
        </div>
        <SimpleFooter />
        <div className="title-text child-svg">
          <img src={ChildText} alt="CHILD" />
        </div>
        <div className="marquee-container">
          <LogoMarquee />
        </div>
        <div className="title-text diy-svg">
          <img src={DiyText} alt="DIY" />
        </div>
      </div>
    </>
  );
}

export default Home;
