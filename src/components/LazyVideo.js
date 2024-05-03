import React from "react";
import PropTypes from "prop-types";
import LazyMedia from "./LazyMedia";

const LazyVideo = ({ src }) => (
  <LazyMedia
    renderMedia={() => {
      const video = document.createElement("video");
      video.src = src;
      video.setAttribute("controls", "");
      video.muted = true; // Mute the video to allow autoplay
      video.autoplay = true; // Set autoplay attribute to true
      video.style.height = "auto";
      return video;
    }}
  />
);

LazyVideo.propTypes = {
  src: PropTypes.string.isRequired,
};

export default LazyVideo;
