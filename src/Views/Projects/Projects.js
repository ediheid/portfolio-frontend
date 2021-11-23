import React, { useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";

import JapaneseApiCardFront from "./JapaneseApiCardFront";
import JapaneseApiCardBack from "./JapaneseApiCardBack";

// React-card-flip
import ReactCardFlip from "react-card-flip";
// Icons
import { BsArrowRightCircle } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs";

const Projects = () => {
  //  React-card-flip state hook - original!
  const [isFlipped, setIsFlipped] = useState(false);

  //  Handle click for card-flip - original!
  const handleFlipClick = (event) => {
    event.preventDefault();
    setIsFlipped(!isFlipped);
  };

  // ! DEBUG - Different event handler for each ReactCardFlip Component, otherwise it takes on the state of all with the same event handler function name
  //  React-card-flip state hook - version 2 for testing
  const [isFlippedTwo, setIsFlippedTwo] = useState(false);
  //  Handle click for card-flip - version 2 for testing
  const handleFlipClickTwo = (event) => {
    event.preventDefault();
    setIsFlippedTwo(!isFlippedTwo);
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

        {/* Cards container.. */}
        <section className="cards-container">
          {/* // * Note: ReactCardFlip component needs TWO children in order to function */}
          {/* // ? Japanese Api Card.. */}
          <ReactCardFlip
            isFlipped={isFlipped}
            flipDirection="horizontal"
            // Default speed is 0.6
            flipSpeedBackToFront="0.8"
            flipSpeedFrontToBack="0.8"
            // True rotates the card in the same direction - default is set to "false"
            infinite="true"
          >
            {/* // Front component */}
            <JapaneseApiCardFront
              BsArrowRightCircle={BsArrowRightCircle}
              handleFlipClick={handleFlipClick}
            />

            {/* // Back component */}
            <JapaneseApiCardBack
              handleFlipClick={handleFlipClick}
              BsArrowLeftCircle={BsArrowLeftCircle}
            />
          </ReactCardFlip>

          {/* // !!! Duplicate for testing */}
          {/* <ReactCardFlip
            isFlipped={isFlippedTwo}
            flipDirection="horizontal"
            // Default speed is 0.6
            flipSpeedBackToFront="0.8"
            flipSpeedFrontToBack="0.8"
            // True rotates the card in the same direction - default is set to "false"
            infinite="true"
          >
            <JapaneseApiCardFront
              BsArrowRightCircle={BsArrowRightCircle}
              handleFlipClick={handleFlipClickTwo}
            />

            <JapaneseApiCardBack
              handleFlipClick={handleFlipClickTwo}
              BsArrowLeftCircle={BsArrowLeftCircle}
            />
          </ReactCardFlip> */}
        </section>
      </main>
    </>
  );
};

export default Projects;
