import React, { useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";

import { Link } from "react-router-dom";

// Progress bar
import ProgressBar from "react-scroll-progress-bar";

// Images
import MyLolaImg1 from "../MyLola/Static/my-lola-img1.png";
import MyLolaImg2 from "../MyLola/Static/my-lola-img2.png";
import MyLolaImg3 from "../MyLola/Static/my-lola-img3.png";
import MyLolaImg4 from "../MyLola/Static/my-lola-img4.png";
import MyLolaImg5 from "../MyLola/Static/my-lola-img5.png";

// AOS covering Component imports
import Aos from "aos";
import "aos/dist/aos.css";

const MyLola = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: false });
  }, []);
  return (
    <>
      {/* NavBar needs to be in individual view Component rather than App.js for mobile nav functionality */}
      <NavBar />
      <ProgressBar height=".5rem" bgcolor="#d342c3" />

      <main className="my-lola-page-main-container">
        <h1 className="my-lola-page-heading">My Lola</h1>
        <p className="my-lola-paragraph">
          My Lola is a mock environmentally friendly period product company. I
          created the business model and UI using simple html and css as a
          project during the marketing module of my orientation course of my web
          development studies.
        </p>
        <div className="my-lola-image-container">
          <img
            data-aos="fade-up"
            src={MyLolaImg1}
            className="my-lola-images"
            alt="Landing page of My Lola Design"
          ></img>

          <img
            data-aos="fade-up"
            src={MyLolaImg2}
            className="my-lola-images"
            alt="Landing page of My Lola Design"
          ></img>

          <img
            data-aos="fade-up"
            src={MyLolaImg3}
            className="my-lola-images"
            alt="Landing page of My Lola Design"
          ></img>

          <img
            data-aos="fade-up"
            src={MyLolaImg4}
            className="my-lola-images"
            alt="Landing page of My Lola Design"
          ></img>

          <img
            data-aos="fade-up"
            src={MyLolaImg5}
            className="my-lola-images"
            alt="Landing page of My Lola Design"
          ></img>
        </div>

        <Link
          data-aos="fade-up"
          className="projects-view-link"
          to="/home/projects"
          alt="Link back to projects page"
        >
          Back to Portfolio
        </Link>
      </main>
    </>
  );
};

export default MyLola;
