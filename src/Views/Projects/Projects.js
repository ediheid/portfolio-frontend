import React, { useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
// Images
import itadakimasuMobileHome from "./static/itadakimasu-mobile-home.png";
import itadakimasuDesktopPreview from "./static/itadakimasu-desktop-preview.png";
// React-card-flip
import ReactCardFlip from "react-card-flip";
// Icons
import { CgArrowRightO } from "react-icons/cg";
import { CgArrowLeftO } from "react-icons/cg";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

import { BsArrowRightCircle } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs";

const Projects = () => {
  //  React-card-flip state hook
  const [isFlipped, setIsFlipped] = useState(false);

  //  Handle click for card-flip
  const handleFlipClick = (event) => {
    event.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <NavBar />
      <main className="project-page-main-container">
        <h1 className="project-page-heading">Projects</h1>
        <p className="projects-subheading">
          A collection of dynamic Single Page Applications, static websites, and
          design concepts.
        </p>

        {/* // ! Testing flip card.. */}
        {/* // ! Breakdown into Components - every card will be different */}
        {/* ReactCardFlip needs two children in order to function */}

        {/* // ? Japanese Api Card.. */}
        <ReactCardFlip
          isFlipped={isFlipped}
          flipDirection="horizontal"
          // Default speed is 0.6
          flipSpeedBackToFront="0.8"
          flipSpeedFrontToBack="0.8"
          // True rotates the card in the same direction..
          infinite="true"
        >
          {/* // ?  Front */}
          <div className="project-card-japanese-api all-cards">
            <img
              className="mobile-img-view"
              src={itadakimasuMobileHome}
              alt="Mobile view of Japanese API recipe search site, 'Itadakimasu, to eat and receive - a simple homepage with a search bar and a lantern illustration behind a glass card."
            />

            {/* Button to flip card for more info */}
            <button
              className="flip-button front-button"
              onClick={handleFlipClick}
            >
              <BsArrowRightCircle />
            </button>
          </div>

          {/* // ?  Back */}
          <div className="project-card-japanese-api all-cards back-card japanese-api-back">
            <h2 className="back-card-heading">Itadakimasu</h2>

            <p className="back-card-paragraph">
              A simple React app utilising a recipe search API, narrowed down to
              a specific cuisine along with other parameters, conditions and
              styling, resulting in the user being able to effortlessly search
              for their favourite Japanese dish.
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
              onClick={handleFlipClick}
            >
              <BsArrowLeftCircle />
            </button>
          </div>
        </ReactCardFlip>
      </main>
    </>
  );
};

export default Projects;
