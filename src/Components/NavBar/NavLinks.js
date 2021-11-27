import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavLinks = () => {
  return (
    // Unordered list - links container
    <ul className="ul-links-container">
      {/* <li className="nav-links">
        <HashLink className="nav-links" to="/#about">
          About
        </HashLink>
      </li> */}

      {/* Projects link */}
      <li className="nav-links">
        <Link
          className="nav-links"
          to="/home/projects"
          alt="Links to projects page"
        >
          Projects
        </Link>
      </li>

      {/* Web-Apps Link */}
      <li className="nav-links">
        <Link
          className="nav-links"
          to="/home/webapps"
          alt="Links to web apps page"
        >
          Web-Apps
        </Link>
      </li>

      {/* Contact Link */}
      <li className="nav-links">
        <Link
          className="nav-links"
          to="/home/contact"
          alt="Link to contact page"
        >
          Contact
        </Link>
      </li>

      {/* HomeLink - ! Only visible on hamburger open - otherwise home link is the eh. logo */}
      <li className="nav-links">
        <Link
          className="nav-links"
          id="nav-home-link"
          to="/home/"
          alt="Link to home/about page"
        >
          Home
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
