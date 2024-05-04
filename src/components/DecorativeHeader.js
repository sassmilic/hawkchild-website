import React from "react";
import PropTypes from "prop-types";
import "./DecorativeHeader.css";
//import leftDecor from "../assets/left-decor.png";
//import rightDecor from "../assets/right-decor.png";
import decor from "../assets/full-decor.png";

function DecorativeHeader({ text }) {
  return (
    <div className="decorative-header">
      <h1>{text}</h1>
      <img src={decor} alt="Right Decorative Element" />
    </div>
  );
}

DecorativeHeader.propTypes = {
  text: PropTypes.string.isRequired,
};

export default DecorativeHeader;
