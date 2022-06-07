import React from "react";

import reverberation from "../Projects/static/reverberation.mp4";

const Reverberation = (props) => {
  return (
    <section className="cards-container">
      {/* ? Card are - entire card contents is a link to the project */}

      <a
        className="card-link"
        href="https://www.reverberationfest.de/"
        target="_blank"
        rel="noreferrer noopener"
        alt="Link to Reverberation Festival website"
      >
        {/* Card with all-cards-layout and individual styling for particular project card */}
        <div className="all-cards-layout project-card-reverberation">
          <video
            autoplay="autoplay"
            muted="true"
            loop="true"
            webkit-playsinline="true"
            playsinline="true"
            className="reverberation-video-container"
            alt="Landing page view of the Reverberation Festival website"
          >
            <source src={reverberation} type="video/mp4"></source>
          </video>{" "}
        </div>
      </a>

      {/* ? Project text below card */}
      <div className="project-text-container ">
        {/* Project Heading */}
        <h2 className="project-heading">Reverberation Festival</h2>

        {/* Project description */}
        <p className="project-paragraph">
          End to end web design, development and maintenance for an annual music
          and arts festival held in Dresden.
        </p>

        {/* Project links container */}
        <div className="project-links-container">
          <a
            className="website-project-link"
            href="https://www.reverberationfest.de/"
            target="_blank"
            rel="noreferrer noopener"
            alt="Link to Reverberation Festival website"
          >
            <props.ImLink />
          </a>

          <a
            className="website-project-link"
            href="https://github.com/ediheid/reverberation-frontend"
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

export default Reverberation;
