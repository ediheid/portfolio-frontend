import React from "react";

const Design = () => {
  return (
    <section className="cards-container">
      {/* // ! Decide if the link to my design should open up in new page only accessible through projects page */}
      <div></div>

      {/* ? Project text below card */}
      <div className="project-text-container freshbnb-text-container">
        {/* Project Heading */}
        <h2 className="project-heading">UI/UX Design</h2>
        {/* Project description */}
        {/* <p className="project-paragraph">
          FreshBnb is a mock property booking and hosting platform for caravans
          and buses. Inspired by the pandemic and Airbnb. This is the final
          group project for our one year intensive web development training at
          the Digital Career Institute, Berlin. Made in collaboration with
          Katharina Dobiosch, Jan Happle, Marc Lopez and Giuseppe Falcidia.
  
        </p> */}
        {/* <p className="project-paragraph">
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
        </p> */}

        {/* Project links container */}
        {/* <div className="project-links-container">
          <a
            className="website-project-link"
            href="https://freshbnb.vercel.app/"
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
        </div> */}
      </div>
    </section>
  );
};

export default Design;
