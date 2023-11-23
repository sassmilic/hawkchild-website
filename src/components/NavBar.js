import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <div className="left">
                <button>about</button>
                <div className="empty"></div>
                <button onClick={() => navigate('/events')}>
                    events
                </button>
                <div className="empty"></div>
                <button>$hstkkytkky</button>
            </div>
            <div className="right">
                <div className="empty"></div>
                <button onClick={() => navigate('/contact')}>
                    contact
                </button>
            </div>
        </nav>
    );
}

export default NavBar;
