import React, { useState, useEffect } from "react";
import HomeMobile from "./HomeMobile";
import HomeDesktop from "./HomeDesktop";

const Home = () => {
  const [isMobile, setIsMobile] = useState(
    /Mobi|Android/i.test(navigator.userAgent),
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <>{isMobile ? <HomeMobile /> : <HomeDesktop />}</>;
};

export default Home;
