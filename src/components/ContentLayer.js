import React, { useEffect, useRef } from 'react';
import './ContentLayer.css';

const ContentLayer = React.forwardRef(({ images, speed, className, opposite }, ref) => {
  const requestID = useRef(null); // To hold the requestAnimationFrame ID

  const onScroll = () => {
    if (requestID.current) cancelAnimationFrame(requestID.current); // Cancel the previous animation frame request

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
      if (requestID.current) cancelAnimationFrame(requestID.current); // Clean up the animation frame request
    };
  }, [speed, opposite]); // Depend on speed and opposite to re-calculate when they change

    return (
    <div ref={ref} className={`content-layer ${className}`}>
      {Object.entries(images).map(([filename, imageObject], index) => {
        // Check the file extension to determine if it's a video
        const isVideo = filename.endsWith('.mp4');

        return isVideo ? (
          <video key={index} src={imageObject} alt={filename} loop autoPlay muted>
            Your browser does not support the video tag.
          </video>
        ) : (
          <img key={index} src={imageObject} alt={filename} />
        );
      })}
    </div>
  );
});

export default ContentLayer;
