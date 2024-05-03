import React from "react";
import PropTypes from "prop-types";
import LazyMedia from "./LazyMedia";

const LazyResponsiveImage = ({
  containerHeight,
  src,
  alt,
  position = "top",
}) => {
  // Assume src is something like 'path/to/image.jpg'
  const extension = src.substring(src.lastIndexOf("."), src.length); // e.g., '.jpg'
  const base = src.substring(0, src.lastIndexOf(".")); // e.g., 'path/to/image'

  const srcSet = `
    ${base}_xsmall${extension} 480w,
    ${base}_small${extension} 768w,
    ${base}_medium${extension} 1024w,
    ${base}_large${extension} 1200w,
    ${src} 1200w`; // Include original as the highest resolution

  return (
    <LazyMedia
      renderMedia={() => {
        const img = document.createElement("img");
        img.src = src; // Fallback src
        img.srcset = srcSet.trim();
        img.sizes = "100%";
        img.alt = alt;
        return img;
      }}
      containerHeight={containerHeight}
      position={position}
    />
  );
};

LazyResponsiveImage.propTypes = {
  containerHeight: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  position: PropTypes.oneOf(["top", "bottom"]),
};

export default LazyResponsiveImage;
