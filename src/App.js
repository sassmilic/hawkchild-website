import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import './reset.css';
import './App.css';
import './assets/fonts/charter_regular.woff2';
import './assets/fonts/SourceCodePro-Regular.ttf.woff2';
import './assets/fonts/SourceCodePro-Light.ttf.woff2';
import NavBar from './components/NavBar';
import Footer2 from './components/Footer2';

const MobileWarning = () => {
  return (
    <div className="mobile-warning">
      Not optimized for mobile
    </div>
  );
};

/* don't show footer on home page */
const ShowFooter = () => {
  const location = useLocation();
  return location.pathname === '/' ? null : <Footer2 />;
};

function App() {
  const footerRef = useRef(null);
  const [navOpacity, setNavOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const footerPos = footerRef.current.getBoundingClientRect().top;
        console.log(footerPos);
        const screenHeight = window.innerHeight;
        const triggerHeight = screenHeight - 100; // Example: 100px from the bottom of the viewport

        if (footerPos <= triggerHeight) {
          setNavOpacity(0.5); // Change opacity when footer is 100px from bottom
        } else {
          setNavOpacity(1); // Reset opacity when not at trigger point
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="site-container">
        <NavBar opacity={navOpacity} />
        <MobileWarning />
        <main>
          <AppRoutes />
        </main>
        <Footer2 ref={footerRef} />
      </div>
    </Router>
  );
}

export default App;

