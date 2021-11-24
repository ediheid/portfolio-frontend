import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
// Card Components
import ItadakimasuCard from "./ItadakimasuCard";

// Icons
// link icon
import { BsLink45Deg } from "react-icons/bs";
// less/more icons
import { MdOutlineExpandMore } from "react-icons/md";
import { MdOutlineExpandLess } from "react-icons/md";

const Projects = () => {
  // Open and toggle state is in each individual card component so the state is not changed on every toggle

  return (
    <main className="project-page-main-container">
      <h1 className="project-page-heading">Projects</h1>
      <p className="projects-subheading">
        A collection of dynamic Single Page Applications, static websites, and
        design concepts.
      </p>

      {/*  Cards Section.. */}
      <section className="cards-container">
        {/* // ? Itadakimasu Recipe API Card */}
        <ItadakimasuCard
          BsLink45Deg={BsLink45Deg}
          MdOutlineExpandMore={MdOutlineExpandMore}
          MdOutlineExpandLess={MdOutlineExpandLess}
        />
      </section>
    </main>
  );
};

export default Projects;
