import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import playIcon from "./assets/icons/play.svg";
import pauseIcon from "./assets/icons/pause.svg";
import volumeIcon from "./assets/icons/volume.svg";
import "./SoundCloudPlayer.css"; // Make sure to create and import this CSS file

const SoundCloudPlayer = () => {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("00:00:00");
  const [totalDuration, setTotalDuration] = useState("00:00:00");
  const [volume, setVolume] = useState(50);

  useEffect(() => {
    if (wavesurfer.current) {
      console.log("WaveSurfer already initialized");
      return;
    }
    console.log("Initializing WaveSurfer...");
    wavesurfer.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#D9DCFF",
      progressColor: "#4353FF",
      height: 100,
      responsive: true,
      normalize: true,
      barWidth: 2,
    });

    const audioPath = `${process.env.PUBLIC_URL}/Spring-2024-Mix.mp3`;
    wavesurfer.current.load(audioPath);
    console.log("Audio loaded:", audioPath);

    wavesurfer.current.on("ready", () => {
      console.log("WaveSurfer is ready");
      setTotalDuration(formatTime(wavesurfer.current.getDuration()));
    });

    wavesurfer.current.on("audioprocess", () => {
      setCurrentTime(formatTime(wavesurfer.current.getCurrentTime()));
    });

    wavesurfer.current.on("seek", () => {
      setCurrentTime(formatTime(wavesurfer.current.getCurrentTime()));
    });

    return () => {
      if (wavesurfer.current) {
        console.log("Cleaning up WaveSurfer...");
        wavesurfer.current.destroy();
        wavesurfer.current = null;
      }
    };
  }, []);

  const formatTime = (seconds) => {
    const date = new Date(seconds * 1000);
    const hh = date.getUTCHours().toString().padStart(2, "0");
    const mm = date.getUTCMinutes().toString().padStart(2, "0");
    const ss = date.getUTCSeconds().toString().padStart(2, "0");
    return `${hh}:${mm}:${ss}`;
  };

  const handlePlayPause = () => {
    console.log("PLAY/PAUSE");
    wavesurfer.current.playPause();
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    wavesurfer.current.setVolume(newVolume / 100);
  };

  return (
    <div className="sc-player-container">
      <div className="sc-audio-player">
        <button className="sc-play-button" onClick={handlePlayPause}>
          <img
            className="sc-play-button-icon"
            src={isPlaying ? pauseIcon : playIcon}
            alt="Play Button"
          />
        </button>

        <div className="sc-player-body">
          <p className="sc-track-title">Hawkchild DIY - Spring 2024 Mix.mp3</p>
          <div id="waveform" className="sc-waveform" ref={waveformRef}></div>

          <div className="sc-controls">
            <div className="sc-volume">
              <img className="sc-volume-icon" src={volumeIcon} alt="Volume" />
              <input
                className="sc-volume-slider"
                type="range"
                name="volume-slider"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolumeChange}
              />
            </div>

            <div className="sc-timecode">
              <span id="sc-current-time">{currentTime}</span>
              <span>/</span>
              <span id="sc-total-duration">{totalDuration}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoundCloudPlayer;
