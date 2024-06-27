import React from "react";
import "./MobileNavBar.css";
import menuIcon from "./assets/menu.png"; // Ensure the path is correct

const MobileNavBar = ({ menuOpen, setMenuOpen }) => {
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`mobile-navbar ${menuOpen ? "show-menu" : ""}`}>
      <button className="menu-button" onClick={toggleMenu}>
        <img src={menuIcon} alt="Menu" />
      </button>
      <nav className="nav-menu">
        <ul>
          <li>
            <a href="/about">about</a>
          </li>
          <li>
            <a href="/events">events</a>
          </li>
          <li>
            <a href="/dao">$hstkkytkky</a>
          </li>
          <li>
            <a href="/contact">contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNavBar;
