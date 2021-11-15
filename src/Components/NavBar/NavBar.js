import React, { useState, useEffect } from "react";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

const NavBar = () => {
  // State hooks
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // ? Handle scroll  - scroll is visible on scroll up and not on scroll down
  const handleScroll = () => {
    // find current scroll position
    const currentScrollPos = window.scrollY;

    // Set state based on location
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 20);

    // Set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  };

  // useEffect
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  // ? Detect scroll direction to change colour on scroll up
  const [bgChange, setBgChange] = useState(false);

  const changeNavBarColor = () => {
    if (window.scrollY >= 50) {
      setBgChange(true);
    } else {
      setBgChange(false);
    }
  };

  window.addEventListener("scroll", changeNavBarColor);

  return (
    <div
      style={{ top: visible ? "0" : "-100px" }}
      className="nav-bar nav-coloured-bg"
    >
      <MobileNavigation bgChange={bgChange} />
      <Navigation bgChange={bgChange} />
    </div>
  );
};

export default NavBar;
