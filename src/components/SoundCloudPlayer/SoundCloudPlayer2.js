import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
// eslint-disable-next-line no-unused-vars
import Hover from "wavesurfer.js/dist/plugins/hover.esm.js";
import playIcon from "./assets/icons/play.svg";
import pauseIcon from "./assets/icons/pause.svg";
import volumeIcon from "./assets/icons/volume.svg";
import "./SoundCloudPlayer2.css"; // Make sure to create and import this CSS file

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

// Define the waveform gradient
const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 1.35);
gradient.addColorStop(0, "#656666"); // Top color
gradient.addColorStop((canvas.height * 0.7) / canvas.height, "#656666"); // Top color
gradient.addColorStop((canvas.height * 0.7 + 1) / canvas.height, "#ffffff"); // White line
gradient.addColorStop((canvas.height * 0.7 + 2) / canvas.height, "#ffffff"); // White line
gradient.addColorStop((canvas.height * 0.7 + 3) / canvas.height, "#B1B1B1"); // Bottom color
gradient.addColorStop(1, "#B1B1B1"); // Bottom color

// Define the progress gradient
const progressGradient = ctx.createLinearGradient(
  0,
  0,
  0,
  canvas.height * 1.35,
);
progressGradient.addColorStop(0, "#EE772F"); // Top color
progressGradient.addColorStop((canvas.height * 0.7) / canvas.height, "#EB4926"); // Top color
progressGradient.addColorStop(
  (canvas.height * 0.7 + 1) / canvas.height,
  "#ffffff",
); // White line
progressGradient.addColorStop(
  (canvas.height * 0.7 + 2) / canvas.height,
  "#ffffff",
); // White line
progressGradient.addColorStop(
  (canvas.height * 0.7 + 3) / canvas.height,
  "#F6B094",
); // Bottom color
progressGradient.addColorStop(1, "#F6B094"); // Bottom color

const SoundCloudPlayer = () => {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const hoverRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("00:00:00");
  const [totalDuration, setTotalDuration] = useState("00:00:00");
  const [volume, setVolume] = useState(50);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (wavesurfer.current) {
      console.log("WaveSurfer already initialized");
      return;
    }
    console.log("Initializing WaveSurfer...");
    wavesurfer.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: gradient,
      progressColor: progressGradient,
      barWidth: 2,
    });

    const audioPath = `/Spring-2024-Mix.mp3`;
    wavesurfer.current.load(audioPath);
    console.log("Audio loaded:", audioPath);

    wavesurfer.current.on("ready", () => {
      console.log("WaveSurfer is ready");
      setTotalDuration(formatTime(wavesurfer.current.getDuration()));
      //setIsLoading(true); // Set loading to false when waveform is ready
    });

    wavesurfer.current.on("redraw", () => {
      console.log("WaveSurfer waveform is ready");
      setIsLoading(false); // Set loading to false when waveform is ready
    });

    wavesurfer.current.on("audioprocess", () => {
      setCurrentTime(formatTime(wavesurfer.current.getCurrentTime()));
    });

    wavesurfer.current.on("interaction", () => {
      setCurrentTime(formatTime(wavesurfer.current.getCurrentTime()));
    });

    wavesurfer.current.on("pointermove", (e) => {
      console.log("firing hover event");
      hoverRef.style.width = `${e.offsetX}px`;
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
          {isLoading && <p>Loading waveform...</p>}
          <div id="waveform" className="sc-waveform" ref={waveformRef}>
            <div id="time">{currentTime}</div>
            <div id="duration">{totalDuration}</div>
            <div id="hover" ref={hoverRef}></div>
          </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoundCloudPlayer;
