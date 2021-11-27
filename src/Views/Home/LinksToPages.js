import React from "react";
import { Link } from "react-router-dom";

const LinksToPages = () => {
  return (
    <>
      <h2
        className="links-to-pages-heading"
        data-aos="fade-right"
        data-aos-once="false"
        data-aos-duration="1000"
      >
        See more
      </h2>
      <section className="links-to-pages-section">
        {/* // ? Projects  */}
        {/* Container for link circle and outer circle with animation */}
        <div className="projects-link-container">
          {/*  Outer circle with text to animate */}
          <div className="outer-animation-circle">
            <p className="animated-circle-text">
              <span className="span-rotate">l</span>
              <span className="span-rotate">i</span>
              <span className="span-rotate">n</span>
              <span className="span-rotate">k</span>
              <span className="span-rotate"></span>
              <span className="span-rotate">h</span>
              <span className="span-rotate">e</span>
              <span className="span-rotate">r</span>
              <span className="span-rotate">e</span>
              <span className="span-rotate"></span>

              <span className="span-rotate">l</span>
              <span className="span-rotate">i</span>
              <span className="span-rotate">n</span>
              <span className="span-rotate">k</span>
              <span className="span-rotate"></span>
              <span className="span-rotate">h</span>
              <span className="span-rotate">e</span>
              <span className="span-rotate">r</span>
              <span className="span-rotate">e</span>
              <span className="span-rotate"></span>

              <span className="span-rotate">l</span>
              <span className="span-rotate">i</span>
              <span className="span-rotate">n</span>
              <span className="span-rotate">k</span>
              <span className="span-rotate"></span>
              <span className="span-rotate">h</span>
              <span className="span-rotate">e</span>
              <span className="span-rotate">r</span>
              <span className="span-rotate">e</span>
              <span className="span-rotate"></span>

              <span className="span-rotate">l</span>
              <span className="span-rotate">i</span>
              <span className="span-rotate">n</span>
              <span className="span-rotate">k</span>
              <span className="span-rotate"></span>
              <span className="span-rotate">#</span>
            </p>

            {/* // ? Inner circle with link span inside */}
            <Link
              className="page-links-circle circle-link"
              to="/home/projects"
              alt="Link to projects page"
            >
              <span>Projects</span>
            </Link>
          </div>
          <div
            className="page-description"
            data-aos="flip-up"
            data-aos-once="false"
            data-aos-delay="200"
            data-aos-duration="600"
          >
            Collection of dynamic Single Page Applications, static websites, and
            design concepts.
          </div>
        </div>

        {/* // ? Web Apps */}
        {/* Container with link and text */}
        {/* Container for link circle and outer circle with animation */}
        <div className="projects-link-container">
          {/*  Outer circle with text to animate */}
          <div className="outer-animation-circle">
            <p className="animated-circle-text">
              <span className="span-rotate">l</span>
              <span className="span-rotate">i</span>
              <span className="span-rotate">n</span>
              <span className="span-rotate">k</span>
              <span className="span-rotate"></span>
              <span className="span-rotate">h</span>
              <span className="span-rotate">e</span>
              <span className="span-rotate">r</span>
              <span className="span-rotate">e</span>
              <span className="span-rotate"></span>

              <span className="span-rotate">l</span>
              <span className="span-rotate">i</span>
              <span className="span-rotate">n</span>
              <span className="span-rotate">k</span>
              <span className="span-rotate"></span>
              <span className="span-rotate">h</span>
              <span className="span-rotate">e</span>
              <span className="span-rotate">r</span>
              <span className="span-rotate">e</span>
              <span className="span-rotate"></span>

              <span className="span-rotate">l</span>
              <span className="span-rotate">i</span>
              <span className="span-rotate">n</span>
              <span className="span-rotate">k</span>
              <span className="span-rotate"></span>
              <span className="span-rotate">h</span>
              <span className="span-rotate">e</span>
              <span className="span-rotate">r</span>
              <span className="span-rotate">e</span>
              <span className="span-rotate"></span>

              <span className="span-rotate">l</span>
              <span className="span-rotate">i</span>
              <span className="span-rotate">n</span>
              <span className="span-rotate">k</span>
              <span className="span-rotate"></span>
              <span className="span-rotate">#</span>
            </p>

            {/* // ? Inner circle with link span inside */}
            <Link
              className="page-links-circle circle-link"
              to="/home/webapps"
              alt="Link to web apps page"
            >
              <span>Web Apps</span>
            </Link>
          </div>
          <div
            className="page-description"
            data-aos="flip-up"
            data-aos-once="false"
            data-aos-delay="200"
            data-aos-duration="600"
          >
            Assortment of interactive web applications.
          </div>
        </div>
      </section>
    </>
  );
};

export default LinksToPages;
