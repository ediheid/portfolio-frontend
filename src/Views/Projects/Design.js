import React from "react";
import { Link } from "react-router-dom";

import designImg from "./static/design-placeholder-image.png";

const Design = () => {
  return (
    <section className="cards-container">
      <Link className="card-link" to="/home/design" alt="Link to design page">
        {/* Card with all-cards-layout and individual styling for particular project card */}
        <div className="all-cards-layout design-card">
          <img
            className="desktop-img-view"
            src={designImg}
            alt="Mockups, wireframes and design"
          />
        </div>
      </Link>

      {/* ? Project text below card */}
      <div className="project-text-container ">
        {/* Project Heading */}
        <h2 className="project-heading">UI/UX Design</h2>
        {/* Project description */}
        <p className="project-paragraph">
          A selection of mockups, wireframes and web design.
        </p>

        {/* Project links container */}
        <div className="design-link-container">
          <Link
            className="card-link design-link"
            to="/home/design"
            alt="Link to design page"
          >
            <span>To Design Page</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Design;
