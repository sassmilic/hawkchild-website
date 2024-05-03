import React from "react";
import PropTypes from "prop-types";
import LazyMedia from "./LazyMedia";

const LazyImage = ({ containerHeight, src, alt, position = "top" }) => (
  <LazyMedia
    renderMedia={() => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = alt;
      return img;
    }}
    containerHeight={containerHeight}
    position={position}
  />
);

LazyImage.propTypes = {
  containerHeight: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  position: PropTypes.oneOf(["top", "bottom"]),
};

export default LazyImage;
