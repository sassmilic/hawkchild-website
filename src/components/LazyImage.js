import React from 'react';
import LazyMedia from './LazyMedia';

const LazyImage = ({ src, alt }) => (
  <LazyMedia renderMedia={() => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.style.width = '100%';
    img.style.height = 'auto';
    return img;
  }} />
);

export default LazyImage;

