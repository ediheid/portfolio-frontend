import React from "react";
// Image
import itadakimasuMobileHome from "./static/itadakimasu-mobile-home.png";

const JapaneseApiCardFront = (props) => {
  return (
    <div className="project-card-japanese-api front-cards">
      <img
        className="mobile-img-view"
        src={itadakimasuMobileHome}
        alt="Mobile view of Japanese API recipe search site, 'Itadakimasu, to eat and receive - a simple homepage with a search bar and a lantern illustration behind a glass card."
      />

      {/* Button to flip card for more info */}
      <button
        className="flip-button front-button"
        onClick={props.handleFlipClick}
      >
        <props.BsArrowRightCircle />
      </button>
    </div>
  );
};

export default JapaneseApiCardFront;
