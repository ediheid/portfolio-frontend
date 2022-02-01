import React, { useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";

// Page components
import Title from "./Title.js";
import Bio from "./Bio.js";
import IconAnimation from "./IconAnimation.js";
import LinksToPages from "./LinksToPages";
import DownloadCVSection from "./DownloadCVSection";

// Progress bar
import ProgressBar from "react-scroll-progress-bar";

// AOS covering Component imports
import Aos from "aos";
import "aos/dist/aos.css";

// ? Main Home component
const Home = () => {
  // * Main settings for Animate on scroll
  // Animate on scroll (AOS) - useEffect for title containers -
  // Other AOS elements are set to once: false with different duration times and delays
  // Find alternate AOS settings on elements within their component pages
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  // JSX

  return (
    <>
      {/* NavBar needs to be in individual view Component rather than App.js for mobile nav functionality */}
      <NavBar />
      <ProgressBar height=".5rem" bgcolor="#d342c3" />
      <main className="home-page-container">
        {/* Title Section with name and headings */}
        <Title />

        {/* Bio section*/}
        <Bio />

        <IconAnimation />

        {/* Links to web apps and projects pages */}
        <LinksToPages />

        {/* Download CV section */}
        <DownloadCVSection />
      </main>
    </>
  );
};

export default Home;
