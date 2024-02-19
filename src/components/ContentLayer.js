import React from 'react';
import './ContentLayer.css';

// Add `idMap` prop for mapping filenames to IDs
const ContentLayer = ({ images, speed, className, opposite, idMap }) => {
  // Determine the sort order based on the `opposite` prop
  const sortOrder = (a, b) => {
    const comparison = a[0].localeCompare(b[0], undefined, {numeric: true, sensitivity: 'base'});
    return opposite ? -comparison : comparison; // Reverse the order if `opposite` is true
  };

  // Sort entries alphanumerically and reverse if `opposite` is true
  const sortedImages = Object.entries(images).sort(sortOrder);

  return (
    <div className={`content-layer ${className}`}>
      {sortedImages.map(([key, value], index) => {
        const isVideo = key.endsWith('.mp4');
        // Determine if the current file has a specific ID assigned
        const specificId = idMap && idMap[key] ? idMap[key] : '';

        return isVideo ? (
          <video key={index} id={specificId} src={value} alt={`content ${index}`} loop autoPlay muted />
        ) : (
          <img key={index} id={specificId} src={value} alt={`content ${index}`} />
        );
      })}
    </div>
  );
};

export default ContentLayer;

