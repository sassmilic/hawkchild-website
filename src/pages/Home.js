import React, { useState, useEffect } from "react";
//import HomePortrait from "./HomePortrait";
import HomeLandscape from "./HomeLandscape";

const Home = () => {
  const [isLandscape, setIsLandscape] = useState(
    window.matchMedia("(orientation: landscape)").matches,
  );

  useEffect(() => {
    const handleOrientationChange = (e) => {
      setIsLandscape(e.matches);
    };

    const mql = window.matchMedia("(orientation: landscape)");
    mql.addEventListener("change", handleOrientationChange);

    return () => {
      mql.removeEventListener("change", handleOrientationChange);
    };
  }, []);

  return <>{isLandscape ? <HomeLandscape /> : <HomeLandscape />}</>;
};

export default Home;
