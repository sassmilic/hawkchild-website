import React, { useEffect, useRef, useState } from 'react';
import './ContentLayer.css';

const ContentLayer = ({ images, speed, className, opposite, idMap }) => {
  const [elementsRef, setElementsRef] = useState({});

  const observer = useRef(new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const lazyImage = entry.target;
        if (lazyImage.dataset.src) {
          lazyImage.src = lazyImage.dataset.src;
          if (lazyImage.tagName.toLowerCase() === 'video') {
            lazyImage.load(); // For video, load the video after setting the source
          }
          observer.current.unobserve(lazyImage);
        }
      }
    });
  }, { rootMargin: '0px', threshold: 0.1 }));

  useEffect(() => {
    const currentObserver = observer.current;
    Object.values(elementsRef).forEach(el => currentObserver.observe(el));
    
    return () => {
      if (currentObserver) {
        currentObserver.disconnect();
      }
    };
  }, [elementsRef]);

  const sortOrder = (a, b) => {
    const comparison = a[0].localeCompare(b[0], undefined, {numeric: true, sensitivity: 'base'});
    return (speed < 0) ? -comparison : comparison;
  };

  const sortedImages = Object.entries(images).sort(sortOrder);

  const setRef = (el) => {
    if (el && !elementsRef[el.id]) {
      setElementsRef(prevRefs => ({ ...prevRefs, [el.id]: el }));
    }
  };

  return (
    <div className={`content-layer ${className}`}>
      {sortedImages.map(([key, value], index) => {
        const isVideo = key.endsWith('.mp4');
        const specificId = idMap && idMap[key] ? idMap[key] : `element-${index}`;

        return isVideo ? (
          <video key={index} id={specificId} src={value.compressed} data-src={value.full} alt={`content ${index}`} loop autoPlay muted ref={setRef} />
        ) : (
          <img key={index} id={specificId} src={value.compressed} data-src={value.full} alt={`content ${index}`} ref={setRef} />
        );
      })}
    </div>
  );
};

export default ContentLayer;

