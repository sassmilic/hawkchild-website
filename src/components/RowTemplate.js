import React from 'react';

// Preload images
const preloadImage = (src) => {
  const img = new Image();
  img.src = src;
};

// Preload videos
const preloadVideo = (src) => {
  const video = document.createElement('video');
  video.src = src;
  video.load();
};

const rowTemplate = (item, index, rowHeight, idMap) => {
  const filename = item[0];
  const files = item[1];
  const isVideo = filename.endsWith(".mp4");
  const specificId = idMap && idMap[filename] ? idMap[filename] : `element-${index}`; // Fixed key to filename
  // Call the preload function for images and videos
  if (isVideo) {
    preloadVideo(files.full);
  } else {
    preloadImage(files.full);
  }

    return (
    <div className="row" key={index} style={{ height: `${rowHeight}px`}}>
      {isVideo ? (
        <video
          key={filename}
          id={specificId}
          src={files.full}
          alt={`content ${index}`}
          loop
          autoPlay
          muted
        />
      ) : (
        <img
          key={filename}
          id={specificId}
          src={files.full}
          alt={`content ${index}`}
        />
      )}
    </div>
  );
};

export default rowTemplate;

