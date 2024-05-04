import React from "react";
import "./ContentMarquee.css";
import LazyResponsiveImage from "./LazyResponsiveImage";
import PropTypes from "prop-types";

const ContentMarquee = ({
  mediaPaths,
  containerHeight = "75vw",
  speed,
  direction = "up",
  lazy = true,
}) => {
  const renderMedia = (mediaPath, index) => {
    const position = direction === "down" ? "bottom" : "top";
    if (lazy) {
      return (
        <LazyResponsiveImage
          containerHeight={containerHeight}
          key={index}
          src={mediaPath}
          position={position}
        />
      );
    } else {
      const base = mediaPath.substring(0, mediaPath.lastIndexOf(".")); // e.g., 'path/to/image'
      return (
        <img
          className="regular-img"
          key={index}
          src={`${base}_xsmall.webp`}
          alt="" // Consider providing an 'alt' attribute for accessibility
        />
      );
    }
  };

  const directionClass = `animate-${direction}`;
  const isHorizontal = direction === "left" || direction === "right";

  return (
    <div
      className={`content-marquee ${directionClass}`}
      style={{
        animationDuration: speed,
        flexDirection: isHorizontal ? "row" : "column",
      }}
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
  direction: PropTypes.oneOf(["up", "down", "left", "right"]),
  lazy: PropTypes.bool,
};

export default ContentMarquee;
