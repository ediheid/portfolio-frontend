import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
// Card Components
import ItadakimasuCard from "./ItadakimasuCard";

const Projects = () => {
  // Open and toggle state is in each individual card component so the state is not changed on every toggle

  return (
    <>
      <NavBar />
      <main className="project-page-main-container">
        <h1 className="project-page-heading">Projects</h1>
        <p className="projects-subheading">
          A collection of dynamic Single Page Applications, static websites, and
          design concepts.
        </p>

        {/* Cards container.. */}
        <section className="cards-container">
          {/* Itadakimasu Recipe API Card */}
          <ItadakimasuCard />
        </section>
      </main>
    </>
  );
};

export default Projects;
