import React from "react";
import { addEffect } from "@react-three/fiber";
import Lenis from "@studio-freight/lenis";
import ImageGrid from "../components/ImageGrid/ImageGrid";
import "./HomeMobile.css";

import DiyText from "../assets/title_text_diy.svg";
import HawkText from "../assets/title_text_hawk.svg";
import ChildText from "../assets/title_text_child.svg";

const lenis = new Lenis();
addEffect((t) => lenis.raf(t));

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="background-noise"></div>
        <div className="viewport">
          <div className="title-text diy-svg mobile">
            <img src={DiyText} alt="DIY" />
          </div>
          <ImageGrid />
          <div className="title-text hawk-svg mobile">
            <img src={HawkText} alt="HAWK" />
          </div>
          <div className="title-text child-svg mobile">
            <img src={ChildText} alt="CHILD" />
          </div>
        </div>
      </div>
      {/*<SimpleFooter />*/}
    </>
  );
}

export default Home;
