import React, { Fragment, useState } from "react";

import Expand from "react-expand-animated";

import itadakimasuMobileHome from "./static/itadakimasu-mobile-home.png";

import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

const ItadakimasuCard = () => {
  //  State Hook - isOpen to open and close expandable area - original
  const [isOpen, setIsOpen] = useState(false);

  // Handle Toggle original function
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      {/* // ? Main card */}
      <div className="project-card-japanese-api front-cards">
        <img
          className="mobile-img-view"
          src={itadakimasuMobileHome}
          alt="Mobile view of Japanese API recipe search site, 'Itadakimasu, to eat and receive - a simple homepage with a search bar and a lantern illustration behind a glass card."
        />

        {/*  // ! To Style */}

        <div className="options-container">
          <a
            // className="website-link"
            href="https://epic-hypatia-0d24fe.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Link to site
          </a>

          <button onClick={handleToggle}>More</button>
        </div>
      </div>

      {/* // ? Expanded section */}
      <Expand open={isOpen}>
        <div className="expanded-card-area">
          <h2 className="back-card-heading">Itadakimasu</h2>
          <p className="back-card-paragraph">
            A simple React app utilising a recipe search API - with custom
            parameters, conditions and styling, resulting in the user being able
            to effortlessly search for their favourite Japanese dish.
            <span className="itadakimasu-quote-span">
              <RiDoubleQuotesL fontSize="2rem" />
              <i> Itadakimasu! </i>
              <RiDoubleQuotesR />
            </span>
          </p>

          <a
            className="website-link"
            href="https://epic-hypatia-0d24fe.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Link to site
          </a>
        </div>
      </Expand>
    </Fragment>
  );
};

export default ItadakimasuCard;
