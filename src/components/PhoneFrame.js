import React, { useState, useEffect, useRef } from "react";
import "./PhoneFrame.css"; // Import the CSS file
import videoFile1 from "./crowd_2.mp4"; // Import the first video file
import videoFile2 from "./crowd_3.mp4"; // Import the second video file

const videos = [videoFile1, videoFile2]; // Add more video files as needed

const PhoneFrame = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.src = videos[currentVideoIndex];
      videoElement.crossOrigin = "anonymous";
      videoElement.loop = false;
      videoElement.muted = true;
      videoElement.playsInline = true;

      videoElement.play().catch((error) => {
        console.error("Error playing video:", error);
      });

      const handleEnded = () => {
        if (currentVideoIndex < videos.length - 1) {
          setCurrentVideoIndex((prevIndex) => prevIndex + 1);
        }
      };

      videoElement.addEventListener("ended", handleEnded);

      return () => {
        videoElement.removeEventListener("ended", handleEnded);
      };
    }
  }, [currentVideoIndex]);

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

  return (
    <div className="phone-frame">
      <div className="video-container">
        <div className="video-wrapper">
          <video ref={videoRef} controls />
        </div>
        <button
          className="arrow arrow-left"
          onClick={handlePrevious}
          disabled={currentVideoIndex === 0}
        >
          &#9664;
        </button>
        <button
          className="arrow arrow-right"
          onClick={handleNext}
          disabled={currentVideoIndex === videos.length - 1}
        >
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default PhoneFrame;
