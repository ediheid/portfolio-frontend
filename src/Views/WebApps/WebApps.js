import React, { useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";

// Web App Components
import Calculator from "./Calculator/Calculator";
import TodoApp from "./TodoApp/TodoApp";
import PasswordGenerator from "./Password-Generator/PasswordGenerator";

// AOS
import Aos from "aos";
import "aos/dist/aos.css";

const WebApps = () => {
  // AOS functionality
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
      {/* NavBar needs to be in individual view Component rather than App.js for mobile nav functionality */}
      <NavBar />
      <div className="web-apps-page-main-container">
        <main>
          {/* App Container */}
          <div className="apps-content-container" data-aos="fade-down">
            {/* Calculator App */}
            <Calculator />
            {/* To-do App */}
            <TodoApp />
            {/* Password Generator */}
            <PasswordGenerator />
            <h2 className="coming-soon-notice">
              Under construction, <br /> More coming soon! 🙂
            </h2>
          </div>
        </main>
      </div>
    </>
  );
};

export default WebApps;
