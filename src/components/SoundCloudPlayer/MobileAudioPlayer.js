import React, { useState } from "react";
import playIcon from "./assets/icons/play.png";
import pauseIcon from "./assets/icons/pause.png";
import "./MobileAudioPlayer.css"; // Make sure to create and import this CSS file

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="audio-player-container">
      <button className="audio-play-button" onClick={handlePlayPause}>
        <img
          className="audio-play-button-icon"
          src={isPlaying ? pauseIcon : playIcon}
          alt="Play Button"
        />
      </button>
      <div className="audio-now-playing">
        [<p>NOW PLAYING:</p>
        <div className="audio-marquee">
          <span>Hawkchild DIY - Spring 2024 Mix.mp3&nbsp;</span>
          <span>Hawkchild DIY - Spring 2024 Mix.mp3&nbsp;</span>
        </div>
        ]
      </div>
    </div>
  );
};

export default AudioPlayer;
