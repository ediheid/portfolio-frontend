import React, { useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";

// Web App Components
import Calculator from "./Calculator/Calculator";
import TodoApp from "./TodoApp/TodoApp";
import PasswordGenerator from "./Password-Generator/PasswordGenerator";
import WeatherApp from "./Weather-App/WeatherApp";

// AOS
import Aos from "aos";
import "aos/dist/aos.css";

// Progress bar
import ProgressBar from "react-scroll-progress-bar";

const WebApps = () => {
  // AOS functionality
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
      {/* NavBar needs to be in individual view Component rather than App.js for mobile nav functionality */}
      <NavBar />
      <ProgressBar height=".5rem" bgcolor="#d342c3" />
      <div className="web-apps-page-main-container">
        <main>
          {/* App Container */}
          <div className="apps-content-container" data-aos="fade-down">
            {/* Calculator App */}
            <Calculator />

            {/* To-do App */}
            <TodoApp />

            {/* Weather App */}
            <WeatherApp />

            {/* Password Generator */}
            <PasswordGenerator />
          </div>
        </main>
      </div>
    </>
  );
};

export default WebApps;
