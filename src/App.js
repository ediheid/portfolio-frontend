// ?  Dependencies
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
// ? Styling
import "./Styling/App.scss";
// ? Views
import WebApps from "./Views/WebApps/WebApps";
import Home from "./Views/Home/Home";
import Contact from "./Views/Contact/Contact";
// ? Components
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

// ? App component
const App = () => {
  // Scroll to top on browser refresh
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  //  Back to top ARROW to top function
  const backToTop = () => {
    // Top is at 81 because NavBar height is 80 - otherwise NavBar will not display on jump to top
    window.scrollTo(0, 81);
  };

  return (
    <div className="app-container">
      <Router>
        {/* Scroll to top on route change */}
        <ScrollToTop />
        {/* NavBar is imported into individual pages for hamburger functionality */}
        <main className="main-content">
          <Switch>
            <Route path="/" exact component={Home} />

            {/* // !! <Route path="/home/projects" exact component={Projects} /> */}

            {/* <Route path="/home/about" exact component={About} /> */}

            {/* // !! <Route path="/home/webapps" exact component={WebApps} /> */}

            {/* //* Created path to contact still need to add content */}
            <Route path="/home/contact" exact component={Contact} />

            <Redirect to="/" exact />
          </Switch>
        </main>
        <Footer backToTop={backToTop} />
      </Router>
    </div>
  );
};

export default App;
