import React, { useEffect, useRef } from "react";

const LazyMedia = ({ renderMedia, containerHeight = "75vw", position = "top" }) => {
  const containerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Create and append the media only if it's not already there
            if (!entry.target.hasChildNodes()) {
              const mediaElement = renderMedia();
              // Adjust the append method based on the position
              if (position === "top") {
                entry.target.insertBefore(mediaElement, entry.target.firstChild);
              } else { // default to "bottom"
                entry.target.appendChild(mediaElement);
              }
            }
          } else {
            while (entry.target.firstChild) {
              entry.target.removeChild(entry.target.firstChild);
            }
          }
        });
      },
      { rootMargin: "50px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [position]); // Include position in the dependency array

  // Adjust the container style to use flex and justify content based on the position
  const containerStyle = {
    height: containerHeight,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: position === 'top' ? 'flex-start' : 'flex-end'
  };

  return <div ref={containerRef} style={containerStyle}></div>;
};

export default LazyMedia;

