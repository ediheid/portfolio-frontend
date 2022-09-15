import React from "react";

const BootstrapStatic = (props) => {
  return (
    <section className="cards-container">
      {/* ? Card are - entire card contents is a link to the project */}
      <a
        className="card-link"
        href="https://zen-poincare-b93275.netlify.app/"
        target="_blank"
        rel="noreferrer noopener"
        alt="Link to Bootstrap yarn shop layout"
      >
        {/* Card with all-cards-layout and individual styling for particular project card */}
        <div className="all-cards-layout bootstrap-card"></div>
      </a>

      {/* ? Project text below card */}
      <div className="project-text-container">
        {/* Project Heading */}
        <h2 className="project-heading">Ain't Knit Great</h2>
        {/* Project description */}
        <p className="project-paragraph">
          A bare bones Bootstrap layout for a bespoke yarn shop, experimenting
          with and utilising some basic features of the library.
        </p>

        {/* Project links container */}
        <div className="project-links-container">
          <a
            className="website-project-link"
            href="https://zen-poincare-b93275.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
            alt="Link to Bootstrap yarn shop layout"
          >
            <props.ImLink />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BootstrapStatic;
