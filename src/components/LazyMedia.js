import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const LazyMedia = ({ renderMedia, containerHeight, position = "top" }) => {
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
                entry.target.insertBefore(
                  mediaElement,
                  entry.target.firstChild,
                );
              } else {
                // default to "bottom"
                entry.target.appendChild(mediaElement);
              }
            }

            // Add the "active" class to all img elements
            entry.target.querySelectorAll("img").forEach((img) => {
              img.classList.add("active");
            });
          } else {
            // Remove the "active" class from all img elements
            entry.target.querySelectorAll("img").forEach((img) => {
              img.classList.remove("active");
            });

            while (entry.target.firstChild) {
              entry.target.removeChild(entry.target.firstChild);
            }
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.01, // Triggers as soon as 1% of the target is visible
      },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [position]); // Include position in the dependency array

  // Adjust the container style to use flex and justify content based on the position
  const containerStyle = {
    height: containerHeight,
    display: "flex",
    flexDirection: "column",
    justifyContent: position === "top" ? "flex-start" : "flex-end",
  };

  return <div ref={containerRef} style={containerStyle}></div>;
};

// Define PropTypes
LazyMedia.propTypes = {
  renderMedia: PropTypes.func.isRequired,
  containerHeight: PropTypes.string.isRequired,
  position: PropTypes.oneOf(["top", "bottom"]),
};

export default LazyMedia;
