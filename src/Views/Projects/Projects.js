import React, { useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";
// Card Components
import ItadakimasuSection from "./ItadakimasuSection";
import HTMLportfolio from "./HTMLportfolio";
import BootstrapStatic from "./BootstrapStatic";

// Icons to pass down via props to individual cards
import { ImGithub } from "react-icons/im";
import { ImLink } from "react-icons/im";

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

        {/*  Cards Section.. */}
        <section className="cards-container">
          {/* Itadakimasu */}
          <ItadakimasuSection ImGithub={ImGithub} ImLink={ImLink} />

          {/* HTML Portfolio */}
          <HTMLportfolio ImGithub={ImGithub} ImLink={ImLink} />

          {/* Bootstrap Static */}
          <BootstrapStatic ImGithub={ImGithub} ImLink={ImLink} />
        </section>
      </main>
    </>
  );
};

export default Projects;
