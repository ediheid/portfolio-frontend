import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavLinks = () => {
  return (
    // Unordered list - links container
    <ul className="ul-links-container">
      <li className="nav-links">
        <HashLink className="nav-links" to="/home/#about">
          About
        </HashLink>
      </li>

      {/* Projects link */}
      <li className="nav-links">
        <Link className="nav-links" to="/home/projects">
          Projects
        </Link>
      </li>

      {/* Web-Apps Link */}
      <li className="nav-links">
        <Link className="nav-links" to="/home/webapps">
          Web-Apps
        </Link>
      </li>

      {/* Contact Link */}
      <li className="nav-links">
        <Link className="nav-links" to="/home/contact">
          Contact
        </Link>
      </li>

      {/* HomeLink - ! Only visible on hamburger open - otherwise home link is the eh. logo */}
      <li className="nav-links">
        <Link className="nav-links" id="nav-home-link" to="/home/">
          Home
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
