import React from "react";

import itadakimasuMobileHome from "./static/itadakimasu-iphone-mockup.png";
import itadakimasuMobileHome2 from "./static/itadakimasu-iphone-mockup-2.png";

import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

const ItadakimasuSection = (props) => {
  return (
    <section className="cards-container">
      {/* ? Card are - entire card contents is a link to the project */}
      <a
        className="card-link"
        href="https://epic-hypatia-0d24fe.netlify.app/"
        target="_blank"
        rel="noreferrer noopener"
        alt="Link to Itadakimasu site"
      >
        {/* Card withall-cards-layout and individual styling for particular project card */}
        <div className="all-cards-layout project-card-itadakimasu ">
          {/* Mobile dimension image */}
          <img
            className="mobile-img-view"
            src={itadakimasuMobileHome}
            alt="Mobile view of site, 'Itadakimasu, to eat and receive' - a simple homepage with a search bar and a lantern illustration behind a glass card."
          />
          <img
            className="mobile-img-view"
            src={itadakimasuMobileHome2}
            alt="Mobile view of site with search results and recipe cards, 'Itadakimasu, to eat and receive' - a simple homepage with a search bar and a lantern illustration behind a glass card."
          />
        </div>
      </a>

      {/* ? Project text below card */}
      <div className="project-text-container">
        {/* Project Heading */}
        <h2 className="project-heading">Itadakimasu</h2>
        {/* Project description */}
        <p className="project-paragraph">
          A simple and responsive React app utilising a recipe search API - with
          custom parameters, conditions and styling, resulting in the user being
          able to effortlessly search for their favourite Japanese dish. Styled
          with SASS.
          {/* Quote for this particular card */}
          <span className="itadakimasu-quote-span">
            <RiDoubleQuotesL fontSize="2rem" />
            <i> Itadakimasu! </i>
            <RiDoubleQuotesR />
          </span>
        </p>

        {/* Project links container */}
        <div className="project-links-container">
          <a
            className="website-project-link"
            href="https://epic-hypatia-0d24fe.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
            alt="link to Itadakimasu website"
          >
            <props.ImLink />
          </a>
          <a
            className="git-hub-project-link"
            href="https://github.com/ediheid/japanese-recipe-app"
            target="_blank"
            rel="noreferrer noopener"
            alt="link to Itadakimasu GitHub repository"
          >
            <props.ImGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ItadakimasuSection;
