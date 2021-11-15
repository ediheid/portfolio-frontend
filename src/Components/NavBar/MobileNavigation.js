import React, { useState } from "react";
import LogoLink from "./LogoLink";
import { Divide as Hamburger } from "hamburger-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNavigation = (props) => {
  // On click/toggle Hamburger Hook
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Mobile Navigation container - to hide on regular navigation component view
    <nav
      // className="mobile-navigation"
      // UseState prop passed down from NavBar.js to change navBar colour only on scroll up
      className={
        props.bgChange ? "bgChange mobile-navigation" : "mobile-navigation"
      }
    >
      {/* Logo - Home link */}
      <LogoLink />

      {/* Hamburger */}
      <div className="hamburger-container">
        <Hamburger
          // Aria label for accessibility
          label="Show menu"
          size={25}
          toggled={isOpen}
          toggle={setIsOpen}
        />
      </div>
      {/* When hamburger menu is toggled - open NavLinks */}
      {isOpen && <MobileNavLinks />}
    </nav>
  );
};

export default MobileNavigation;
