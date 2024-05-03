import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ opacity }) => {
  const navigate = useNavigate();

  return (
    <nav style={{ opacity }} className="navbar">
      <div className="left">
        <button onClick={() => navigate("/about")}>about</button>
        <div className="empty"></div>
        <button onClick={() => navigate("/events")}>events</button>
        <div className="empty"></div>
        <button onClick={() => navigate("/DAO")}>$hstkkytkky</button>
      </div>
      <div className="right">
        <div className="empty"></div>
        <button onClick={() => navigate("/contact")}>contact</button>
      </div>
    </nav>
  );
}

export default NavBar;
