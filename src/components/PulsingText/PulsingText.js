import React, { useEffect, useState, useCallback } from "react";
import throttle from "lodash.throttle";
import "./PulsingText.css";

const PulsingText = () => {
  const [rotation, setRotation] = useState(0);

  const handleScroll = useCallback(
    throttle(() => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      const rotationAngle = (scrollPercent / 100) * 180;
      setRotation(rotationAngle);
    }, 100), // Throttle to 100ms
    // eslint-disable-next-line
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="pulsing-text">
      <p>
        scroll
        <span
          style={{
            transform: `rotate3d(1, 0, 0, ${rotation}deg)`,
            display: "inline-block",
            transition: "transform 0.5s",
            marginLeft: "8px",
          }}
        >
          ↓
        </span>
      </p>
    </div>
  );
};

export default PulsingText;
