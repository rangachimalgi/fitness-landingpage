import React from "react";
import "./Logo.scss";

const Logo = ({ size = "medium" }) => {
  return (
    <div className={`logo logo--${size}`}>
      <div className="logo__main">
        <span className="logo__letter logo__letter--s">S</span>
        <span className="logo__letter logo__letter--l">L</span>
        <span className="logo__letter logo__letter--a">A</span>
        <span className="logo__letter logo__letter--m">M</span>
      </div>
      <div className="logo__tagline">LIFESTYLE AND FITNESS STUDIO</div>
    </div>
  );
};

export default Logo; 