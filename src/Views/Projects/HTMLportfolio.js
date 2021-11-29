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
        {/* Card with all-cards-layout and individual styling for particular project card */}
        <div className="all-cards-layout project-card-html-portfolio">
          {/* Image */}
          <img
            className="desktop-img-view"
            src={htmlPortfolio}
            alt="Desktop view of static html portfolio home page."
          />
        </div>
      </a>

      {/* ? Project text below card */}
      <div className="project-text-container">
        {/* Project Heading */}
        <h2 className="project-heading">Static Portfolio</h2>
        {/* Project description */}
        <p className="project-paragraph">
          A stripped back portfolio built with HTML and CSS/scss, presented as
          my final project of the UI basics module in the very early days of my
          Web Development studies.
        </p>

        {/* Project links container */}
        <div className="project-links-container">
          <a
            className="website-project-link"
            href="https://ediheid.github.io/projects/portfolio/index.html"
            target="_blank"
            rel="noreferrer noopener"
            alt="Link to static html portfolio"
          >
            <props.ImLink />
          </a>
          <a
            className="git-hub-project-link"
            href="https://github.com/ediheid/projects"
            target="_blank"
            rel="noreferrer noopener"
            alt="link to html portfolio GitHub repository"
          >
            <props.ImGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HTMLportfolio;
