import React from 'react';
import LazyMedia from './LazyMedia';

const LazyVideo = ({ src, alt }) => (
  <LazyMedia renderMedia={() => {
    const video = document.createElement('video');
    video.src = src;
    video.setAttribute('controls', '');
    video.muted = true; // Mute the video to allow autoplay
video.autoplay = true; // Set autoplay attribute to true
    video.style.height = 'auto';
    return video;
  }} />
);

export default LazyVideo;

