import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

const animateFrom = { opacity: 0, y: -40 };
const animateTo = { opacity: 1, y: 0 };

const MobileNavLinks = (props) => {
  return (
    <motion.ul
      initial={animateFrom}
      animate={animateTo}
      transition={{ delay: 0.05 }}
      className="mobile-ul-links-container"
    >
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.1 }}
        className="nav-links"
      >
        <HashLink className="nav-links" to="/home/#about">
          About
        </HashLink>
      </motion.li>

      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.2 }}
        className="nav-links"
      >
        <Link className="nav-links" to="/home/projects">
          Projects
        </Link>
      </motion.li>

      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.3 }}
        className="nav-links"
      >
        <Link className="nav-links" to="/home/webapps">
          Web-Apps
        </Link>
      </motion.li>

      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.4 }}
        className="nav-links"
      >
        <Link className="nav-links" to="/home/contact">
          Contact
        </Link>
      </motion.li>

      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.5 }}
        className="nav-links"
      >
        <Link className="nav-links" id="nav-home-link" to="/home/">
          Home
        </Link>
      </motion.li>
    </motion.ul>
  );
};

export default MobileNavLinks;
