import React from "react";
import { Link } from "react-router-dom";

const LogoLink = () => {
  return (
    <div className="logo-home-container">
      <Link className="logo-link" to="/" alt="Link to home/about page">
        <h2 className="logo-text">
          EH:
          {/* <span className="logo-smaller-font">&#123;...&#125;</span> */}
        </h2>
      </Link>
    </div>
  );
};

export default LogoLink;
