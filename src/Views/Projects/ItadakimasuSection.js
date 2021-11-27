import React from "react";

import itadakimasuMobileHome from "./static/itadakimasu-mobile-home.png";

import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

const ItadakimasuSection = () => {
  return (
    <section className="cards-container">
      {/* ? Card are - entire card contents is a link to the project */}
      <a
        className="card-link"
        href="https://epic-hypatia-0d24fe.netlify.app/"
        target="_blank"
        rel="noreferrer noopener"
      >
        {/* Card withall-cards-layout and individual styling for particular project card */}
        <div className="all-cards-layout project-card-itadakimasu ">
          {/* Mobile dimension image */}
          <img
            className="mobile-img-view"
            src={itadakimasuMobileHome}
            alt="Mobile view of site, 'Itadakimasu, to eat and receive' - a simple homepage with a search bar and a lantern illustration behind a glass card."
          />
        </div>
      </a>

      {/* ? Project text below card */}
      <div className="project-text-container">
        {/* Project Heading */}
        <h2 className="project-heading">Itadakimasu</h2>
        {/* Project description */}
        <p className="project-paragraph">
          A simple React app utilising a recipe search API - with custom
          parameters, conditions and styling, resulting in the user being able
          to effortlessly search for their favourite Japanese dish.
          {/* Quote for this particular card */}
          <span className="itadakimasu-quote-span">
            <RiDoubleQuotesL fontSize="2rem" />
            <i> Itadakimasu! </i>
            <RiDoubleQuotesR />
          </span>
        </p>

        {/* // ! Re-style! */}
        {/* // ! Link to website as will as the entire card being a li */}
        <a
          className="website-written-link"
          href="https://epic-hypatia-0d24fe.netlify.app/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Link to site
        </a>

        {/* // ! Maybe for underline */}
        <div className="expanded-card-underline"></div>
      </div>
    </section>
  );
};

export default ItadakimasuSection;
