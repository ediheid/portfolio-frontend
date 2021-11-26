import React, { useEffect } from "react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

// ! Import as SVG??!!
import hands from "./Static/hand2.jpeg";

// icons for hand animation
import { SiReact } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";
import { ImHtmlFive2 } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import { FaSass } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import { FaGitAlt } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { DiNpm } from "react-icons/di";
import { ImChrome } from "react-icons/im";
import { SiPostman } from "react-icons/si";

const IconAnimation = () => {
  // * Animate hands and icons when in view..
  // Using react-intersection-observer
  // Used on 'tech-icons-section'
  // will set boolean to true when in view
  // Component will then re-render ...
  const { ref, inView } = useInView();

  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  const animation4 = useAnimation();
  const animation5 = useAnimation();
  const animation6 = useAnimation();

  // ... function inside useEffect will then be executed when 'tech-icons-section' is inView (as per above)
  useEffect(() => {
    console.log("Use effect hook, inView = ", inView);
    //  For hand/icons animation - different speeds
    if (inView) {
      // Animation speed 1
      animation.start({
        opacity: [0.5, 0.9],
        y: ["70%", "-100%"],

        transition: {
          duration: 0.8,
          yoyo: 8,
          ease: "easeOut",
        },
      });
      // Animation speed 2
      animation2.start({
        opacity: [0.5, 0.9],
        y: ["70%", "-100%"],

        transition: {
          duration: 0.4,
          yoyo: 8,
          ease: "easeOut",
        },
      });

      // Animation speed 3
      animation3.start({
        opacity: [0.5, 0.9],
        y: ["70%", "-100%"],

        transition: {
          duration: 0.6,
          yoyo: 8,
          ease: "easeOut",
        },
      });

      // Animation speed 4
      animation4.start({
        opacity: [0.5, 0.9],
        y: ["70%", "-100%"],

        transition: {
          duration: 0.5,
          yoyo: 8,
          ease: "easeOut",
        },
      });
      // Animation speed 5
      animation5.start({
        opacity: [0.5, 0.9],
        y: ["70%", "-100%"],

        transition: {
          duration: 0.7,
          yoyo: 8,
          ease: "easeOut",
        },
      });
      // Animation speed 6
      animation6.start({
        opacity: [0.5, 0.9],
        y: ["70%", "-100%"],

        transition: {
          duration: 1.1,
          yoyo: 8,
          ease: "easeOut",
        },
      });

      // put out of screen if not in view
      if (!inView) {
        animation.start({ x: "-100vw" });
      }
    }
    // monitor inView..
    // ! ,[inView]  - currently without it in between }, ) at end of useEffect
  });

  return (
    /* Monitor when parent DIV of motion elements is in view.. 
         REF coming from react-intersection-observer */
    <>
      <h2
        className="toolkit-heading"
        data-aos="fade-left"
        data-aos-once="false"
        data-aos-delay="500"
        data-aos-duration="1000"
      >
        Tools and Tech
      </h2>

      <div
        className="tools-section"
        data-aos="zoom-in-up"
        data-aos-once="false"
        data-aos-delay="400"
        data-aos-duration="1000"
      >
        <section ref={ref} className="tech-icons-section">
          {/* // ? Tech icons */}
          {/* React */}
          <motion.div className="tech-icon" animate={animation}>
            <SiReact />
          </motion.div>

          {/* VSC */}
          <motion.div className="tech-icon" animate={animation2}>
            <DiVisualstudio />
          </motion.div>

          {/* Bootstrap */}
          <motion.div className="tech-icon" animate={animation3}>
            <DiBootstrap />
          </motion.div>

          {/* HTML 5 */}
          <motion.div className="tech-icon" animate={animation4}>
            <ImHtmlFive2 />
          </motion.div>

          {/* CSS 3 */}
          <motion.div className="tech-icon" animate={animation2}>
            <IoLogoCss3 />
          </motion.div>

          {/* Sass */}
          <motion.div className="tech-icon" animate={animation6}>
            <FaSass />
          </motion.div>

          {/* JavaScript */}
          <motion.div className="tech-icon" animate={animation}>
            <SiJavascript />
          </motion.div>

          {/* Node */}
          <motion.div className="tech-icon" animate={animation2}>
            <FaNodeJs />
          </motion.div>

          {/* Express */}
          <motion.div className="tech-icon" animate={animation3}>
            <SiExpress />
          </motion.div>

          {/* Mongo */}
          <motion.div className="tech-icon" animate={animation4}>
            <DiMongodb />
          </motion.div>

          {/* GitHub */}
          <motion.div className="tech-icon" animate={animation5}>
            <AiFillGithub />
          </motion.div>

          {/* Git */}
          <motion.div className="tech-icon" animate={animation6}>
            <FaGitAlt />
          </motion.div>

          {/* Photoshop */}
          <motion.div className="tech-icon" animate={animation}>
            <SiAdobephotoshop />
          </motion.div>

          {/* Figma */}
          <motion.div className="tech-icon" animate={animation3}>
            <CgFigma />
          </motion.div>

          {/* npm */}
          <motion.div className="tech-icon" animate={animation3}>
            <DiNpm />
          </motion.div>

          {/* Chrome (dev tools) */}
          <motion.div className="tech-icon" animate={animation3}>
            <ImChrome />
          </motion.div>

          {/* Postman */}
          <motion.div className="tech-icon" animate={animation5}>
            <SiPostman />
          </motion.div>

          <div className="hands-container">
            {/* // ! Hand image - import as svg??!! */}
            <img
              className="hands"
              src={hands}
              alt="open hands holding icons of technologies that I know"
            ></img>
          </div>
        </section>
      </div>
    </>
  );
};

export default IconAnimation;
