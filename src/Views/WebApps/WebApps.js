import React, { useEffect } from "react";
import Calculator from "./Calculator";
import NavBar from "../../Components/NavBar/NavBar";

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
      <NavBar />
      <div className="web-apps-page-main-container">
        <main>
          <div className="apps-content-container" data-aos="fade-down">
            <Calculator />
            <h2 className="coming-soon-notice">
              Stay Tuned, <br /> More coming soon!
            </h2>
          </div>
        </main>
      </div>
    </>
  );
};

export default WebApps;
