import React from "react";

const Heideteam = () => {
  return (
    <section className="cards-container">
      {/* ? Card are - entire card contents is a link to the project */}

      <a
        className="card-link"
        href="https://fahrschule-heideteam.vercel.app/"
        target="_blank"
        rel="noreferrer noopener"
        alt="Link to Fahrschule Heideteam website"
      >
        {/* Card with all-cards-layout and individual styling for particular project card */}
        <div className="all-cards-layout project-card-freshbnb">
          {/* Mobile dimension image */}
          <img
            className=" freshbnb-img"
            // src={freshbnb}
            alt="Desktop view of site, 'FreshBnb'"
          />
        </div>
      </a>
    </section>
  );
};

export default Heideteam;
