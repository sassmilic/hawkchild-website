import React from "react";
import "./ContentMarquee.css";
//import LazyImage from "./LazyImage"; // Remove unused import
import LazyResponsiveImage from "./LazyImage"; // Import LazyResponsiveImage instead
import LazyVideo from "./LazyVideo";
import PropTypes from "prop-types"; // Import PropTypes

const ContentMarquee = ({
  mediaPaths,
  containerHeight = "75vw",
  speed,
  direction = "up",
}) => {
  const renderMedia = (mediaPath, index) => {
    const isVideo = mediaPath.endsWith(".mp4");
    const position = direction === "down" ? "bottom" : "top";
    return isVideo ? (
      <LazyVideo
        containerHeight={containerHeight}
        key={index}
        src={mediaPath}
        alt={`Video ${index}`}
      />
    ) : (
      <LazyResponsiveImage
        containerHeight={containerHeight}
        key={index}
        src={mediaPath}
        alt={`Image ${index}`}
        position={position}
      />
    );
  };

  const directionClass = direction === "up" ? "animate-up" : "animate-down";

  return (
    <div
      className={`content-marquee ${directionClass}`}
      style={{ animationDuration: speed }}
    >
      {(direction === "down" ? [...mediaPaths].reverse() : mediaPaths).map(
        renderMedia,
      )}
    </div>
  );
};

// Define PropTypes
ContentMarquee.propTypes = {
  mediaPaths: PropTypes.array.isRequired,
  containerHeight: PropTypes.string,
  speed: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(["up", "down"]),
};

export default ContentMarquee;
