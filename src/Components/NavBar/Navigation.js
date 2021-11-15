import React from "react";
import NavLinks from "./NavLinks";
import LogoLink from "./LogoLink";

const Navigation = (props) => {
  return (
    // Regular Navigation container - to hide on mobile view
    <nav
      // className="navigation"
      // UseState prop passed down from NavBar.js to change navBar colour only on scroll up
      className={props.bgChange ? "bgChange navigation" : "navigation"}
    >
      {/* Logo - Home link */}
      <LogoLink />
      {/* Navlinks  */}
      <NavLinks />
    </nav>
  );
};

export default Navigation;
