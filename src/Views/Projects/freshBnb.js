import React from "react";

import freshbnb from "./static/freshbnb.png";

import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

const FreshBnb = (props) => {
  return (
    <section className="cards-container">
      {/* ? Card are - entire card contents is a link to the project */}
      <a
        className="card-link"
        href="https://frontend-dci-final-group-project.vercel.app/"
        target="_blank"
        rel="noreferrer noopener"
        alt="Link to FreshBnb group project"
      >
        {/* Card with all-cards-layout and individual styling for particular project card */}
        <div className="all-cards-layout project-card-freshbnb">
          {/* Mobile dimension image */}
          <img
            className="fresh-bnb-img"
            src={freshbnb}
            alt="Desktop view of site, 'FreshBnb'"
          />
        </div>
      </a>

      {/* ? Project text below card */}
      <div className="project-text-container">
        {/* Project Heading */}
        <h2 className="project-heading">FreshBnb</h2>
        {/* Project description */}
        <p className="project-paragraph">
          FreshBnb is a mock property booking and hosting platform for caravans
          and buses. Inspired by the pandemic and Airbnb. This is the final
          group project for our one year intensive web development training at
          the Digital Career Institute, Berlin. Made in collaboration with
          Katharina Dobiosch, Jan Happle, Marc Lopez and Giuseppe Falcidia.
          {/* Quote for this particular card */}
          {/* <span className="itadakimasu-quote-span">
            <RiDoubleQuotesL fontSize="2rem" />
            <i> Time to hit the road!</i>
            <RiDoubleQuotesR />
          </span> */}
        </p>
        <p className="project-paragraph">
          {" "}
          My main roles in the project were:{" "}
          <ul>
            <li>
              <b>·</b> Scrum master - organising weekly sprints and conducting
              daily scrum meetings, ensuring a smooth, organised and completed
              project <b>·</b>
            </li>
            <li>
              {" "}
              <b>·</b> Search Component styling, implementation and
              functionality <b>·</b>
            </li>
            <li>
              <b>·</b> Google-Map API and React-Google-Autocomplete frontend
              logic, integration and styling <b>·</b>
            </li>
            <li>
              <b>·</b> Software Requirement Specification, Design Guidelines and
              environment setup and structure <b>·</b>
            </li>
            <li>
              <b>·</b> Data population from REST APIs <b>·</b>
            </li>
            <li>
              <b>·</b> UI/UX features <b>·</b>
            </li>
            <li>
              <b>·</b> Deployment and site maintenance <b>·</b>
            </li>
          </ul>
        </p>

        {/* Project links container */}
        <div className="project-links-container">
          <a
            className="website-project-link"
            href="https://frontend-dci-final-group-project.vercel.app/"
            target="_blank"
            rel="noreferrer noopener"
            alt="link to FreshBnb website"
          >
            <props.ImLink />
          </a>
          <a
            className="git-hub-project-link"
            href="https://github.com/ediheid/frontend-dci-final-group-project"
            target="_blank"
            rel="noreferrer noopener"
            alt="link to FreshBnb GitHub repository"
          >
            <props.ImGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FreshBnb;
