import React from "react";

import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

const JapaneseApiCardBack = (props) => {
  return (
    <div className=" all-cards back-card japanese-api-back">
      <h2 className="back-card-heading">Itadakimasu</h2>

      <p className="back-card-paragraph">
        A simple React app utilising a recipe search API - with custom
        parameters, conditions and styling, resulting in the user being able to
        effortlessly search for their favourite Japanese dish.
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

      {/* Button back to front of card */}
      <button
        className="flip-button back-button"
        onClick={props.handleFlipClick}
      >
        <props.BsArrowLeftCircle />
      </button>
    </div>
  );
};

export default JapaneseApiCardBack;
