import React from "react";
import "./SimpleFooter.css";

const SimpleFooter = () => {
  return (
    <div className="simple-footer">
      <div className="footer-item" id="item-a">
        <img src="/upside-down-logo-text/diy.png" alt="DIY" />
      </div>
      <div className="footer-item" id="item-b">
        <img src="/upside-down-logo-text/underscore.png" alt="underscore" />
      </div>
      <div className="footer-item" id="item-c">
        <img src="/upside-down-logo-text/hawkchild.png" alt="HAWKCHILD" />
      </div>
    </div>
  );
};

export default SimpleFooter;
