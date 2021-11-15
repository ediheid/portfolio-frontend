import React from "react";
import { Link } from "react-router-dom";

const LogoLink = () => {
  return (
    <div className="logo-home-container">
      <Link className="logo-link" to="/">
        <h2 className="logo-text">EH.</h2>
      </Link>
    </div>
  );
};

export default LogoLink;
