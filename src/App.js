import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import './reset.css';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import FooterMain from './components/FooterMain';

function App() {
  return (
    <Router>
      <div className="site-container">
        <NavBar />
        <main>
            <AppRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;
