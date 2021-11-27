import React, { useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";
// Card Components
import ItadakimasuSection from "./ItadakimasuSection";

// AOS
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  // AOS functionality
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* NavBar needs to be in individual view Component rather than App.js for mobile nav functionality */}
      <NavBar />
      <main data-aos="fade-down" className="project-page-main-container">
        <h1 className="project-page-heading">Projects</h1>
        {/* <p className="projects-subheading">
          A collection of dynamic Single Page Applications, static websites, and
          design concepts.
        </p> */}

        {/*  Cards Section.. */}
        <section className="cards-container">
          <ItadakimasuSection />
        </section>

        <div className="underConstruction">
          Under construction - more coming soon 👀
        </div>
      </main>
    </>
  );
};

export default Projects;
