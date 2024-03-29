import React from "react";

import heideteam from "../Projects/static/heideteam.png";

const Heideteam = (props) => {
  return (
    <section className="cards-container">
      {/* ? Card are - entire card contents is a link to the project */}

      <a
        className="card-link"
        href="https://www.fahrschule-heideteam.de/"
        target="_blank"
        rel="noreferrer noopener"
        alt="Link to Fahrschule Heideteam website"
      >
        {/* Card with all-cards-layout and individual styling for particular project card */}
        <div className="all-cards-layout project-card-heideteam">
          <img
            className="heideteam-img-container "
            src={heideteam}
            alt="Desktop view of site, Fahrschule Heideteam"
          />
        </div>
      </a>

      {/* ? Project text below card */}
      <div className="project-text-container ">
        {/* Project Heading */}
        <h2 className="project-heading">Fahrschule Heideteam</h2>

        {/* Project description */}
        <p className="project-paragraph">
          Contract - end to end design, development and maintenance for a German
          driving school based in Radeberg, Saxony.
        </p>

        {/* Project links container */}
        <div className="project-links-container">
          <a
            className="website-project-link"
            href="https://www.fahrschule-heideteam.de/"
            target="_blank"
            rel="noreferrer noopener"
            alt="Link to Fahrschule Heideteam website"
          >
            <props.ImLink />
          </a>

          <a
            className="website-project-link"
            href="https://github.com/ediheid/fahrschule-heideteam"
            target="_blank"
            rel="noreferrer noopener"
            alt="Link to github repository"
          >
            <props.ImGitHub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Heideteam;
