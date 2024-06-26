import React from "react";
import CustomCursor from "../components/CustomCursor";
import ImageGrid from "../components/ImageGrid/ImageGrid";
import PhoneFrame from "../components/PhoneFrame";
import SoundCloudPlayer from "../components/SoundCloudPlayer/SoundCloudPlayer2";
import "./Home.css";

import DiyText from "../assets/title_text_diy.svg";
import HawkText from "../assets/title_text_hawk.svg";
import ChildText from "../assets/title_text_child.svg";

function Home() {
  return (
    <>
      <div className="home-container">
        <CustomCursor />
        <div className="background-noise"></div>
        <div className="viewport">
          <div className="title-text diy-svg">
            <img src={DiyText} alt="DIY" />
          </div>
          <ImageGrid />
          <div className="title-text hawk-svg">
            <img src={HawkText} alt="HAWK" />
          </div>
          <div className="title-text child-svg">
            <img src={ChildText} alt="CHILD" />
          </div>
        </div>
        <PhoneFrame />
        <div className="marquee-container no-custom-scroll">
          <SoundCloudPlayer />
        </div>
      </div>
      {/*<SimpleFooter />*/}
    </>
  );
}

export default Home;
