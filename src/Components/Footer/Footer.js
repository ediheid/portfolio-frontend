import React from "react";
import { Link } from "react-router-dom";
// Icons
import { ImGithub } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
// import { MdOutlineArrowUpward } from "react-icons/md";

//  Footer Component
const Footer = (props) => {
  //  ? Back to top ARROW to top function passed down from App.js

  //  Get date and year to pass into copyright
  let currentTime = new Date();
  let currentYear = currentTime.getFullYear();

  return (
    <>
      {/* Dividing line between main content and footer container */}
      <div className="footer-dividing-line"></div>
      {/* Footer container */}
      <footer className="footer-container">
        {/* // ? Commented out for now - testing if I should keep or not? */}
        {/* BACK TO TOP */}
        {/* <div onClick={props.backToTop} className="back-to-top">
          <MdOutlineArrowUpward />
        </div> */}

        {/* Contact button/link for footer - directs to contact page - as well as having it in the main menu */}
        <div
          // ? Also commenting out - contact button will not jump to top of contact page anymore - test if I like this or not?
          // onClick={props.backToTop}
          className="contact-button-container"
        >
          <Link className="contact-button-link" to="/home/contact">
            Contact
          </Link>
        </div>

        {/* Copyright with 'currentYear' value to update automatically */}
        <div className="copyright-container">
          <span className="copyright-span">
            &copy; 2021 - {currentYear} Edith Heidmann. All Rights Reserved
          </span>
        </div>

        {/* Link Icon container */}
        <div className="link-icon-container">
          {/* GitHub Link */}
          <a
            className="link-icon"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ediheid"
          >
            <span>
              <ImGithub />
            </span>
          </a>

          {/* LinkedIn Link */}
          <a
            className="link-icon"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/edith-heidmann/"
          >
            <span>
              <ImLinkedin />
            </span>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
