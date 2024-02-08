import React, { useEffect, useRef } from 'react';
import './ContentLayer.css';

const ContentLayer = React.forwardRef(({ images, speed, className, opposite }, ref) => {
  const requestID = useRef(null); 

  const onScroll = () => {
    if (!ref.current) return;
    if (requestID.current) cancelAnimationFrame(requestID.current); 

    requestID.current = requestAnimationFrame(() => {
      const scrolled = window.scrollY;
      const moveSpeed = opposite ? -speed : speed;

      let totalOffset;
      if (!opposite) {
        const elementHeight = ref.current.offsetHeight;
        // Initial move to position the element's bottom at its natural top position
        const initialOffset = -elementHeight;
        totalOffset = initialOffset + (scrolled * moveSpeed);
      } else {
        totalOffset = scrolled * moveSpeed;
      }
      ref.current.style.transform = `translateY(${totalOffset}px)`;
    });
  };

  const setPositionInitially = () => {
    if (!ref.current || opposite) return;
    const elementHeight = ref.current.offsetHeight;
    const initialOffset = -elementHeight;
    ref.current.style.transform = `translateY(${initialOffset}px)`;
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    setPositionInitially();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (requestID.current) cancelAnimationFrame(requestID.current);
    };
  }, []);

    return (
    <div ref={ref} className={`content-layer ${className}`}>
        {Object.entries(images)
          .sort((a, b) => a[0].localeCompare(b[0], undefined, {numeric: true, sensitivity: 'base'}))
          .map(([filename, imageObject], index) => {
            const isVideo = filename.endsWith('.mp4');
            return isVideo ? (
              <video key={index} src={imageObject} alt={filename} loop autoPlay muted>
                Your browser does not support the video tag.
              </video>
            ) : (
              <img key={index} src={imageObject} alt={filename} />
            );
          })
        }
    </div>
  );
});

export default ContentLayer;
