import React, { useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
// Images
import itadakimasuMobileHome from "./static/itadakimasu-mobile-home.png";
// React-card-flip
import ReactCardFlip from "react-card-flip";
// Icons
import { CgArrowRightO } from "react-icons/cg";
import { CgArrowLeftO } from "react-icons/cg";

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

        {/* // !!! To delete under construction once I have added more */}
        <h2 className="under-construction">
          Under Construction - stay tuned for more 💓{" "}
        </h2>

        {/* <div className="project-card-japanese-api all-cards">
          <img
            className="mobile-img-view"
            src={itadakimasuMobileHome}
            alt="Mobile view of Japanese API recipe search site, 'Itadakimasu, to eat and receive - a simple homepage with a search bar and a lantern illustration behind a glass card."
          />
        </div> */}

        {/* // ? Testing flip card.. */}

        <ReactCardFlip
          isFlipped={isFlipped}
          flipDirection="horizontal"
          // Default speed is 0.6
          // flipSpeedBackToFront="0.4"
          // flipSpeedFrontToBack="0.4"
          // True rotates the card in the same direction..
          infinite="true"
        >
          {/* // ! Front */}
          <div className="project-card-japanese-api all-cards">
            <img
              className="mobile-img-view"
              src={itadakimasuMobileHome}
              alt="Mobile view of Japanese API recipe search site, 'Itadakimasu, to eat and receive - a simple homepage with a search bar and a lantern illustration behind a glass card."
            />
            <button
              className="flip-button front-button"
              onClick={handleFlipClick}
            >
              <CgArrowRightO />
            </button>
          </div>

          {/* // ! Back */}
          <div className="project-card-japanese-api all-cards back-card">
            <button
              className="flip-button back-button"
              onClick={handleFlipClick}
            >
              {" "}
              <CgArrowLeftO />
            </button>
          </div>
        </ReactCardFlip>
      </main>
    </>
  );
};

export default Projects;
