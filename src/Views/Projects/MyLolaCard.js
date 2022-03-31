import React from "react";
import { Link } from "react-router-dom";

import myLolaImg from "./static/design-contact-us.png";

const MyLolaCard = () => {
  return (
    <section className="cards-container">
      <Link className="card-link" to="/home/mylola" alt="Link to design page">
        {/* Card with all-cards-layout and individual styling for particular project card */}
        <div className="all-cards-layout design-card">
          <img
            className="design-img"
            src={myLolaImg}
            alt="Mockups, wireframes and design"
          />
        </div>
      </Link>

      {/* ? Project text below card */}
      <div className="project-text-container ">
        {/* Project Heading */}
        <h2 className="project-heading">My Lola Design</h2>
        {/* Project description */}
        <p className="project-paragraph">
          Design for a mock environmentally friendly period product company.
          Created in simple html and css as a final project during the
          orientation course of my web development studies.
        </p>

        {/* Project links container */}
        <div className="design-link-container">
          <Link
            className="card-link design-link"
            to="/home/mylola"
            alt="Link to design page"
          >
            <span>More</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MyLolaCard;
