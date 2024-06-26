import React, { useRef, useEffect } from "react";
import "./MobileAudioPlayer.css";
import music from "./assets/audio/Spring-2024-Mix.mp3";

const AudioPlayer = ({ isPlaying }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="audio-player-container">
      <div className="audio-now-playing">
        <p style={{ textDecoration: isPlaying ? "none" : "line-through" }}>
          NOW PLAYING:
        </p>
        <div className={`audio-marquee ${isPlaying ? "playing" : ""}`}>
          <span>Hawkchild DIY - Spring 2024 Mix.mp3&nbsp;</span>
          <span>Hawkchild DIY - Spring 2024 Mix.mp3&nbsp;</span>
        </div>
      </div>
      <audio autoPlay ref={audioRef} src={music} />
    </div>
  );
};

export default AudioPlayer;
