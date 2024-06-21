import React, { useState, useEffect, useRef } from "react";
import "./PhoneFrame.css";
import playIcon from "./SoundCloudPlayer/assets/icons/play.png";
import pauseIcon from "./SoundCloudPlayer/assets/icons/pause.png";
import forwardIcon from "./SoundCloudPlayer/assets/icons/forward.png";
import backIcon from "./SoundCloudPlayer/assets/icons/back.png";
import videoFile1 from "./crowd_2.mp4";
import videoFile2 from "./crowd_3.mp4";

const videos = [videoFile1, videoFile2]; // Add more video files as needed

const PhoneFrame = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.src = videos[currentVideoIndex];
      videoElement.crossOrigin = "anonymous";
      videoElement.loop = false;
      videoElement.muted = true;
      videoElement.playsInline = true;

      const handlePlayPause = () => {
        if (isPlaying) {
          videoElement.play().catch((error) => {
            console.error("Error playing video:", error);
          });
        } else {
          videoElement.pause();
        }
      };

      videoElement.play().catch((error) => {
        console.error("Error playing video:", error);
      });

      const handleEnded = () => {
        if (currentVideoIndex < videos.length - 1) {
          setCurrentVideoIndex((prevIndex) => prevIndex + 1);
        }
      };

      videoElement.addEventListener("ended", handleEnded);
      handlePlayPause();

      return () => {
        videoElement.removeEventListener("ended", handleEnded);
      };
    }
  }, [currentVideoIndex, isPlaying]);

  const handleNext = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

  const togglePlayPause = () => {
    const videoElement = videoRef.current;
    if (isPlaying) {
      videoElement.pause();
    } else {
      videoElement.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="phone-frame">
      <div className="video-container">
        <div className="video-wrapper no-custom-scroll">
          <video ref={videoRef} muted></video>
        </div>
        <div className="controls">
          <button
            className="control-button"
            onClick={handlePrevious}
            disabled={currentVideoIndex === 0}
          >
            <img src={backIcon} />
          </button>
          <button className="control-button" onClick={togglePlayPause}>
            <img
              src={isPlaying ? pauseIcon : playIcon}
              alt={isPlaying ? "Pause" : "Play"}
            />
          </button>
          <button
            className="control-button"
            onClick={handleNext}
            disabled={currentVideoIndex === videos.length - 1}
          >
            <img src={forwardIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneFrame;
