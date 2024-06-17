import React from "react";
import PropTypes from "prop-types";
import LazyMedia from "./LazyMedia";
import Image from "next/image";

const LazyImage = ({ containerHeight, src, alt, position = "top", placeholder = "blur", blurDataURL }) => (
  <LazyMedia
    renderMedia={() => (
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        placeholder={placeholder}
      />
    )}
    containerHeight={containerHeight}
    position={position}
  />
);

LazyImage.propTypes = {
  containerHeight: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  position: PropTypes.oneOf(["top", "bottom"]),
  placeholder: PropTypes.oneOf(["blur", "empty"]),
  blurDataURL: PropTypes.string,
};

export default LazyImage;

