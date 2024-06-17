import React, { useRef } from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
//import { ReactLenis } from "@studio-freight/react-lenis";
import { Helmet } from "react-helmet";
import ContentMarquee from "../components/ContentMarquee";
//import SimpleFooter from "../components/SimpleFooter";
import "./Home.css";

import DiyText from "../assets/title_text_diy.svg";
import HawkText from "../assets/title_text_hawk.svg";
import ChildText from "../assets/title_text_child.svg";

function Home() {
  const leftContainerRef = useRef(null);
  const rightContainerMediaRef = useRef(null);

  useLenis(({ scroll }) => {
    console.log("scroll", scroll);
    const rightContainer = rightContainerMediaRef.current;

    if (rightContainer) {
      rightContainer.style.transform = `translateY(calc(-100% + 100vh + ${2 * scroll}px)`;
      return;
    }
  });

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
      <ReactLenis
        options={{
          lerp: 0.1,
          duration: 1.5,
          smoothTouch: true,
        }}
        root
      >
        <Helmet>
          <link rel="preload" href={DiyText} as="image" type="image/svg+xml" />
          <link rel="preload" href={HawkText} as="image" type="image/svg+xml" />
          <link
            rel="preload"
            href={ChildText}
            as="image"
            type="image/svg+xml"
          />
        </Helmet>

        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <filter id="pixelate1" x="0" y="0">
            <feImage
              xlinkHref="data:image/svg+xml;base64,...base64encodedSVG..."
              result="img"
            />

            <feFlood x="0" y="0" height="10" width="10" />
            <feComposite width="20" height="20" />
            <feTile result="a" />
            <feComposite in="SourceGraphic" in2="a" operator="in" />
            <feMorphology operator="dilate" radius="10" />
          </filter>
          <filter id="pixelate2" x="0" y="0">
            <feFlood x="0" y="0" height="8" width="8" />
            <feComposite width="16" height="16" />
            <feTile result="a" />
            <feComposite in="SourceGraphic" in2="a" operator="in" />
            <feMorphology operator="dilate" radius="8" />
          </filter>
          <filter id="pixelate3" x="0" y="0">
            <feFlood x="0" y="0" height="6" width="6" />
            <feComposite width="12" height="12" />
            <feTile result="a" />
            <feComposite in="SourceGraphic" in2="a" operator="in" />
            <feMorphology operator="dilate" radius="6" />
          </filter>
          <filter id="pixelate4" x="0" y="0">
            <feFlood x="0" y="0" height="5" width="5" />
            <feComposite width="10" height="10" />
            <feTile result="a" />
            <feComposite in="SourceGraphic" in2="a" operator="in" />
            <feMorphology operator="dilate" radius="5" />
          </filter>
          <filter id="pixelate5" x="0" y="0">
            <feFlood x="0" y="0" height="4" width="4" />
            <feComposite width="8" height="8" />
            <feTile result="a" />
            <feComposite in="SourceGraphic" in2="a" operator="in" />
            <feMorphology operator="dilate" radius="4" />
          </filter>
          <filter id="pixelate6" x="0" y="0">
            <feFlood x="0" y="0" height="3" width="3" />
            <feComposite width="6" height="6" />
            <feTile result="a" />
            <feComposite in="SourceGraphic" in2="a" operator="in" />
            <feMorphology operator="dilate" radius="3" />
          </filter>
          <filter id="pixelate7" x="0" y="0">
            <feFlood x="0" y="0" height="2" width="2" />
            <feComposite width="4" height="4" />
            <feTile result="a" />
            <feComposite in="SourceGraphic" in2="a" operator="in" />
            <feMorphology operator="dilate" radius="2" />
          </filter>
          <filter id="pixelate8" x="0" y="0">
            <feFlood x="0" y="0" height="1.5" width="1.5" />
            <feComposite width="3" height="3" />
            <feTile result="a" />
            <feComposite in="SourceGraphic" in2="a" operator="in" />
            <feMorphology operator="dilate" radius="1.5" />
          </filter>
          <filter id="pixelate9" x="0" y="0">
            <feFlood x="0" y="0" height="1" width="1" />
            <feComposite width="2" height="2" />
            <feTile result="a" />
            <feComposite in="SourceGraphic" in2="a" operator="in" />
            <feMorphology operator="dilate" radius="1" />
          </filter>
          <filter id="pixelate10" x="0" y="0">
            <feFlood x="0" y="0" height="0.5" width="0.5" />
            <feComposite width="1" height="1" />
            <feTile result="a" />
            <feComposite in="SourceGraphic" in2="a" operator="in" />
            <feMorphology operator="dilate" radius="0.5" />
          </filter>
        </svg>

        <div className="background-noise"></div>
        <div className="viewport">
          <div
            className="left-container"
            ref={leftContainerRef}
            style={{ backgroundColor: "white" }}
          >
            <div className="title-text hawk-svg">
              <img src={HawkText} alt="HAWK" />
            </div>
            <ContentMarquee mediaPaths={posters} />
          </div>
          <div className="right-container" style={{ backgroundColor: "white" }}>
            <div
              ref={rightContainerMediaRef}
              className="right-container-media"
              style={{ height: "100%" }}
            >
              <div className="column right-column">
                <ContentMarquee mediaPaths={pics} direction="down" />
              </div>
            </div>
            {/*
            <div className="column right-half-column">
              <ContentMarquee mediaPaths={gifs} containerHeight="50vw" />
            </div>
            */}
            <div className="title-text child-svg">
              <img src={ChildText} alt="CHILD" />
            </div>
            <div className="title-text diy-svg">
              <img src={DiyText} alt="DIY" />
            </div>
          </div>
          <div className="marquee-container">{/*<LogoMarquee />*/}</div>
          {/*<SimpleFooter />*/}
        </div>
      </ReactLenis>
    </>
  );
}

export default Home;
