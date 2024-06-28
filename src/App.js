import React, { useRef, useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { addEffect } from "@react-three/fiber";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import "./reset.css";
import "./App.css";
import "./assets/fonts/charter_regular.woff2";
import "./assets/fonts/SourceCodePro-Regular.ttf.woff2";
import "./assets/fonts/SourceCodePro-Light.ttf.woff2";
import NavBar from "./components/NavBar";
import MobileNavBar from "./components/MobileNavBar/MobileNavBar";
// import Footer2 from "./components/Footer2";
// import SimpleFooter from "./components/SimpleFooter";

/* ensure each new page is viewed from the start */
/*
function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}
*/

const lenis = new Lenis();
addEffect((t) => lenis.raf(t));

function App() {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  // useEffect(() => {
  //   const lenis = new Lenis();
  //   const effect = addEffect((t) => lenis.raf(t));
  //   return () => {
  //     effect();
  //   };
  // }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Router>
      <div
        className={`site-container ${isMobile ? "mobile" : ""} ${menuOpen ? "menu-open" : ""}`}
        ref={ref}
      >
        {isMobile ? (
          <MobileNavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        ) : (
          <NavBar />
        )}
        <main className={`${menuOpen ? "main-menu-open" : ""}`}>
          <AppRoutes />
        </main>
        {/* {location.pathname === "/" ? <SimpleFooter /> : <Footer2 />} */}
      </div>
    </Router>
  );
}

export default App;
