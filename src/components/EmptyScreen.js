// src/components/EmptyScreen.js

import React from 'react';
import PropTypes from 'prop-types';
import './EmptyScreen.css';

function EmptyScreen({ percentage }) {
    const style = {
        height: `${percentage}vh`,
    };
    return <div className="empty-screen" style={style}></div>;
}

EmptyScreen.propTypes = {
    percentage: PropTypes.number.isRequired,
};

export default EmptyScreen;

