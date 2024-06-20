import React from "react";
import { addEffect } from "@react-three/fiber";
import Lenis from "@studio-freight/lenis";
import { Helmet } from "react-helmet";
import ImageGrid from "../components/ImageGrid/ImageGrid";
import PhoneFrame from "../components/PhoneFrame";
import SoundCloudPlayer from "../components/SoundCloudPlayer/SoundCloudPlayer";
import "./Home.css";

import DiyText from "../assets/title_text_diy.svg";
import HawkText from "../assets/title_text_hawk.svg";
import ChildText from "../assets/title_text_child.svg";

const lenis = new Lenis();
addEffect((t) => lenis.raf(t));

function Home() {
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

  const pics = [
    "/media/evian.gif",
    "/media/markyb.png",
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
  */

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
      {/*<SimpleFooter />*/}
    </>
  );
}

export default Home;
