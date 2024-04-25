import React from 'react';
import LazyMedia from './LazyMedia';

const LazyImage = ({ containerHeight, src, alt, position = "top" }) => (
  <LazyMedia renderMedia={() => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.style.width = '99%';
    img.style.height = 'auto';
    return img;
  }} containerHeight={containerHeight} position={position} />
);

export default LazyImage;

