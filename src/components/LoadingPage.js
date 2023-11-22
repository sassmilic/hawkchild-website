import React from 'react';
import './LoadingPage.css'; // You can create a CSS file for styling

const LoadingPage = ({ isVisible, percentage }) => {
    return (
        <div className={`loading-container ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="loading-text">Loading...{percentage.toFixed(0)}%</div>
        </div>
    );
};

export default LoadingPage;

