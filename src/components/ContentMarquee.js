import React from "react";
import "./ContentMarquee.css";
//import LazyImage from "./LazyImage"; // Remove unused import
import LazyResponsiveImage from "./LazyResponsiveImage"; // Import LazyResponsiveImage instead
import PropTypes from "prop-types"; // Import PropTypes

const ContentMarquee = ({
  mediaPaths,
  containerHeight = "75vw",
  speed,
  direction = "up",
}) => {
  const renderMedia = (mediaPath, index) => {
    const position = direction === "down" ? "bottom" : "top";
    return (
      <LazyResponsiveImage
        containerHeight={containerHeight}
        key={index}
        src={mediaPath}
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
