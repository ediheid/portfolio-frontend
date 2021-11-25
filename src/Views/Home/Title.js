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
      <HashLink to="/home/#about" className="name-heading">
        <h1 data-aos="zoom-in-up" className="name-heading">
          Edith
        </h1>
        <h1 data-aos="zoom-in-down" className="name-heading">
          Heidmann
        </h1>
      </HashLink>

      <h3 data-aos="fade-left" className="sub-heading">
        User eXperience | User Interface
      </h3>
      {/* React router HashLinks to home page sections */}
      <HashLink to="/home/#who">Who?</HashLink>
      <HashLink to="/home/#what">What?</HashLink>
      <HashLink to="/home/#where">Where?</HashLink>
    </section>
  );
};

export default Title;
