import React from "react";

import htmlPortfolio from "./static/html-portfolio.png";

const HTMLportfolio = (props) => {
  return (
    <section className="cards-container">
      {/* ? Card are - entire card contents is a link to the project */}
      <a
        className="card-link"
        href="https://ediheid.github.io/projects/portfolio/index.html"
        target="_blank"
        rel="noreferrer noopener"
        alt="Link to static html portfolio site"
      >
        {/* Card withall-cards-layout and individual styling for particular project card */}
        <div className="all-cards-layout project-card-html-portfolio">
          {/* Image */}
          <img
            className="desktop-img-view"
            src={htmlPortfolio}
            alt="Desktop view of static html portfolio home page."
          />
        </div>
      </a>
    </section>
  );
};

export default HTMLportfolio;
