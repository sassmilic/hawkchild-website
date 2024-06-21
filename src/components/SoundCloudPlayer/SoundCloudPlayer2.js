import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import HoverPlugin from "wavesurfer.js/dist/plugins/hover";
import playIcon from "./assets/icons/play.png";
import pauseIcon from "./assets/icons/pause.png";
import volumeIcon from "./assets/icons/volume.png";
import muteIcon from "./assets/icons/mute.png";
import "./SoundCloudPlayer2.css"; // Make sure to create and import this CSS file

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

// Define the waveform ctx.fillStyle
ctx.fillStyle = ctx.createLinearGradient(0, 0, 0, canvas.height * 1.35);
ctx.fillStyle.addColorStop(0, "#747575"); // Top color
ctx.fillStyle.addColorStop((canvas.height * 0.7) / canvas.height, "#838484"); // Top color
ctx.fillStyle.addColorStop(
  (canvas.height * 0.7 + 1) / canvas.height,
  "#ffffff",
); // White line
ctx.fillStyle.addColorStop(
  (canvas.height * 0.7 + 2) / canvas.height,
  "#ffffff",
); // White line
ctx.fillStyle.addColorStop(
  (canvas.height * 0.7 + 3) / canvas.height,
  "#B1B1B1",
); // Bottom color
ctx.fillStyle.addColorStop(1, "#B1B1B1"); // Bottom color

// Define the progress ctx.fillStyle
const progressGradient = ctx.createLinearGradient(
  0,
  0,
  0,
  canvas.height * 1.35,
);
progressGradient.addColorStop(0, "black"); // Top color
progressGradient.addColorStop((canvas.height * 0.7) / canvas.height, "black"); // Top color
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
  "#434343",
); // Bottom color
progressGradient.addColorStop(1, "black"); // Bottom color

const SoundCloudPlayer = () => {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const hoverRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("00:00:00");
  const [totalDuration, setTotalDuration] = useState("00:00:00");
  const [volume, setVolume] = useState(50);
  const [previousVolume, setPreviousVolume] = useState(50);

  useEffect(() => {
    if (wavesurfer.current) {
      console.log("WaveSurfer already initialized");
      return;
    }
    console.log("Initializing WaveSurfer...");
    wavesurfer.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: ctx.fillStyle,
      progressColor: progressGradient,
      barWidth: 2,
      plugins: [
        HoverPlugin.create({
          lineColor: "blue",
          lineWidth: 1,
          labelBackground: "#fff",
          labelColor: "#000",
          labelSize: "11px",
        }),
      ],
    });

    const audioPath = `/Spring-2024-Mix.mp3`;
    wavesurfer.current.load(audioPath);
    console.log("Audio loaded:", audioPath);

    wavesurfer.current.on("ready", () => {
      console.log("WaveSurfer is ready");
      setTotalDuration(formatTime(wavesurfer.current.getDuration()));
    });

    /*
    wavesurfer.current.on("loading", (progress) => {
      console.log(`Loading progress: ${progress}%`);
      setLoadingProgress(progress);
      if (progress === 100) {
        setIsLoading(false); // Set loading to false when waveform is fully loaded
      }
    });
    */

    wavesurfer.current.on("audioprocess", () => {
      setCurrentTime(formatTime(wavesurfer.current.getCurrentTime()));
    });

    wavesurfer.current.on("interaction", () => {
      console.log("firing interaction event");
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
    wavesurfer.current.playPause();
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    console.log("volume", volume);
    setVolume(newVolume);
    wavesurfer.current.setVolume(newVolume / 100);
  };

  const toggleMute = () => {
    if (volume <= 1) {
      // If currently muted, restore the previous volume
      setVolume(previousVolume);
      if (wavesurfer.current) {
        wavesurfer.current.volume = previousVolume;
      }
    } else {
      setPreviousVolume(volume);
      setVolume(1);
      if (wavesurfer.current) {
        wavesurfer.current.volume = 0;
      }
    }
  };

  return (
    <div className="sc-player-container">
      <div className="sc-audio-player">
        <div className="sc-top-row">
          <button className="sc-play-button" onClick={handlePlayPause}>
            <img
              className="sc-play-button-icon"
              src={isPlaying ? pauseIcon : playIcon}
              alt="Play Button"
            />
          </button>
          <div className="sc-song-info">
            <p className="sc-track-title">
              Hawkchild DIY - Spring 2024 Mix.mp3
            </p>
          </div>
          <div className="sc-controls">
            <div className="sc-volume">
              <button onClick={toggleMute}>
                <img
                  className="sc-volume-icon"
                  src={volume <= 1 ? muteIcon : volumeIcon}
                  alt="Volume"
                />
              </button>
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
        <div className="sc-bottom-row">
          <div id="waveform" className="sc-waveform" ref={waveformRef}>
            <div id="time">{currentTime}</div>
            <div id="duration">{totalDuration}</div>
            <div id="hover" ref={hoverRef}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoundCloudPlayer;
