import React, { useEffect, useRef, useState } from "react";
import "./CustomCursor.css";

function CustomCursor() {
  const cursorRef = useRef(null);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current && !isHidden) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const handleMouseEnter = () => {
      setIsHidden(true);
    };

    const handleMouseLeave = () => {
      setIsHidden(false);
    };

    const handleElementMouseEnter = () => {
      setIsHidden(true);
    };

    const handleElementMouseLeave = () => {
      setIsHidden(false);
    };

    document.addEventListener("mousemove", handleMouseMove);

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", handleMouseEnter);
      button.addEventListener("mouseleave", handleMouseLeave);
    });

    const elementsWithNoCustomScroll =
      document.querySelectorAll(".no-custom-scroll");
    elementsWithNoCustomScroll.forEach((element) => {
      element.addEventListener("mouseenter", handleElementMouseEnter);
      element.addEventListener("mouseleave", handleElementMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);

      elementsWithNoCustomScroll.forEach((element) => {
        element.removeEventListener("mouseenter", handleElementMouseEnter);
        element.removeEventListener("mouseleave", handleElementMouseLeave);
      });
    };
  }, [isHidden]);

  if (isHidden) {
    return null;
  }

  return (
    <div ref={cursorRef} id="custom-cursor">
      <span className="arrows">↑</span>
      <span className="scroll-text">scroll</span>
      <span className="arrows">↓</span>
    </div>
  );
}

export default CustomCursor;
