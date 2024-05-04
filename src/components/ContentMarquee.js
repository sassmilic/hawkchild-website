import React from "react";
import "./ContentMarquee.css";
import LazyResponsiveImage from "./LazyResponsiveImage";
import PropTypes from "prop-types";

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
};

export default ContentMarquee;
