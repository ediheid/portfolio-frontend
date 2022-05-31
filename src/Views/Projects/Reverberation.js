import React from "react";

import reverberation from "../Projects/static/reverberation.mp4";

const Reverberation = (props) => {
  return (
    <section className="cards-container">
      {/* ? Card are - entire card contents is a link to the project */}

      <a
        className="card-link"
        href="https://reverberation-frontend.vercel.app/"
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

        <h2 className="project-heading">*WIP*</h2>
        {/* Project description */}
        <p className="project-paragraph">
          Sole web design and development for an annual music and arts festival
          held in Dresden.
          <br /> · Under construction ·
        </p>

        {/* Project links container */}
        <div className="project-links-container">
          <a
            className="website-project-link"
            href="https://reverberation-frontend.vercel.app/"
            target="_blank"
            rel="noreferrer noopener"
            alt="Link to Reverberation Festival website"
          >
            <props.ImLink />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reverberation;
