import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import "./reset.css";
import "./App.css";
import "./assets/fonts/charter_regular.woff2";
import "./assets/fonts/SourceCodePro-Regular.ttf.woff2";
import "./assets/fonts/SourceCodePro-Light.ttf.woff2";
import NavBar from "./components/NavBar";
import Footer2 from "./components/Footer2";

/* don't show footer on home page */
const ShowFooter = () => {
  const location = useLocation();
  return location.pathname === "/" ? null : <Footer2 />;
};

function App() {
  return (
    <Router>
      <div className="site-container">
        <NavBar />
        <main>
          <AppRoutes />
        </main>
        <ShowFooter />
      </div>
    </Router>
  );
}

export default App;
