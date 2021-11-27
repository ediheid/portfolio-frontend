import React, { useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";
// Card Components
import ItadakimasuSection from "./ItadakimasuSection";

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
          <ItadakimasuSection ImGithub={ImGithub} ImLink={ImLink} />
        </section>

        <div className="underConstruction">
          Under construction - more coming soon 👀
        </div>
      </main>
    </>
  );
};

export default Projects;
