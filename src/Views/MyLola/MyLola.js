import React from "react";

import NavBar from "../../Components/NavBar/NavBar";

// Progress bar
import ProgressBar from "react-scroll-progress-bar";

const MyLola = () => {
  return (
    <>
      {/* NavBar needs to be in individual view Component rather than App.js for mobile nav functionality */}
      <NavBar />
      <ProgressBar height=".5rem" bgcolor="#d342c3" />

      <main>
        <h1>
          <div></div>
        </h1>
      </main>

      <div>My Lola page will go here</div>
    </>
  );
};

export default MyLola;
