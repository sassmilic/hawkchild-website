import React from "react";
import { useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { addEffect } from "@react-three/fiber";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import "./reset.css";
import "./App.css";
import "./assets/fonts/charter_regular.woff2";
import "./assets/fonts/SourceCodePro-Regular.ttf.woff2";
import "./assets/fonts/SourceCodePro-Light.ttf.woff2";
import NavBar from "./components/NavBar";
import Footer2 from "./components/Footer2";

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

/* don't show footer on home page */
const ShowFooter = () => {
  const location = useLocation();
  return location.pathname === "/" ? <div></div> : <Footer2 />;
};

const lenis = new Lenis();
addEffect((t) => lenis.raf(t));

function App() {
  const ref = useRef(null);

  return (
    <div className="site-container" ref={ref}>
      <Router>
        <NavBar />
        <main>
          <AppRoutes />
        </main>
        <ShowFooter />
      </Router>
    </div>
  );
}
export default App;
