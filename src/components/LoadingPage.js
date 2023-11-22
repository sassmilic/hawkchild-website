import React from 'react';
import './LoadingPage.css'; // You can create a CSS file for styling

const LoadingPage = ({ isVisible }) => {
    return (
        <div className={`loading-container ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="loading-text">Loading...</div>
        </div>
    );
};

export default LoadingPage;

