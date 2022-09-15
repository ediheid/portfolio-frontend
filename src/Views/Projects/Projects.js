import React, { useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";
// Card Components
import ItadakimasuSection from "./ItadakimasuSection";
import HTMLportfolio from "./HTMLportfolio";
import BootstrapStatic from "./BootstrapStatic";
import FreshBnb from "./freshBnb";
import MyLolaCard from "./MyLolaCard";
import Heideteam from "./Heideteam";
import Reverberation from "./Reverberation";

// Icons to pass down via props to individual cards
import { ImGithub } from "react-icons/im";
import { ImLink } from "react-icons/im";

// AOS
import Aos from "aos";
import "aos/dist/aos.css";

// Progress bar
import ProgressBar from "react-scroll-progress-bar";

const Projects = () => {
  // AOS functionality
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* NavBar needs to be in individual view Component rather than App.js for mobile nav functionality */}
      <NavBar />
      <ProgressBar height=".5rem" bgcolor="#d342c3" />
      <main data-aos="fade-down" className="project-page-main-container">
        <h1 className="project-page-heading">Portfolio</h1>

        {/*  Cards Section.. */}
        <section className="cards-container">
          {/* Revereberation */}
          <Reverberation ImLink={ImLink} ImGitHub={ImGithub} />

          {/* HeideTeam */}
          <Heideteam ImLink={ImLink} />

          <div>test</div>

          {/* My Lola Card */}
          <MyLolaCard />

          {/* FreshBnb */}
          <FreshBnb ImGithub={ImGithub} ImLink={ImLink} />

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
