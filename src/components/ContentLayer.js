import React from 'react';
import './ContentLayer.css';

const ContentLayer = ({ images, speed, className, opposite }) => {

  return (
    <div className={`content-layer ${className}`}>
      {Object.entries(images).map(([key, value], index) => {
        const isVideo = key.endsWith('.mp4');
        return isVideo ? (
          <video key={index} src={value} alt={`content ${index}`} loop autoPlay muted />
        ) : (
          <img key={index} src={value} alt={`content ${index}`} />
        );
      })}
    </div>
  );
};

export default ContentLayer;

