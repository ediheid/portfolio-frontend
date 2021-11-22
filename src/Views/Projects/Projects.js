import React from "react";
import NavBar from "../../Components/NavBar/NavBar";

// images
import itadakimasuMobileHome from "./static/itadakimasu-mobile-home.png";

const Projects = () => {
  return (
    <>
      <NavBar />
      <main className="project-page-main-container">
        <h1 className="project-page-heading">Projects</h1>
        <p className="projects-subheading">
          A collection of dynamic Single Page Applications, static websites, and
          design concepts.
        </p>

        {/* // !!! To delete under construction once I have added more */}
        <h2 className="under-construction">
          Under Construction - stay tuned for more 💓{" "}
        </h2>

        <div className="project-card-japanese-api all-cards">
          <img
            className="mobile-img-view"
            src={itadakimasuMobileHome}
            alt="Mobile view of Japanese API recipe search site, 'Itadakimasu, to eat and receive - a simple homepage with a search bar and a lantern illustration behind a glass card."
          />
        </div>
      </main>
    </>
  );
};

export default Projects;
