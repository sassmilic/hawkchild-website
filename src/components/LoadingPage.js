import React from 'react';
import './LoadingPage.css'; // You can create a CSS file for styling

const LoadingPage = ({ isVisible, percentage }) => {
    return (
        <div className={`loading-container ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="flex-box-container">
                <div>Loading</div>
                <div className="empty2"></div>
                <div>{percentage.toFixed(0)}%</div>
            </div>
        </div>
    );
};

export default LoadingPage;

