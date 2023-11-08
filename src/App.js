import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import ContactPage from './pages/Contact';
import './reset.css';
import './App.css';
import PhotoCollage from './components/PhotoCollage';
import HawkchildText from './assets/hawkchild_diy.svg';
import Logo from './assets/logo.jpeg';
import Home from './pages/Home';

function App() {
    return (
        <Router>
          <Routes>
            <Route exact path='/' exact element={<Home />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Router>
    );
}

export default App;
