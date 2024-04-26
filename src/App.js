import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './reset.css';
import './App.css';
import Home4 from './pages/Home4';
import AboutPage from './pages/About';
import DAOPage from './pages/DAO';
import Events from './pages/Events';
import ContactPage from './pages/Contact';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import FooterMain from './components/FooterMain';

function App() {
  const RoutesWithFooter = () => {
    const location = useLocation();

    const renderFooter = () => {
      return location.pathname === '/' ? <FooterMain /> : <Footer />;
    };

    return (
      <>
          <div className="mobile-notice">
            Not yet optimized for mobile
          </div>
        <div className="content-wrap">
          <Routes>
            <Route path='/' element={<Home4 />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/DAO' element={<DAOPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </div>
      </>
    );
  };

  return (
    <Router>
      <div className="site-container">
        <NavBar />
        <RoutesWithFooter />
      </div>
    </Router>
  );
}

export default App;
