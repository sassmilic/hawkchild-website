import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './reset.css';
import './App.css';
import Home from './pages/Home';
import Events from './pages/Events';
import ContactPage from './pages/Contact';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="site-container"> {/* Wrapper for flex */}
        <NavBar />
        <div className="content-wrap"> {/* Content wrapper */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
