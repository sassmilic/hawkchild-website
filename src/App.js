import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './reset.css';
import './App.css';
import Home from './pages/Home';
import AboutPage from './pages/About'
import Events from './pages/Events';
import ContactPage from './pages/Contact';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import FooterMain from './components/FooterMain';

function App() {
  // RoutesWithFooter is a wrapper component that includes the routes and conditional rendering of the footer.
  // It's necessary to use the useLocation hook inside a component that's rendered as a child of Router.
  const RoutesWithFooter = () => {
    const location = useLocation(); // Access the current route's location

    // Function to conditionally render the appropriate footer
    const renderFooter = () => {
      return location.pathname === '/' ? <FooterMain /> : <Footer />;
    };

    return (
      <>
        <div className="content-wrap">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </div>
        {renderFooter()}
      </>
    );
  };

  return (
    <Router>
      <div className="site-container">
        <NavBar />
        <RoutesWithFooter /> {/* Including the wrapper component with routes and footer */}
      </div>
    </Router>
  );
}

export default App;
