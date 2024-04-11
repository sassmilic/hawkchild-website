import React from 'react';
import './ContentMarquee.css';
import LazyImage from './LazyImage';
import LazyVideo from './LazyVideo';

const ContentMarquee = ({ mediaPaths, speed = 'normal', direction = 'up' }) => {
  const renderMedia = (mediaPath, index) => {
    const isVideo = mediaPath.endsWith('.mp4');
    const position = direction === 'down' ? 'bottom' : 'top';
    return isVideo ? (
      <LazyVideo key={index} src={mediaPath} alt={`Video ${index}`} />
    ) : (
      <LazyImage key={index} src={mediaPath} alt={`Image ${index}`} position={position} />
    );
  };

  const directionClass = direction === 'up' ? 'animate-up' : 'animate-down';

  return (

    <div className={`content-marquee ${directionClass}`} style={{ animationDuration: speed }}>
      {(direction === 'down' ? [...mediaPaths].reverse() : mediaPaths).map(renderMedia)}
    </div>
  );
};

export default ContentMarquee;

