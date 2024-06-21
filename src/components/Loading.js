import React from "react";

function Loading({ loadingProgress }) {
  return (
    <div className="home-container">
      <div className="background-noise"></div>
      <div className="viewport"></div>
      <div className="marquee-container">
        <p>Loading... {loadingProgress}%</p>
      </div>
    </div>
  );
}

export default Loading;
