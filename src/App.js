import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './reset.css';
import './App.css';
import Home from './pages/Home2';
import AboutPage from './pages/About';
import Collage from './pages/Collage';
import DAOPage from './pages/DAO';
import Events from './pages/Events';
import ContactPage from './pages/Contact';
import TestPage from './pages/TestPage';
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
        <div style={{
      width: '100%', // Full width
      color: 'red', // Text color
      fontWeight: 'bold', // Bold text
      position: 'fixed', // Fixed positioning
      top: 50, // Align to the top of the viewport
      fontSize: "50px",
      left: '35vw', // Align to the left of the viewport
      zIndex: 1000, // Ensure it's above other content
    }}>
      UNDER CONSTRUCTION
    </div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/DAO' element={<DAOPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/events" element={<Events />} />
            <Route path="/collage" element={<Collage />} />
            <Route path="/TestPage" element={<TestPage />} />
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
