import React from 'react';
import './ContentMarquee.css';
import LazyImage from './LazyImage';
import LazyVideo from './LazyVideo';

const ContentMarquee = ({ media, speed = 'normal' }) => {
    console.log("MEDIA");
    console.log(media);
  const renderMedia = (mediaItem, index) => {
    const isVideo = mediaItem.src.endsWith('.mp4');
    return isVideo ? (
      <LazyVideo key={index} src={mediaItem.src} alt={`Video ${index}`} />
    ) : (
      <LazyImage key={index} src={mediaItem.src} alt={`Image ${index}`} />
    );
  };

  return (
    <div className="content-marquee" style={{ animationDuration: speed }}>
      {media.map(renderMedia)}
    </div>
  );
};

export default ContentMarquee;

