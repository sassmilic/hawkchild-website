import React, { useState } from "react";
import ImageGridMobile from "../components/ImageGrid/ImageGridMobile";
import AudioPlayer from "../components/SoundCloudPlayer/MobileAudioPlayer";
import "./HomeMobile.css";

import DiyText from "../assets/title_text_diy.svg";
import HawkText from "../assets/title_text_hawk.svg";
import ChildText from "../assets/title_text_child.svg";

import playIcon from "../components/SoundCloudPlayer/assets/icons/mute.png";
import pauseIcon from "../components/SoundCloudPlayer/assets/icons/volume.png";

function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <div className="home-container mobile">
        <ImageGridMobile />
        <div className="title-container mobile">
          <AudioPlayer isPlaying={isPlaying} />
          <div className="title-text-mobile hawk-svg">
            <img src={HawkText} alt="HAWK" />
          </div>
          <div className="title-text-mobile child-svg">
            <img src={ChildText} alt="CHILD" />
          </div>
          <div className="play-and-diy">
            <button
              className="audio-play-button"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              <img
                className="audio-play-button-icon"
                src={isPlaying ? pauseIcon : playIcon}
                alt="Play Button"
              />
            </button>
            <div className="title-text-mobile diy-svg">
              <img src={DiyText} alt="DIY" />
            </div>
          </div>
          <div className="pulsing-text">
            <p>scroll ↓</p>
          </div>
        </div>
        {/* <div className="footer-logos">
          <img className="footer-logo" src="/logo3.png" alt="HCD Logo" />
        </div> */}
      </div>
    </>
  );
}

export default Home;
