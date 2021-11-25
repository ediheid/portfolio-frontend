import React from "react";
import { HashLink } from "react-router-hash-link";

const Title = () => {
  return (
    <section className="title-section">
      <h3
        data-aos="fade-right"
        data-aos-anchor-placement="top-bottom"
        className="sub-heading"
      >
        Web Developer.
      </h3>
      <HashLink to="/#about" className="name-heading">
        <h1 data-aos="zoom-in-up" className="name-heading">
          Edith
        </h1>
        <h1 data-aos="zoom-in-down" className="name-heading">
          Heidmann
        </h1>
      </HashLink>

      <h3 data-aos="fade-left" className="sub-heading">
        Simple Design | Creative Programming
      </h3>

      <div className="hashlink-container">
        {/* React router HashLinks to home page sections */}

        <HashLink className="title-hashlinks hashlink-hover" to="/#who">
          Who
        </HashLink>
        <span className="title-hashlinks "> · </span>
        <HashLink className="title-hashlinks hashlink-hover" to="/#what">
          What
        </HashLink>
        <span className="title-hashlinks"> · </span>
        <HashLink className="title-hashlinks hashlink-hover" to="/#where">
          Where
        </HashLink>
      </div>
    </section>
  );
};

export default Title;
