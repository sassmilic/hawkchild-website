import React, { useEffect, useRef } from "react";

const LazyMedia = ({ renderMedia, containerHeight = "75vw" }) => {
  const containerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Create and append the image only if it's not already there
            if (!entry.target.hasChildNodes()) {
              entry.target.appendChild(renderMedia());
            }
          } else {
            while (entry.target.firstChild) {
              entry.target.removeChild(entry.target.firstChild);
            }
          }
        });
      },
      { rootMargin: "50px" },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ height: containerHeight }}
    ></div>
  );
};

export default LazyMedia;
