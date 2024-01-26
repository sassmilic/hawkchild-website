import React from 'react';
import './JoinButton.css'; // Make sure to create a corresponding CSS file with this name

const JoinButton = () => {
  return (
    <a href="https://discord.com/invite/xD2A3CNHN7" target="_blank" rel="noopener noreferrer" className="join-button-link">
      <button className="join-button">
        JOIN
      </button>
    </a>
  );
};

export default JoinButton;

