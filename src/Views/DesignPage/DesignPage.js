// !!! This will be the template for design pages as they will now all be separate..

import React from "react";

import NavBar from "../../Components/NavBar/NavBar";

// Progress bar
import ProgressBar from "react-scroll-progress-bar";

const DesignPage = () => {
  return (
    <>
      {/* NavBar needs to be in individual view Component rather than App.js for mobile nav functionality */}
      <NavBar />
      <ProgressBar height=".5rem" bgcolor="#d342c3" />
      {/* // Todo */}
      {/* // ! Add up the top 'back to projects' */}
      <main className="design-page-main-container">
        <h1 className="design-page-heading">UI / UX Design</h1>
        <div className="design-page-content-container">
          <section className="design-section">
            <h2 className="design-section-heading">Wireframing and Mockups</h2>
            <p className="design-section-paragraph">
              Re-design wireframing and mockups created in Figma for a FinTech
              platform. Creating a sleek, modern design with improved user ease
              and accessibility.
            </p>
          </section>
        </div>
      </main>
    </>
  );
};

export default DesignPage;
