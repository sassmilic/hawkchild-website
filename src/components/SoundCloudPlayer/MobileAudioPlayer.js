import React, { useRef, useEffect } from "react";
import "./MobileAudioPlayer.css";
import music from "./assets/audio/Spring-2024-Mix.mp3";

const AudioPlayer = ({ isPlaying, setIsPlaying }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <div className="audio-player-container">
      <div className="audio-now-playing">
        <p
          style={{ textDecoration: isPlaying ? "none" : "line-through" }}
          onClick={togglePlay}
        >
          NOW PLAYING:
        </p>
        <div className={`audio-marquee ${isPlaying ? "playing" : ""}`}>
          <span>Spring 2024 Mix.mp3 - Hawkchild DIY&nbsp;</span>
          <span>Spring 2024 Mix.mp3 - Hawkchild DIY&nbsp;</span>
        </div>
      </div>
      <audio ref={audioRef} src={music} />
    </div>
  );
};

export default AudioPlayer;
