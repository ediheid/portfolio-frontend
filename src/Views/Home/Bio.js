import React from "react";

import portrait from "./Static/portrait-4.png";
import code from "./Static/code.jpg";
import berlin from "./Static/berlin-map.png";

const Bio = () => {
  return (
    <section className="bio-container" id="about">
      {/* id for react-router HashLink */}

      {/* <div className="paragraph-container"> */}
      {/* // ! Commenting out paragrapph-container - not sure why I have it.. */}

      {/* Intro 'Who?' */}
      <div className="who">
        <h2
          data-aos="fade-right"
          data-aos-once="false"
          data-aos-duration="1000"
          className="bio-heading"
        >
          Who?
        </h2>

        <p
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-delay="200"
          data-aos-duration="1000"
          className="bio-paragraphs"
        >
          Creative full-stack web developer, specialising in{" "}
          <span className="bio-emphasized-text-p-1">frontend development </span>
          - <span className="bio-emphasized-text-p-1">design</span> focused with
          a background in fine arts, aiming for an exciting job opportunity to
          continue growing and blossoming into a professional developer.
        </p>

        <div
          className="image-container"
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <img
            className="portrait"
            src={portrait}
            alt="Cartoonised portrait of Edith, 3 shades of blue and 1 cream, framed in a circle."
          />
        </div>
      </div>

      {/*  'What?' */}
      <div className="what">
        <h2
          data-aos="fade-right"
          data-aos-once="false"
          data-aos-duration="1000"
          className="bio-heading"
        >
          What?
        </h2>
        <p
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-delay="200"
          data-aos-duration="1000"
          className="bio-paragraphs"
        >
          Broad knowledge of frontend development, particularly in{" "}
          <span className="bio-emphasized-text-technologies">React</span> and{" "}
          <span className="bio-emphasized-text-technologies">SASS</span> with a
          keen interest in UI/UX - creating dynamic, sophisticated and scalable
          websites and web apps.
        </p>
        <p
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-delay="400"
          data-aos-duration="1000"
          className="bio-paragraphs"
        >
          Well-versed in programming basics and vanilla{" "}
          <span className="bio-emphasized-text-technologies">JavaScript,</span>{" "}
          along with backend development skills - building servers and databases
          with <span className="bio-emphasized-text-technologies">Node,</span>{" "}
          <span className="bio-emphasized-text-technologies">Express</span> and{" "}
          <span className="bio-emphasized-text-technologies">MongoDB.</span>
        </p>

        {/* <div
          className="image-container"
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <img
            className="code-img"
            src={code}
            alt="cartoon browser and code tab in a black and pastel universe. Made by https://www.freepik.com"
          />
        </div> */}
      </div>

      {/*  'Where?' */}
      <div className="where">
        <h2
          data-aos="fade-right"
          data-aos-once="false"
          data-aos-duration="1000"
          className="bio-heading"
        >
          Where?
        </h2>

        <p
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-delay="400"
          data-aos-duration="1000"
          className="bio-paragraphs"
        >
          Australian born, Berlin based - currently finishing up an intensive
          one year web development course in{" "}
          <span className="bio-emphasized-text-technologies">MERN</span> stack
          at the Digital Career Institute.
          {/* after completing a 1 year intensive training 
          program at Digital Career Institute in Berlin. */}
        </p>
        {/* <p
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-delay="400"
          data-aos-duration="1000"
          className="bio-paragraphs"
        >
          {" "}
          Grew up and studied fine arts in Sydney, majoring in sculpture and
          photography.
        </p> */}
        {/* 
        <div
          className="image-container"
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <img
            className="berlin-img"
            src={berlin}
            alt="Cartoon like illustration of Berlin train map without names. The word Berlin in the top right corner. Source from https://www.reddit.com/r/dataisbeautiful/comments/6baefh/berlin_subway_map_compared_to_its_real_geography/"
          />
        </div> */}
      </div>
      {/* </div> */}
    </section>
  );
};

export default Bio;
